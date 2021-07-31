const CommentController = require('./controllers/CommentController');
const express = require('express');

const routes = express.Router();

routes.post('/new',CommentController.insertNewComment);
routes.get('/all',CommentController.selectAllComments);

module.exports = routes;