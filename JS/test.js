//Declare a number, string, and boolean variable. Print them.
let num = 12;
let name1 = "shiva";
let isActive = true;
 console.log(num, name1, isActive);
 
 //Assign a variable without a value → what datatype does it hold?

 let test ;
 console.log(test); //undefined value is stored

 //Create an object with name, age, and city.

let person = {
    fname : "shiva",
    age: 35,
    city: "Hyd"
}
 console.log(person);

 //Create an array of 5 fruits.

 let fruits = ["Orange", "Apple", "Mango", "Banana", "custardApple"]
 console.log(fruits[1]);
 console.log(fruits);
 console.log(fruits[5]);
 
 //What is the datatype of null? (Trick question)

 let test1 = null;

 console.log(test1);
 console.log(typeof test1);

 //Show the difference between undefined and null using two variables.

let test2 ;
let test3 = null;

console.log(test2); //undeefined
console.log(test3); //null value

//Create a BigInt number and print it.

let bigValue = 9905050552n;
console.log(bigValue);

//Create a function that prints "Hello JS".

function person1(){
    console.log("Hello JS");
    
}
person1();

//Copy a primitive variable and update the new one → observe output.

 let v1 = 10;
 let v2 = v1;

 v2 = 20;
 v1 = 5;
 console.log(v2); //print the value updated value

 console.log(v1); //print updated value

 //Copy an object to another variable and change one value → observe output.

 let person2 = {
    name: "Shivakumar",
    age: 25,
    city: "Hyd"
};

let person3 = person2;   // Reference copy (NOT a new object)

person3.name = "Gunda";   // Changing person3 also affects person2

console.log("person2:", person2);
console.log("person3:", person3);

 
 

