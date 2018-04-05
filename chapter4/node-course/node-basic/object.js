
var person={};

person.firstName="Ratanak";
person.lastName="Pek";
person.age=25;

delete person.firstName;

function greetUser(obj){
    console.log('Hello '+ obj.firstName+' '+obj.lastName+' '+ obj.age);
}
greetUser(person);


console.log('========================================================')

var ratanak={};
ratanak['first']='Ratanak';
ratanak['last']='Pek';

function greetRatanak(obj){
    console.log('Hello '+ obj.first+' '+ obj.last);
}

greetRatanak(ratanak);

console.log('========================================================')

var love={
    gender:'Male',
    name:'Pek Ratanak',
    room:'Phnom Penh'
};

console.log(love);

console.log('========================================================')

var cat={};
cat.isCat=true;
cat.name='Baby';

var dog={};

function printCat(obj){
    if(obj.isCat==true){
        console.log('You are a cat and your name is : '+ obj.name)
    }else{
        console.log('You are not a cat!');
    }
}
printCat(cat);
printCat(dog);