/**
 * Created by r.pek on 4/5/2018.
 */
console.log('App starting by Ratanak!');

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
        password: {
            demand: true,
            alias: 'p',
            type: 'string',
            description: 'Password'
        },
        master: {
            demand: true,
            alias: 'm',
            type: 'string',
            description: 'Master password!'
        }
    }).help('help');
})
    .command('get', 'Get user!', function (yargs) {
        yargs.option({
            name: {
                demand: true,
                alias: 'n',
                type: 'string',
                description: 'Name'
            },
            master: {
                demand: true,
                alias: 'm',
                type: 'string',
                description: 'Master password'
            }
        });
    })
    .argv;

var cmd = argv._[0];
storage.initSync();
/**
 * for create command
 * */
if (cmd === 'create') {
    try{
        var encryptAccount = {
            name: argv.name,
            username: argv.username,
            password: argv.password
        };
        createAccountEncrypt(encryptAccount, argv.master);

    }catch (e){
        console.log('Unable to create account.');
    }


} else if (cmd === 'get') {
    try{
        var obj = getAccounts(argv.master);

        if (typeof obj === 'undefined') {
            console.log('Account not found!');
        } else {
            console.log('Account found!');
            console.log((obj));
        }
    }catch (e){
        console.log('Unable to fetch account');
    }

}





/**===========================  Exercise ===================================*/
function getAccounts(masterPwd) {
    //use getItemSync
    var encryptedAccount = storage.getItemSync('accounts');
    var accounts=[];
    //decrypt
    if (typeof encryptedAccount !== 'undefined') {
        var bytes = crypto.AES.decrypt(encryptedAccount, masterPwd);
        accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
    }
    //return array
    return accounts;
}

/** Create object and save into
 * node persist
 * */
function saveAccounts(accounts, masterPassword) {

    //encrypt account
    var encryptedAccounts=crypto.AES.encrypt(JSON.stringify(accounts), masterPassword).toString();

    // setItem Sync
    storage.setItemSync('accounts', encryptedAccounts);

    // return accounts
    return accounts;
}

function createAccountEncrypt(account, masterpwd) {

    var accounts = getAccounts(masterpwd);
    accounts.push(account);

    saveAccounts(accounts, masterpwd);
    // return account
    return account;

}
/**
 * Find account node-persist
 * */
function getAccount(accountName, masterPassword) {
    var accounts = getAccounts(masterPassword);
    var matchedAccount;

    accounts.forEach(function(account){
        if(account.name === accountName){
            matchedAccount=account;
        }
    });
    return matchedAccount;
}

