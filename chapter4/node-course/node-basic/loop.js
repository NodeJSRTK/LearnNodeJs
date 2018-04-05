/**
 * Created by r.pek on 4/4/2018.
 */

function countDownWhile(start, stop){
    while(start>stop){
        console.log("Count Down While : "+ start);
        start--;
    }
}
countDownWhile(10, 0);

function countDownFor(start, stop) {
    for(stop;stop>start;stop--){
        console.log('Count down for '+ stop);
    }
}
countDownFor(0, 10);