const express = require('express');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will
// take control of requests starting with path /user.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId;

// Complete Routes:

// Incomplete Routes:
// /artist/uploadSong/:id
// /artist/uploadAlbum/:id
// /artist/editSong/:id
// /artist/editAlbum/:id
// /artist/deleteSong/:id
// /artist/deleteAlbum/:id
// /artist/viewSongStreams/:id
// /artist/viewAlbumStreams/:id
// /artist/viewAllStreams/:id

// For Debugging:
// console.log('query: ', query);
// console.log('req.params: ', req.params);
// const query = {_id: ObjectId(req.params.id)};
// console.log('req.body: ', req.body);
// console.log('req.body._id: ', req.body._id);

// This route allows an artist to upload a song
userRoutes.route('/artist/uploadSong/:id').post(function(req, response) {});

// This route allows an artist to upload an album
userRoutes.route('/artist/uploadAlbum/:id').post(function(req, response) {});

// This route allows an artist to edit a song's information
userRoutes.route('/artist/editSong/:id').put(function(req, response) {});

// This route allows an artist to edit an album's information
userRoutes.route('/artist/editAlbum/:id').put(function(req, response) {});

// This route allows an artist to delete a song
userRoutes.route('/artist/deleteSong/:id').delete((req, response) => {});

// This route allows an artist to delete an album
userRoutes.route('/artist/deleteAlbum/:id').delete((req, response) => {});

// This route allows an artist view a song's streams
userRoutes.route('/artist/viewSongStreams/:id').get(function(req, response) {});

// This route allows an artist view an album's streams
userRoutes.route('/artist/viewAlbumStreams/:id').get(function(req, response) {});

// This route allows an artist view all of their streams
userRoutes.route('/artist/viewAllStreams/:id').get(function(req, response) {});

module.exports = userRoutes;
