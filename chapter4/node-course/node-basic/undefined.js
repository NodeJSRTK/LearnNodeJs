/**
 * Created by r.pek on 4/3/2018.
 */

var undefin=undefined;
var x;
if(typeof  x=== undefin){
    console.log('Underfine');
}else{
    console.log('Defined');
}



function println(rtk){
    if(typeof rtk ==='undefined'){
        console.log('Hello World');
    }else{
        console.log('Hello '+ rtk);
    }
}

//see we can create 2 type of parameter for one function

println();
println("RTKPK")