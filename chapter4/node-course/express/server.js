/**
 * Created by r.pek on 4/9/2018.
 */

var express = require('express');
var app = express();
var PORT=process.ENV.PORT||3000;
var middleware=require('./middleware.js');


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About us');
});

//app.use(middleware.requireAuthentication);

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function(){
    console.log('Listen on '+PORT+'!');
});