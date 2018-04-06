/**
 * Created by r.pek on 4/6/2018.
 */
var argv = require('yargs')
    .command('find', 'Find your location!', function(yargs){
        yargs.option({
            weather:{
                demand:false,
                alias:'w',
                type:'string',
                description:'Type your city name!'
            },
            location:{
                demand:true,
                alias:'l',
                description:'Location for fetch weather!',
                type:'string'
            }
        }).help('help');
    }).help('help').argv;



var location = require('./location.js');
var weather = require('./weather.js');


if(typeof argv.l === 'string' && argv.l.length > 0){
    console.log('LOCATION PROVIDED!');
    /**
     * Find weather
     * */
    weather(argv.l, function(currentWeather){
        console.log(currentWeather);
    });

}else{
    console.log('LOCATION WAS NOT PROVIDED!');
    /**
     * Find Location
     * */
    location(function (location) {
        if(location){
            weather(location.city, function(currentWeather){
                console.log(currentWeather);
            });
        }else{
            console.log('Unable to guess the location!');
        }

    });

}
