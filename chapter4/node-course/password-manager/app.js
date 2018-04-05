/**
 * Created by r.pek on 4/5/2018.
 */
console.log('App starting!');

var storage = require('node-persist');
var crypto = require('crypto-js');
var argv = require('yargs').command('create', 'Create user!', function (yarg) {
    yarg.option({
        name: {
            demand: true,
            alias: 'n',
            type: 'string',
            description: 'Name ....'
        },
        username: {
            demand: true,
            alias: 'u',
            type: 'string',
            description: 'Username'
        },
        password:{
            demand :true,
            alias:'p',
            type:'string',
            description:'Password'
        },
        master:{
            demand:true,
            alias:'m',
            type:'string',
            description:'Master password!'
        }
    }).help('help');
})
    .command('get', 'Get user!', function (yargs) {
        yargs.option({
            name:{
                demand : true,
                alias : 'n',
                type:'string',
                description:'Name'
            }
        });
    })
    .argv;

var cmd = argv._[0];
storage.initSync();
/**
 * for create command
 * */
if (cmd === 'create'){
    var encryptAccount={
        name: argv.name,
        username: argv.username,
        password: argv.password
    };
    createAccountEncrypt(encryptAccount, argv.master);

}else if(cmd ==='get'){
    var obj=getAccount(argv.name);
    if(typeof obj ==='undefined'){
        console.log('Account not found!');
    }   else{
        console.log('Account found!');
        console.log((obj));
    }
}



/** Create object and save into
 * node persist
 * */
function createAccount(account) {
    var accounts = storage.getItemSync('accounts');
    if (typeof accounts == 'undefined') {
        accounts = [];
    }
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
    return account;
}

/**
 * Find account node-persist
 * */
function getAccount(accountName) {
    var accounts = storage.getItemSync('accounts');
    if(typeof accounts !== 'undefined'){
        var matchedAccount;
        accounts.forEach(function (acc) {
            if (acc.name === accountName) {
                matchedAccount = acc;
            }
        });
        return matchedAccount;
    }
}
/**==============================================================*/
function getAccountEncrypt(masterPwd){
    var accounts = storage.getItemSync('accounts');
    if(typeof accounts !== 'undefined'){
        var matchedAccount;
        accounts.forEach(function (acc) {
            if (acc.name === accountName) {
                matchedAccount = acc;
            }
        });
        return matchedAccount;
    }
}

function createAccountEncrypt(account, masterpwd) {
   // console.log(typeof account);
    // encrypt account
    var rawString = JSON.stringify(account);
    var encryptString= crypto.AES.encrypt(rawString, masterpwd);

    // setItemSync
    storage.setItemSync('accounts', encryptString);

    // return account
    return account;

}


