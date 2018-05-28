import express from 'express';
import React from 'react';
import App from '../source/App.js';
import { renderToString } from 'react-dom/server';
import { template } from './template.js';
import mongoose from 'mongoose';
import { database } from './database';
import { StaticRouter } from 'react-router';

const app = express();

app.use(express.static('client'));

app.get('/*', (req, res) => {
    database.getBooks(
        err => console.err(err),
        books => {
            let context = {};
            let body = renderToString(
                <StaticRouter location={req.url} context={context}>
                    <App books={books}/>
                </StaticRouter>);
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
