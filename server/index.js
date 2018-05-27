import express from 'express';
import React from 'react';
import App from '../source/App.js';
import { renderToString } from 'react-dom/server';
import { template } from './template.js';
import mongoose from 'mongoose';
import { database } from './database';

const app = express();

app.use(express.static('client'));

app.get('/*', (req, res) => {
    database.getBooks(
        err => console.err(err),
        books => {
            let body = renderToString(<App books={books}/>);
            console.log(body)
            let page = template('My favorite books', body, books);
            res.send(page);
        }
    )
    
})

mongoose.connect('mongodb://localhost:27017/favbooks');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database connected');
    app.listen('3000', () => console.log('Server listening at 3000'));
});
