import express from 'express';
import React from 'react';
import App from '../source/App.js';
import { renderToString } from 'react-dom/server';

const app = express();

app.use(express.static('client'));

const template = (title, body) => {
    return `<!doctype html>
        <html>
            <head>
                <title>${title}</title>
            </head>
            <body>
                <style>
                    #root {
                        display: none;
                    }
                </style>
                <div id='root'>${body}</div>
            </body>
            <script src='app.js'></script>
            <script>
                document.getElementById('root').style.display = "block";
            </script>
        </html>`;
}

app.get('/*', (req, res) => {
    let body = renderToString(<App />);
    let page = template('My favorite books', body);
    res.send(page);
})

app.listen('3000', () => console.log('Server listening at 3000'));