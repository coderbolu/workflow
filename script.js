let myName ="Boluwatife"
const myJob ="Frontend Developer"
console.log(myName)

myName = "Boluwatife"

const myTitle = "learning javascript"


null // string is used to leave comment on js

//console.log (typeof myname)

    ///basic operators
    //+-/*

    const now =2039

    const ageJack = now - 1991
    const ageSarah = now - 2018
    console.log(ageJack, ageSarah)


    ///Assignment operators: are short forms to which we can add numbers


let x = 10 + 5 //15
x += 10 // x = x + 10 = 25

x *= 4// x = x * 4 = 100

x++// means x plus one or "x--" means x minus one


// Comparison operators: are used to compare two values and return a boolean value (true or false) 
//i.e the greater than or less than sign > < >= <=
console.log (ageJack > ageSarah) // true
console.log (ageJack >= ageSarah) // true
console.log (ageJack < ageSarah) // false


const weightMark = 78;
const heightMark = 1.69; // in meters
const weightJohn = 92;
const heightJohn = 1.95; // in meters
const BMIMark = weightMark / heightMark ** 2
const BMIJohn = weightJohn / heightJohn ** 2

const MarkBMIGreater = BMIMark > BMIJohn

console.log(BMIMark, BMIJohn, MarkBMIGreater)

//String and template literals is write properly in js

const name = "Boluwatife";
const job = "Frontend Developer";
const birthYear = 2000;
const year = 2025;

//const bolu = "I'm " + name + ', a ' + (year - birthYear)  + ' years old ' + job 
//console.log(bolu)

//to rewrite this...

const Bolu = `I'm ${name}, a ${year - birthYear} years old ${job}`

console.log(Bolu)

///Decision making in js
//if / else statement

const age = 15;

if (age >= 18) {
console.log ("Sarah can start taking alcohol")
} else {
    const yearsLeft = 18 - age;
    console.log (`Sarah is too young to drink, she has to wait ${yearsLeft} years`)
}

// Functions in js are reusable blocks of code that can be made use of over and over again.
// They are used to perform a specific task and can take in parameters and return values.
//All application are built on functions.
// Functions are declared using the function keyword followed by the name of the function, parentheses and curly braces.
// Two types of functions are used in js: function declaration and function expression, there is also arrow function.
// Function declaration is when you declare a function using the function keyword and give it a name, without attaching a variable to it.
// Function expression is when you declare a function using the function keyword and assign it to a variable.


//Function expression
function myFunction (a, b) {
    return a + b; 
}

console.log(myFunction(5, 10)) 
console.log(myFunction(15, 67)) 
console.log(myFunction(25, 70)) 
console.log(myFunction(35, 30)) 


//Function declaration
function greet(name) {
    return `Hello, my name  is ${name}`
}


const greeting = function(name) {
return `Good evening, ${name}`

}

console.log(greet("Boluwatife"))
console.log(greeting("Ifeade"))