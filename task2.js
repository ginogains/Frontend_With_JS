
//Task 1 — var, let, const
var studentName = "Gino";
let studentAge = 22;
const collegeName = "ABC";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);


// reassigning the values to the variables
studentName = "John";
console.log(studentName);
studentAge = 23;
console.log(studentAge);
// collegeName = "XYZ";  // it will throw some error because we cannot reassign a value to a constant variable
// console.log(collegeName);


// redeclaring the variables
var studentName = "Alice";
console.log(studentName);
// let studentAge = 24; // it will throw some error because we cannot redeclare a variable declared with let
// console.log(studentAge);


//Task 2 — User Information
let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
let city = prompt("Enter your city: ");

console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);


//  Task 3 — Welcome Message
alert("Welcome "+name+"!");


// Task 4 — Age Calculator
const currentYear = 2026;
let birthYear = prompt("Enter your birth year: ");
let userAge = currentYear - birthYear;
console.log("Age: " + userAge);


// Task 5 — Identify Data Types
let text = "Hello";
let integer = 100;
let decimal = 25.5;
let valueTrue = true;
let valueFalse = false;
let notDefined = undefined;
let emptyValue = null;

console.log(typeof text);
console.log(typeof integer);
console.log(typeof decimal);
console.log(typeof valueTrue);
console.log(typeof valueFalse);
console.log(typeof notDefined);
console.log(typeof emptyValue);


// Task 6 — Student Data
let person = {
    nameIs: "Gino",
    ageIs: 22,
    cityIs: "Chennai",
    qualificationIs: "B.E Computer Science Engineering",
    isStudent: false
};


console.log(person);
console.log(person.nameIs);
console.log(person.ageIs);
console.log(person.qualificationIs);
console.log(person.isStudent);


// Task 7 — Fruit Array
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// Task 8 — Basic Calculator
let a = 20;
let b = 5;

console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));


// Task 9 — Shopping Bill
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;

let totalCost = Shirt + Pant + Shoes;
console.log("Total Cost: " + totalCost);


// Task 10 — Simple Marks Calculation
let Tamil = 80;
let English = 75;
let Maths = 90;

let totalMarks = Tamil + English + Maths;
let averageMarks = totalMarks / 3;
console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);


// Task 11 — Post Increment
let c = 10;
let d = c++;

console.log(c); // Output: 11
console.log(d); // Output: 10


// Task 12 — Pre Increment
let e = 10;
let f = ++e;

console.log(e); // Output: 11
console.log(f); // Output: 11



// Task 13 — Post Decrement
let g = 20;
let h = g--;

console.log(g); // Output: 19
console.log(h); // Output: 20


// Task 14 — Pre Decrement
let i = 20;
let j = --i;

console.log(i); // Output: 19
console.log(j); // Output: 19


// Task 15 — Find the Final Values

let k = 5;

let l = k++;

let m = ++k;

let n = l--;

console.log(k); // Output: 7
console.log(l); // Output: 4
console.log(m); // Output: 7
console.log(n); // Output: 5


// Task 16 — Assignment Operators
let num = 10;

num += 5;
console.log(num);
num -= 5;
console.log(num);
num *= 5;
console.log(num);
num /= 5;
console.log(num);
num %= 5;
console.log(num);
num **= 5;
console.log(num);   


// Task 17 — Mini Student Profile
let isName = "Gino";
let isAge = 22;
let isCity = "Chennai";
let college = "Your College Name";

let subjects = [
    "Java",
    "JavaScript",
    "DBMS",
    "Web Technology",
    "Data Structures"
];

let student = {
    name: isName,
    age: isAge,
    city: isCity,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("City:", student.city);
console.log("First Subject:", student.subjects[0]);
console.log("Last Subject:", student.subjects[student.subjects.length - 1]);
console.log("Total Subjects:", student.subjects.length);
console.log("Complete Object:", student);


// Final Challenge — User + Calculator
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

let add = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;
let modulus = num1 % num2;
let exponent = num1 ** num2;

console.log("Addition: " + add);    
console.log("Subtraction: " + subtract);
console.log("Multiplication: " + multiply);
console.log("Division: " + divide);
console.log("Modulus: " + modulus);
console.log("Exponent: " + exponent);