/**
 * Created by r.pek on 4/3/2018.
 */


 function validator(text){
    if(typeof (text) === "boolean"){

        console.log(!text);

    }else{
        console.log('It is not!')
    }
}

validator(false);