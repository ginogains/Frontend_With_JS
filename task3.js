
// Task 1 — Variables
// var
var name = "Gino";
console.log(name);

name = "Naveen"; // Changing var value
console.log(name);

// Redeclaring var is allowed
var name = "Arun";
console.log(name);


// let
let age = 22;
console.log(age);

age = 23; // Changing let value
console.log(age);

// Redeclaring let in same scope is NOT allowed
// let age = 25; // Error


// const
const city = "Chennai";
console.log(city);

// Changing const is NOT allowed
// city = "Trichy"; // Error

// Redeclaring const is NOT allowed
// const city = "Madurai"; // Error


const college = "ABC Engineering College";
console.log(college);


// Task 2 — Printing Statements
console.log("Hello from console");

alert("Hello from alert");

let result = confirm("Do you like JavaScript?");
console.log(result);

let uName = prompt("Enter your name:");
console.log(uName);

document.writeln("Hello from document.writeln()");


// Task 3 — User Details
let aName = prompt("Enter your name:");
let uAge = prompt("Enter your age:");
let uCity = prompt("Enter your city:");
let uQualification = prompt("Enter your qualification:");

console.log("Name:", aName);
console.log("Age:", uAge);
console.log("City:", uCity);
console.log("Qualification:", uQualification);


// Task 4 — Find Data Types
let a = "JavaScript";
let b = 100;
let c = 99.5;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);


// Task 5 — Student Array
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:", students[0]);
console.log("Second student:", students[1]);
console.log("Last student:", students[students.length - 1]);
console.log("Total students:", students.length);


// Task 6 — Employee Object
let employee = {
    name: "Gino",
    age: 22,
    role: "Java Developer",
    skills: ["Java", "JavaScript", "React"],
    isWorking: true,
    qualification: ["B.E", "Computer Science"]
};

console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First Skill:", employee.skills[0]);
console.log(
    "Last Qualification:",
    employee.qualification[employee.qualification.length - 1]
);
console.log("Working Status:", employee.isWorking);


// Task 7 — Calculator
let h = 20;
let i = 5;

console.log("Addition:", h + i);
console.log("Subtraction:", h - i);
console.log("Multiplication:", h * i);
console.log("Division:", h / i);
console.log("Modulus:", h % i);
console.log("Exponentiation:", h ** i);


// Task 8 — Shopping Bill
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let total = shirt + pant + shoes + bag;

console.log("Total Price:", total);


// Task 9 — Increment & Decrement
// A — Post Increment
let j = 10;

let k = j++;

console.log(j); //output: 11
console.log(k); //output: 10


// B — Pre Increment
let l = 10;
let m = ++l;

console.log(l); //output: 11
console.log(m); //output: 11


// C — Post Decrement
let n = 10;
let o = n--;

console.log(n); //output: 9
console.log(o); //output: 10


// D — Pre Decrement
let p = 10;
let q = --p;

console.log(p); //output: 9
console.log(q); //output: 9


// Task 10
let num = 10;

num += 5;
console.log(num);

num -= 3;
console.log(num);

num *= 2;
console.log(num);

num /= 4;
console.log(num);

num %= 3;
console.log(num);

num **= 2;
console.log(num);


// Task 11 — Find Output
// console.log(10 > 5);      true
// console.log(10 < 5);      false
// console.log(10 >= 10);    true
// console.log(10 <= 9);     false

// console.log(5 == "5");    true
// console.log(5 === "5");   false

// console.log(10 != "10");  false
// console.log(10 !== "10"); true


// Task 12 — AND
console.log(true && true);   // Output: true
console.log(true && false);  // Output: false
console.log(false && true);  // Output: false
console.log(false && false); // Output: false


// Task 13 — OR
console.log(true || true);   // Output: true
console.log(true || false);  // Output: true
console.log(false || true);  // Output: true
console.log(false || false); // Output: false


// Task 14 — NOT
console.log(!true);    // Output: false
console.log(!false);   // Output: true
console.log(!(5 > 10)); // Output: true
console.log(!(10 > 5)); // Output: false


// Task 15 — Combination
// console.log(5 == "5" && !(5 === 5) || 6 > 7);  Output: false

// console.log(10 > 5 && 8 < 12 || 4 === "4");  Output: true

// console.log(7 === 7 && 10 != "10" || 5 >= 5);  Output: true

// console.log(15 < 10 || 20 > 15 && 5 == "5");  Output: true


// Task 16 — Voting
let aAge = 20;

let aResult = aAge >= 18 ? "Eligible to vote" : "Not eligible";

console.log(aResult);


// Task 17 — Password
let password = true;

let bResult = password ? "Login successful" : "Wrong password";

console.log(bResult);


// Task 18 — User Introduction
// Method 1
let bName = "Naveen";
let bAge = 25;
let bCity = "Trichy";

console.log(
    "My name is " + bName +
    ". I am " + bAge +
    " years old. I live in " + bCity + "."
);

// Method 2
console.log(`My name is ${bName}. I am ${bAge} years old. I live in ${bCity}.`);


// Task 19 — String Conversion
let r = String(100);
let s = String(true);
let t = String(undefined);
let u = String(null);
let v = String([1, 2]);

console.log(r, typeof r);
console.log(s, typeof s);
console.log(t, typeof t);
console.log(u, typeof u);
console.log(v, typeof v);


// Task 20 — Number Conversion
console.log(Number());              // Output: 0
console.log(Number(""));            // Output: 0
console.log(Number("123"));         // Output: 123
console.log(Number("a1"));          // Output: NaN
console.log(Number(true));           // Output: 1
console.log(Number(false));          // Output: 0
console.log(Number(undefined));      // Output: NaN
console.log(Number(null));           // Output: 0


// Task 21 — Boolean Conversion
console.log(Boolean());             // Output: false
console.log(Boolean(""));          // Output: false
console.log(Boolean("hello"));     // Output: true
console.log(Boolean(123));         // Output: true
console.log(Boolean(true));         // Output: true
console.log(Boolean(false));        // Output: false
console.log(Boolean(undefined));    // Output: false
console.log(Boolean(null));         // Output: false
console.log(Boolean([]));           // Output: true
console.log(Boolean({}));           // Output: true


// Task 22 — Voting Eligibility
let cAge = Number(prompt("Enter your age:"));

if (cAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


// Task 23 — Positive or Negative
let bNum = Number(prompt("Enter a number:"));

if (bNum > 0) {
    console.log("Positive");
} else if (bNum < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// Task 24 — Grade System
let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else if (marks >= 60) {
    console.log("D Grade");
} else {
    console.log("Fail");
}


// Task 25 — Job Eligibility
let gAge = Number(prompt("Enter your age:"));
let gHeight = Number(prompt("Enter your height in cm:"));
let gWeight = Number(prompt("Enter your weight in kg:"));

if (gAge >= 18) {

    if (gHeight >= 160) {

        if (gWeight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("Not eligible: Weight should be at least 60 kg");
        }

    } else {
        console.log("Not eligible: Height should be at least 160 cm");
    }

} else {
    console.log("Not eligible: Age should be at least 18");
}



// Task 26 — Traffic Light
let color = prompt("Enter traffic light color:");

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


// Task 27 — Day
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// Task 28 — Student Result System
let zName = prompt("Enter your name:");
let zAge = Number(prompt("Enter your age:"));
let zCity = prompt("Enter your city:");


let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));


let zTotal = tamil + english + maths;

let average = zTotal / 3;

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

let voting;

if (zAge >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

console.log(`
Name: ${zName}
Age: ${zAge}
City: ${zCity}
Total: ${zTotal}
Average: ${average}
Grade: ${grade}
Voting: ${voting}
`);