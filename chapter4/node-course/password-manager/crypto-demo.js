/**
 * Created by r.pek on 4/5/2018.
 */
var crypto = require('crypto-js');

var secretMsg= "Hello crush, I love you!";
var secretKey ="123abc";

var secretMsgExercise={
    name:'Ratanak Pek',
    secretName:'007s9'
}

/**
 * How to encrypt
 * */
var encrypt = crypto.AES.encrypt(secretMsg, secretKey);
console.log('Encrypt : ' + encrypt);

/**
 * How to decrypt
 * */
var bytes =crypto.AES.decrypt(encrypt, secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log(decryptedMessage);

/**
 * Exercise
 * */


var secretMsgExerciseToString= JSON.stringify(secretMsgExercise);
var encryptScreeEx=crypto.AES.encrypt(secretMsgExerciseToString, secretKey);
console.log('Exercise encrypt: '+ encryptScreeEx);

var decryptExByte = crypto.AES.decrypt(encryptScreeEx, secretKey);
var decryptExMsg= decryptExByte.toString(crypto.enc.Utf8);
var decryptResult = JSON.parse(decryptExMsg);
console.log(decryptResult.name);
