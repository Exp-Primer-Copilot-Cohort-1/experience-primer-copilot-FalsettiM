// Create web server application
// 1. create a web server
// 2. create a route for the home page
// 3. create a route for the about page
// 4. create a route for the contact page
// 5. create a route for the services page
// 6. create a route for the help page
// 7. start the web server

// 1. create a web server
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');
const app = express();

// 2. create a route for the home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page',
        content: 'This is the home page content'});
    });