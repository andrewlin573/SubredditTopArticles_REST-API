const express = require('express');
var path = require('path');        
var cors = require('cors')

const port = process.env.PORT || 4200;   
const app = express();
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//Set the base path to the angular-test dist folder
app.use(express.static(path.join(__dirname, 'dist/cisco-reddit-challenge')));

//Any routes will be redirected to the angular app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/cisco-reddit-challenge/index.html'));
});

//Starting server on port 8081
app.listen(port, () => {
    console.log('Server started!');
    console.log(port);
});
