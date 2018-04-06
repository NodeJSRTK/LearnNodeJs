/**
 * Created by r.pek on 4/6/2018.
 */

var request = require('request');

module.exports=function(location, callback){
    var url = 'http://samples.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(location)+',uk&appid=b6907d289e10d714a6e88b30761fae22';
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (error) {
            callback('Unable to fetch weather.');
        } else {
            callback('It\'s ' + body.main.temp + 'c in ' + body.name + '!');
        }
    });
};
