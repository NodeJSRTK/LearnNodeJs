/**
 * Created by r.pek on 4/6/2018.
 */

function doWork() {
    throw new Error('unable to do work');
}

try {
    doWork();
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Finally block executed!');
}

console.log('try catch ended');