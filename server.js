'use strict';

const express = require('express');
var Docker = require('dockerode');
var bodyParser = require('body-parser');
var docker = new Docker();
var allContainers = new Array();
var allImages = new Array();


//Constants

const PORT = 80;
const HOST = '0.0.0.0';


// docker.listContainers({all: true}, function (err, containers) {
//    containers.forEach(function (containerInfo) {
//        allContainers.push(containerInfo);
//    });
// });

// docker.listImages({all: true}, function (err, images) {
//    images.forEach(function (imagesInfo) {
//        allImages.push(imagesInfo);
//    });
// });


//App
const app = express();

//Config
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//Routes get
app.get('/dashboard', function (req, res) {
   res.render('pages/dashboard')
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

//Route Post
// app.post('/create', function (req, res) {
//   // docker.createContainer();
//    console.log(req.body)
// });

//Launch server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);