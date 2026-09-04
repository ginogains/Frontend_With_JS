// // Task 1 — For Loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// //  Task 2 — Reverse Number
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// // Task 3 — Even Numbers
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// // Task 4 — Odd Numbers
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }


// // Task 5 — Multiplication Table
// let number = prompt("Enter a number to display its multiplication table:");

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }


// // Task 6 — Countdown
// let a = 10;
// while (a >= 1) {
//     console.log(a);
//     a--;
// }


// // Task 7 — Sum of Numbers
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);


// // Task 8 — Print Numbers
// let g = 1;
// do {

//     console.log(g);
//     g++;
// } while (g <= 5)


// // Task 9 — Do While Understanding
// let b = 10;

// do {
//     console.log(b);
//     b++;                //output: 10
// } while (b <= 5);       //do...while executes the code block at least one time before checking the condition.


// // Task 10 — String Characters
// let name = "javascript";

// for (let character of name) {
//     console.log(character);
// }


// // Task 11 — Array Values
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }


// // Task 12 — Student Names
// let students = ["John", "Jane", "Jack", "Jill", "James"];

// for (let student of students) {
//     console.log(`Student Name: ${student}`);
// }


// // Task 13 — Employee Object
// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };

// for (let key in employee) {
//     console.log(key, employee[key]);
// }


// // Task 14 — Product Object
// let product = {
//     productName: "Laptop",
//     price: 50000,
//     brand: "Dell",
//     category: "Electronics",
//     stock: 10
// };

// for (let key in product) {
//     console.log(key, product[key]);
// }


// // Task 15 — Simple Function
// function welcome() {
//     console.log("Welcome to JavaScript!");
// }

// welcome();


// // Task 16 — Function With Parameter
// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Naveen");
// greet("Arun");
// greet("Priya");


// // Task 17 — Multiple Parameters
// function student(name, age, department) {
//     console.log("My name is " + name + ", I am " + age + "years old and I am from " + department + " department.");
// }

// student("Naveen", 22, "Computer Science");
// student("Arun", 25, "Mechanical");
// student("Priya", 21, "Electrical");


// // Task 18 — Addition Function
// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);
// console.log(result);


// // Task 19 — Salary
// function salary(amount) {
//     return amount;
// }
// let employeeSalary = salary(50000);

// console.log(employeeSalary);


// // Task 20 — Bonus Calculator
// function bonus(salary, bonusAmount) {
//     return salary + bonusAmount;
// }
// let totalSalary = bonus(50000, 5000);
// console.log(totalSalary);


// // Task 21
// function emp(name, role = "Developer") {
//     console.log(name, role);
// }

// emp("Arun");
// emp("Priya", "Designer");


// // Task 22 — Named Function
// function square(number) {
//     return number * number;
// }

// console.log(square(2));
// console.log(square(3));
// console.log(square(4));
// console.log(square(5));
// console.log(square(6));


// // Task 23 — Anonymous Function
// let calculate = function (a, b) {
//     return a + b;
// };

// let result2 = calculate(10, 20);

// console.log(result2);


// // Task 24 — Arrow Function
// let multiply = (a, b) => {
//     return a * b;
// }

// let result3 = multiply(5, 10);
// console.log(result3);


// // Task 25 — Predict the Output
// function test() {

//     if (true) {

//         var h = 10;
//         let i = 20;
//         const j = 30;

//         console.log(h); //output: 10
//         console.log(i); //output: 20
//         console.log(j); //output: 30
//     }

//     console.log(h); //output: 10
//     // console.log(i); //output: error: i is not defined
//     // console.log(j); //output: error: j is not defined
// }

// test();


// // Task 26 — Predict
// // console.log(k);      //output: error: k is not defined

// // var k = 10;


// // Task 27
// // console.log(l);      //output: error: l is not defined

// // let l = 20;


// // Task 28
// // console.log(m);     //output: error: m is not defined

// // const m = 30;         


// // Task 29 — Self Invoking Function
// (function() {
//     console.log("Welcome to JavaScript");
// })();

// (function(product, discount) {
//     console.log(
//         product + " has a " + discount + "% discount"
//     );
// })("Laptop", 20);


// // Task 30
// function welcomeA() {
//     console.log("Welcome");
// }

// function execute(callback) {
//     callback();
// }

// execute(welcomeA);


// // Task 31 — Cashback
// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }

// let cashbackOffers = cashback();

// for (let offer of cashbackOffers) {
//     console.log(offer);
// }


// Task 32 — Employee Management Console
let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Naveen",
        age: 27,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
];


console.log("----- Employee List -----");

for (let employee of employees) {
    console.log(employee);
}


console.log("----- Employee Details -----");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key + ":", employee[key]);
    }

    console.log("-------------------");
}


function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}


console.log("----- Display Function -----");

for (let employee of employees) {
    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}


function getSalary(salary) {
    return salary;
}

console.log("----- Salary -----");

for (let employee of employees) {
    let salary = getSalary(employee.salary);

    console.log(
        employee.name + "'s Salary: " + salary
    );
}


console.log("----- Salary Condition -----");

for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(
            employee.name + " has salary greater than or equal to 40000"
        );
    } else {
        console.log(
            employee.name + " has salary less than 40000"
        );
    }
}


let calculateAnnualSalary = (salary) => {
    return salary * 12;
};

console.log("----- Annual Salary -----");

for (let employee of employees) {
    console.log(
        employee.name +
        "'s Annual Salary: " +
        calculateAnnualSalary(employee.salary)
    );
}


function* employeeBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

console.log("----- Employee Benefits -----");

let benefits = employeeBenefits();

for (let benefit of benefits) {
    console.log(benefit);
}