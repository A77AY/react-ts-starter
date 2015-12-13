import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RoutingContext} from 'react-router'
import routes from './routes'
import config from './config';

// Require extensions
require.extensions['.css'] = () => {};
require.extensions['.styl'] = () => {};

// Express
const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/static', express.static(path.resolve(__dirname, 'static')));
app.use('/', (req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            res.status(200).send(
                renderToString(<RoutingContext {...renderProps} />))
        } else {
            res.status(404).send('Not found')
        }
    })
});

// Run app
app.listen(config.port, config.host, function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> Server: ' + config.url);
});