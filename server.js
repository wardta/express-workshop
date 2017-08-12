var fs = require('fs');
var express = require('express');
var app = express();
var formidable = require('express-formidable');
fs.readFile(__dirname + '/data/posts.json', function (error, file) {

    console.log(file.toString());
    var parsedFile = JSON.parse(file);
    
    console.log(parsedFile['1467390356291'])
});


app.use(express.static("public"));

app.use(formidable());

//npm install express-formidable --save
app.post('/create-post', function(req, res) {
    console.log("hello");
});

app.listen(8080, function() { 
    console.log('Server is listening on Port 8080. Ready to accept requests!'); 
});
