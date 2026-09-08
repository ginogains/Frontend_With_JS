// Q1: What is the difference between var, let, and const?
// var can be re-declared and re-assigned. It is function-scoped.
// let cannot be re-declared in the same scope, but can be re-assigned. It is block-scoped.
// const cannot be re-declared or re-assigned. It is block-scoped.


// Q2: Can you re-declare a variable with var? What about let and const?
// var → Yes, can be re-declared.
// let → No, cannot be re-declared in the same scope.
// const → No, cannot be re-declared in the same scope.


// Q3: What is the output?
// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z);

// TypeError: Assignment to constant variable.
// Because a const variable cannot be re-assigned. Therefore, console.log() will not execute.


// Q4: What is the difference between declaring and initializing a variable?
// Declaration means creating a variable.
// Initialization means assigning a value to a variable.
// Both can be done together:let age = 20;


// Q5: What will be the output?
// let a;
// console.log(a); // output: undefined


// Q6: What is hoisting? Give an example.
// Hoisting is JavaScript's behavior of processing declarations before executing the code.
// console.log(x);

// var x = 10; // output: undefined
// The declaration of x is hoisted, but its value assignment happens later.


// Q7: What is the difference between null and undefined?
// undefined means a variable has been declared but no value has been assigned.
// null means an intentional empty value.


// Q8: What will be the output?
console.log(typeof null);  // output: object
console.log(typeof undefined);  // output: undefined
console.log(typeof []);  // output: object
console.log(typeof {});  // output: object


// Q9: What is the difference between == and ===?
// == checks only values after type conversion if necessary.
// === checks both value and data type.


// Q10: What is the difference between ++i and i++?
// ++i is pre-increment. It increments the value first and then uses it.
// i++ is post-increment. It uses the value first and then increments it.


// Q11: What will be the output?
let x = 10;
let y = "5";

console.log(x + y);  // output: 105
console.log(x - y);  // output: 5
console.log(x * y);  // output: 50
console.log(x / y);  // output: 2


// Q12: What are logical operators? Explain with examples.

// Logical operators are used to combine or reverse conditions.

// AND (&&)

// Returns true when both conditions are true.
// console.log(5 > 3 && 10 > 5); // true

// OR (||)

// Returns true when at least one condition is true.
// console.log(5 > 10 || 10 > 5); // true

// NOT (!)

// Reverses the boolean value.

// console.log(!(5 > 3)); // false


// Q13: What will be the output?
console.log(5 > 3 && 10 > 5);  // output: true
console.log(5 > 10 || 10 > 5); // output: true
console.log(!(5 > 3));      // output: false


// Q14: What is the ternary operator? Give an example.

// The ternary operator is a shorthand for if...else.
// Syntax: condition ? valueIfTrue : valueIfFalse

// Example:
let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);  // output: Yes

// Explicit type casting is manually done by the programmer.
console.log(Number("123")); // 123


// Q16: What will be the output?
console.log(Number("123"));  // output: 123
console.log(Number("hello"));  // output: NaN
console.log(Number(true));  // output: 1
console.log(Number(false));  // output: 0
console.log(Boolean(0));  // output: false
console.log(Boolean("hello"));  // output: true


// Q17: What is NaN? Give an example.

// NaN stands for Not a Number. It represents an invalid numeric result.

console.log(Number("hello"));  // output: NaN

// Q18: What is the difference between if-else and switch?
// if-else is used to check conditions, ranges, and complex expressions.
// switch is used to compare one value against multiple specific cases.


// Q19: What will be the output?
let aAge = 20;

if(aAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}  // output: Adult


// Q20: What is nested if? Give an example.

// A nested if is an if statement inside another if statement.

let bAge = 20;
let hasLicense = true;

if (bAge >= 18) {
    if (hasLicense) {
        console.log("Can drive");
    } else {
        console.log("License required");
    }
} else {
    console.log("Not eligible");
}


// Q21: Write a program to check if a number is even or odd using ternary operator.
let number = 10;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);


// Q22: What is the difference between while and do-while?
// while checks the condition before executing the loop.
// do-while executes the code first and checks the condition afterward.

// A while loop may execute zero times, but a do-while loop executes at least once.


// Q23: What will be the output?
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:

// 1
// 2
// 3
// 4
// 5


// Q24: What is the difference between for-of and for-in?
// for...of is used to iterate over values of iterable objects such as arrays and strings.
// for...in is used to iterate over keys or indexes of an object or array.



// Q25: Write a program to find the sum of numbers from 1 to 100.
let sum = 0;

for(let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);


// Q26: What is the difference between slice and splice?
// slice()
// Does not modify the original array.
// Returns a portion of an array.
// splice()
// Modifies the original array.
// Can add, remove, or replace elements.


// Q27: What will be the output?
let arr = [1, 2, 3];
arr.push(4);  // [1, 2, 3, 4]
arr.pop();     // [1, 2, 3]
arr.unshift(0); // [0, 1, 2, 3]
arr.shift();    // [1, 2, 3]
console.log(arr);  // output: [1, 2, 3]


// Q28: What is the difference between function declaration and function expression?
// Function Declaration

// A named function defined using the function keyword.

// Function Expression

// A function stored in a variable.

// Function declarations are hoisted differently and can generally be called before their declaration, whereas function expressions should be called after initialization.


// Q29: What is an arrow function? Give an example.

// An arrow function is a shorter syntax for writing a function.

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 10));


// Q30: What will be the output?
function greet() {
    return "Hello";
}

let message = greet();

console.log(message);  // output: Hello 