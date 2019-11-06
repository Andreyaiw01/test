'use strict'
const mysql = require("mysql"); // connect mysql
const express = require("express"); // connect express
const helmet = require('helmet') // connect helmet, 
const app = express();

app.use(helmet());

//connect to database
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '',
  database: 'mydb',
});

pool.connect(function(err) {
    if (err) throw err;
}); 

// view template  
app.set('view engine', 'hbs');

// routing 
app.get('/', function(req, res){
    pool.query('SELECT * FROM users LIMIT 10', function(err, data) {
      if(err) return console.log(err);
      res.render('index.hbs', {
          users: data
      });
    });
});

//srart server
app.listen(8080, function(){
  console.log('Server is running...');
});