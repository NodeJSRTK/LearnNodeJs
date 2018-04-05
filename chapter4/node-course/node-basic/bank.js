var accountList=[];

function createAccount(account){
    accountList.push(account);
    return account;
}

function getAccountByName(name){
    var foundAccount;
    accountList.forEach(function(account){
        if(name === account.name){
            foundAccount=account;
        }
    });
    return foundAccount;
}

function deposit(account, balance){
    account.balance+=balance;
}

function withdraw(account, balance) {
    account.balance -=balance;
}

function getBalance(account){
    return account.balance;
}

createAccount({name:'Ratanak', balance:0});
createAccount({name:'Seyha', balance:0});
createAccount({name:'Vorn', balance:0});


var rtk=getAccountByName('Ratanak');
deposit(rtk, 100);
withdraw(rtk, 23);

console.log(rtk);
console.log('*************************&&********************************')
console.log(accountList);
console.log('*************************&&********************************')
var seyha=getAccountByName('Seyha');
deposit(seyha, 12);
withdraw(seyha, 15);
console.log(seyha);

console.log('*************************&&********************************')
console.log(accountList);
console.log('*************************&&********************************')



