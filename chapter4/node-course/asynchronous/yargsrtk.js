/**
 * Created by r.pek on 4/6/2018.
 */

module.exports=function(callback){

    var argv = require('yargs')
        .command('find', 'Find your location!', function(yargs){
            yargs.option({
                country:{
                    demand:true,
                    alias:'c',
                    type:'string',
                    description:'Type your city name!'
                }
            }).help('help');
        }).help('help');


    callback(argv);


};