/**
 * Created by r.pek on 4/5/2018.
 */
var argv = require('yargs')
    .command('hello', 'Greets the user!', function(yargs){
        yargs.option({
           first: {
               demand:true,
               alias:'f',
               description:'Your first name goes here'
           },
            last:{
               demand:true,
                alias:'l',
                description:'Your last name!'
            }
        }).help('help');
    })
    .help('help')
    .argv;

var cmd = argv._[0];
if (cmd === 'hello' && typeof  argv.first !== 'undefined' && typeof argv.last !== 'undefined') {
    console.log('Hello, ' + argv.first + '  ' + argv.last + '!');
} else if (cmd === 'hello' && typeof  argv.first !== 'undefined') {
    console.log('Hello, ' + argv.first + '!');
} else {
    console.log('Hello World!');
}