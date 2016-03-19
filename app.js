var express = require('express');
var mysql = require('./dbcon.js');
var app = express();
var handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});
//var normalize_css_code = require("normalize.css");
var request = require('request');
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({
    extended: false
}));



app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 80);


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
  res.render('howto',context);
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
  
  res.render('contact',context);
});

//For the workout app 



app.get('/reset-table', function (req, res, next) {
    console.log("resetting stuff");
    var context = {};
    mysql.pool.query("DROP TABLE IF EXISTS workouts", function (err) {
        var createString = "CREATE TABLE workouts(" +
            "id INT PRIMARY KEY AUTO_INCREMENT," +
            "name VARCHAR(255) NOT NULL," +
            "reps INT," +
            "weight INT," +
            "date DATE," +
            "lbs BOOLEAN)";
        console.log("yikes");
        mysql.pool.query(createString, function (err) {
            context.results = "Table reset";
            res.render('home', context);
            //res.sendFile('public/htmlform.html', {root: __dirname


        });
        // res.sendFile(__dirname + '/public/htmlform.html');    
    });
});


app.get('/exercise', function (req, res, next) {
    var context = {};
    mysql.pool.query('SELECT * FROM workouts', function (err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        context.results = rows;
        context.results.forEach(function (current, index, array) {
            if (current.lbs == 1) {
                current.lbs = "lbs";
            } else {
                current.lbs = "kilos";
            }
        });
        res.render('exercise', context);
    });
});



app.post('/insert', function (req, res, next) {
            var context = {};

            //if(req.body['Exercise']){
            console.log(req.body);
            console.log("1");
            if (req.body.name && req.body.reps && req.body.weight && req.body.date && req.body.lbs) {
                mysql.pool.query("INSERT INTO workouts (name, reps, weight, date, lbs) VALUES (?, ?, ?, ?, ?)", [req.body.name, req.body.reps, req.body.weight,
				       req.body.date, req.body.lbs], function (err, result) {
                    if (err) {
                        next(err);
                        return;
                    }
                    var addedId = result.insertId;

                    mysql.pool.query('SELECT * FROM workouts WHERE id=?', [addedId], function (err, rows, fields) {
                        if (err) {
                            next(err);
                            return;
                        }

                        var data = rows;
                        if (data.lbs === 0) {
                            data.lbs = "kilos";
                        } else {
                            data.lbs = "lbs";
                        }

                        res.type('text/plain');
                        data = JSON.stringify(data);
                        res.send(data);
                    });
                });
            }
            //	}

            if (req.body['edit']) {
                context = {}
                mysql.pool.query("SELECT * FROM workouts WHERE id = ?", [req.body.id], function (err, rows, fields) {
                    if (err) {
                        next(err);
                        return;
                    }
                    context.edit = rows;
                    res.render('changes', context);
                });
            }

            if (req.body['deleted']){
                mysql.pool.query("DELETE FROM workouts WHERE id=?", [req.body.id], function (err, result) {
                if (err) {
                    next(err);
                    return;
                }
                mysql.pool.query("SELECT * FROM workouts", function (err, rows, fields) {
                    if (err) {
                        next(err);
                        return;
                    }
                    res.send(JSON.stringify(rows));
                });
            });
        }
});


//

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
