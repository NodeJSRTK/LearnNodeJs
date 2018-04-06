/**
 * Created by r.pek on 4/6/2018.
 */
/*var callback=require('./callbackB.js');

callback(function (valueFromCallback) {
   console.log(valueFromCallback);
});*/


var obj =function(callback){
    callback('Hello');
};

obj(function(value){
   console.log(value);
});