/**
 * Created by r.pek on 4/6/2018.
 */
/*
setTimeout(function(){
    console.log(1);
}, 1000);
console.log(2);

setTimeout(function(){
    console.log(3);
}, 500);

console.log(4);
*/


console.log('Hello Async!');

printMessage('Hello Ratanak!');

function printMessage(message){
    setTimeout(function(){
        console.log(message);
    }, 2000);
}

