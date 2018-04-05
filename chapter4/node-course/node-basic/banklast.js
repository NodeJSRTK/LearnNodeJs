var accountList = [];

function createAccount(account) {
    accountList.push(account);
    return account;
}

function getAccountByName(name) {
    var foundAccount;
    /*accountList.forEach(function(account){
     if(name === account.name){
     foundAccount=account;
     }
     });*/

    /*   for(var i=0;i<accountList.length;i++){
     if(accountList[i].name === name){
     foundAccount=accountList[i];
     }
     }*/

    var i = 0;
    while (i < accountList.length) {
        if(accountList[i].name === name){
            foundAccount=accountList[i];
        }
        i++;
    }

    return foundAccount;
}

function deposit(account, balance) {
    if(numberValidation(balance)){
        account.balance += balance;
    }else{
        console.log('Balance not correct format!');
    }

}

function withdraw(account, balance) {
    if(numberValidation(balance)){
        account.balance -= balance;
    }else{
        console.log('Not correct format!');
    }

}

function getBalance(account) {
    return account.balance;
}

function numberValidation(balance){
    if(typeof  balance === 'number'){
        return true;
    }else{
        return false;
    }
}

function createBalanceGetter(account) {
    return function () {
        return account.balance;
    }
}


createAccount({name: 'Ratanak', balance: 0});
createAccount({name: 'Seyha', balance: 0});
createAccount({name: 'Vorn', balance: 0});

var rtk = getAccountByName('Ratanak');
deposit(rtk, 1232);
withdraw(rtk, 123)
var accrtk=createBalanceGetter(rtk);
console.log(accrtk());
console.log(accrtk());
console.log(accrtk());
//console.log(accountList);




