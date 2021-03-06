var express = require('express');

var app = express();




var handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});




app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 8080);





app.get('/',function(req,res,next){
  var context = {};

  res.render('home',context);
});

app.get('/about',function(req,res,next){
  var context = {};

  res.render('about',context);
});

app.get('/underconstruction',function(req,res,next){
  var context = {};

  res.render('construction',context);
});

app.get('/projects',function(req,res,next){
  var context = {};

  res.render('projects',context);
});

app.get('/dom',function(req,res,next){
  var context = {};
  //alert("aho ho ho");
  res.render('dom',context);
});

app.get('/weather',function(req,res,next){
  var context = {};

  res.render('weather',context);
});

app.get('/howto',function(req,res,next){
  var context = {};
  res.render('construction',context);
});
/*
app.get('/exercise',function(req,res,next){
  var context = {};
  res.render('exercise',context);
});
*/
app.get('/calculator',function(req,res,next){
  var context = {};
  res.render('calculator',context);
});

app.get('/contact',function(req,res,next){
  var context = {};

  res.render('construction',context);
});

app.get('/skyverge',function(req,res,next){
  var context = {};

  res.render('SkyVerge',context);
});

app.get('/ionicprojects',function(req,res,next){
  var context = {};

  res.render('ionicprojects',context);
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
