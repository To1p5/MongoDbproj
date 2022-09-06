const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/:promotionsId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send promotion ${req.params.promotionsId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403
        res.end(`Post operation not supported on /promotions/:promotionId`);
    })
    .put((req, res) => {
        res.end(`It will update ${req.params.promotionsId}`);
    })
    .delete((req, res) => {
        res.end(`Will delete ${req.params.promotionsId}`);
    });

promotionRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the promotions to you');
    })
    .post((req, res) => {
        res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res) => {
        res.end('Deleting all promotions');
    });



module.exports = promotionRouter;