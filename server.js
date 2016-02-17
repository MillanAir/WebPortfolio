var express = require('express');
var app = express();


// index page 
app.use(express.static('public/'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});