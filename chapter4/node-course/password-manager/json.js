/**
 * Created by r.pek on 4/5/2018.
 */


var person={
    name:'Pek Ratanak',
    balance:234,
    room:'Phnom Penh'
};


/**
 * Convert object into
 * JSON
 * */
var obj = JSON.stringify(person);
console.log(obj);
console.log(typeof obj);

/** Convert Json into
 * Object
 * */

var objConvert= JSON.parse(obj);
console.log(objConvert.name);

/**
 * Exercise
 * */

var animal='{"name":"Ratanak"}';

var animalObj = JSON.parse(animal);
animalObj.age=123;
console.log(animalObj);
var str = JSON.stringify(animalObj);
console.log(str);



