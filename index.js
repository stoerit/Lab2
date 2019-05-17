var express = require('express');
var app = express();
var path = require('path');
const data = require('./top_2018_movies.json');

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Create a function that lists all the movies
app.get('/all_movies', function (req, res) {
    for(var i = 0; i < data.length; i++){
        var movieTitle = data[i].movie;
        res.write(movieTitle + `\n`);
    }
  });

//Create a function that lists all the movies that grossed above 20 million and genre is action
app.get('/action', function(req, res){
    for(var x = 0; x < data.length; x++){
        if(data[x].gross > 20000000 && data[x].genre == "Action"){
            var movieTitle = data[x].movie;
            res.write(movieTitle + `\n`)
        }
    }
    res.end();
});

//Create a function that lists the movies that are rated "PG-13" and number of tickets sold is between 1 and 5 million
app.get('/pg', function(req, res){
    for(var y = 0; y < data.length; y++){
        if(data[y].mpaa == "PG-13" && data[y].tickets_sold > 1000000 && data[y].tickets_sold < 5000000){
            var movieTitle = data[y].movie;
            res.write(movieTitle + `\n`)
        }
    }
    res.end();
});

//Create a function that sorts the movies based on "distributor"
app.get('/distributor', function(req, res){
    
});

app.listen(3000)