var express = require('express');
//var mysql = require('./dbcon.js');
var app = express();
var handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});
//var request = require('request');
//var bodyParser = require('body-parser');



/*app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));*/



app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);


app.get('/',function(req,res,next){
  var context = {};
  
  res.render('home',context);
});

app.get('/about',function(req,res,next){
  var context = {};
  
  res.render('about',context);
});

app.get('/projects',function(req,res,next){
  var context = {};
  
  res.render('about',context);
});

app.get('/example',function(req,res,next){
  var context = {};
  
  res.render('example',context);
});

app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
