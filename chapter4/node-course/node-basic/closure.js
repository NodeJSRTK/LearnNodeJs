/**
 * Created by r.pek on 4/5/2018.
 */
function helloWorld(msg){
    return function (name) {
        return name+msg;
    }
}

var name=helloWorld('ratanak');
console.log(name("Pek "));