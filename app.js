/*
Server File
App Name: FE_demo
Purpose: Server Init File
Created By: Jack Solutions
Created Date: 09/06/17
*/

var express = require('express'),
    http = require('http'),
    path = require('path'),
    chalk = require('chalk'),
    fs = require('fs');

var app = express();

// Setting Application PORT
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Default Application Path
app.use(express.static(path.join(__dirname, 'public')));

// Default use path from  server node_modules to public
// app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

// Application Routes
require('./routes/index.js')(app);


// Starting Server...
http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
    console.log(chalk.blue('Demo started on port ' + app.get('port')));
});
