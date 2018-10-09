var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.env.PORT || 8888;



var express = require('express');
var serveIndex = require('serve-index');
var open = require('open');
var app = express();
var fs = require('fs');
var path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const cheerio = require('cheerio');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var date = new Date();
var current_hour = date.getHours();
app.use(serveIndex('/_site'));
app.use(express.static('_site'));


const server = app.listen(process.env.PORT || 5000, () => {
  console.log("date = ", date);
  console.log("current_hour = ", current_hour);
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
  open('http://127.0.0.1:5000');
});
