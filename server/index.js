import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import App from '../source/App.js';
import { renderToString } from 'react-dom/server';
import { template } from './template.js';
import mongoose from 'mongoose';
import { database } from './database';

//passport authentication
import jwt from 'jsonwebtoken';
import passport from 'passport';
import passportJWT from 'passport-jwt';

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'bookmela';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  database.getUser(jwt_payload.id, 
    err => console.log(err), 
    user => {
        if (user) {
            next(null, user);
        } else {
            next(null, false);
        }
    });
});

passport.use(strategy);
//passport authentication

const app = express();

app.use(passport.initialize());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use(express.static('client'));

app.post("/login", function(req, res) {
    if(req.body.email && req.body.password){
      var email = req.body.email;
      var password = req.body.password;
    }

    database.getUserByEmail(email, 
        err => console.err(err), 
        user => {
            if( !user ){
              res.status(401).json({message:"no such user found"});
              return;
            }
            
            if(user.password === req.body.password) {
              var payload = {id: user.id};
              var token = jwt.sign(payload, jwtOptions.secretOrKey);
              res.json({message: "ok", token: token});
            } else {
              res.status(401).json({message:"passwords did not match"});
            }
        });    
});

app.post('/book', passport.authenticate('jwt', {session: false}), (req, res) => {
    if (req.body && req.body.title && req.body.author) {
        database.addBook(req.body.title, req.body.author, err => console.log(err), book => res.send(book));
    }
});

app.get('/upvote/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    let id = req.params.id;
    database.voteBook(id, true,
        err => console.err(err),
        updatedBook => res.send(updatedBook));
});

app.get('/downvote/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    let id = req.params.id;
    database.voteBook(id, false,
        err => console.err(err),
        updatedBook => res.send(updatedBook));
});

app.get('/search/:str', (req, res) => {
    var str = req.params.str;
    database.search(str,
        err => console.err(err),
        books => res.send(books));
})

app.get('/books', (req, res) => {
    database.getBooks(
        err => console.err(err),
        books => res.send(books));
})

app.get('/', (req, res) => {
    database.getBooks(
        err => console.err(err),
        books => {
            let body = renderToString(<App books={books}/>);
            let page = template('My favorite books', body, books);
            res.send(page);
        }
    )
    
})

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database connected');
    app.listen('3000', () => console.log('Server listening at 3000'));
});
