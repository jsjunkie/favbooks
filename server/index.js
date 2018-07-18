import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import App from '../source/App.js';
import { renderToString } from 'react-dom/server';
import { template } from './template.js';
import mongoose from 'mongoose';
import { database } from './database';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use(express.static('client'));

app.post('/book', (req, res) => {
    if (req.body && req.body.title) {
        database.addBook(req.body.title, err => console.log(err), book => res.send(book));
    }
});

app.get('/upvote/:id', (req, res) => {
    let id = req.params.id;
    database.voteBook(id, true,
        err => console.err(err),
        updatedBook => res.send(updatedBook));
});

app.get('/downvote/:id', (req, res) => {
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
