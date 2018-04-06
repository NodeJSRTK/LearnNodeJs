/**
 * Created by r.pek on 4/6/2018.
 */
var request = require('request');
var url = 'http://ipinfo.io';

module.exports=function(callback){
    request({
        url:url,
        json:true
    }, function(error, response, body){
        if(error){
            callback(body);
        }else{
            callback(body);
        }
    });
};