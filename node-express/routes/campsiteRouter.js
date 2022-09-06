const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/:campsitesId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send campsite ${req.params.campsitesId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403
        res.end(`Post operation not supported on /campsites/:campsiteId`);
    })
    .put((req, res) => {
        res.end(`It will update ${req.params.campsitesId}`);
    })
    .delete((req, res) => {
        res.end(`Will delete ${req.params.campsitesId}`);
    });

campsiteRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the campsites to you');
    })
    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /campsites');
    })
    .delete((req, res) => {
        res.end('Deleting all campsites');
    });



module.exports = campsiteRouter;