// TASK 1 — STUDENT RESULT ANALYZER

function analyzeStudent(name, department, marks) {

    let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];

    let average = total / 5;

    let result;

    if (marks[0] >= 40 && marks[1] >= 40 && marks[2] >= 40 && marks[3] >= 40 && marks[4] >= 40) {
        result = "Pass";
    } 
    else {
        result = "Fail";
    }

    let grade;

    if (average >= 90) {
        grade = "A";
    } 
    else if (average >= 75) {
        grade = "B";
    } 
    else if (average >= 60) {
        grade = "C";
    } 
    else if (average >= 50) {
        grade = "D";
    } 
    else {
        grade = "Fail";
    }

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}

analyzeStudent("Gino","CSE",[85, 90, 78, 88, 92]);


// TASK 2 — EMPLOYEE SALARY CALCULATOR

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } 
    else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);

    return finalSalary;
}

calculateSalary(employee);


// TASK 3 — PRODUCT FILTER SYSTEM

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];


let productsAbove2000 = products.filter(product => product.price > 2000);

console.log("Products above ₹2,000:");
console.log(productsAbove2000);


let electronics = products.filter(product => product.category === "electronics");

console.log("Electronics:");
console.log(electronics);



let productBelow1000 = products.find(product => product.price < 1000);

console.log("First product below ₹1,000:");
console.log(productBelow1000);


let totalProductPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Total price:", totalProductPrice);



let hasExpensiveProduct = products.some(product => product.price > 50000);

console.log("Any product above ₹50,000:", hasExpensiveProduct);


let allAbove500 = products.every(product => product.price > 500);

console.log("Every product above ₹500:", allAbove500);


// TASK 4 — EMPLOYEE MANAGEMENT

let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 55000
    },
    {
        id: 103,
        name: "Priya",
        role: "Java Developer",
        salary: 65000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Tester",
        salary: 35000
    },
    {
        id: 105,
        name: "Meena",
        role: "UI Developer",
        salary: 48000
    },
    {
        id: 106,
        name: "Suresh",
        role: "Manager",
        salary: 75000
    }
];



let employeeNames = employees.map(employee => employee.name);

console.log("Employee Names:");
console.log(employeeNames);


let highSalaryEmployees = employees.filter(
    employee => employee.salary > 40000
);

console.log("Employees earning above ₹40,000:");
console.log(highSalaryEmployees);


let employee103 = employees.find(
    employee => employee.id === 103
);

console.log("Employee with ID 103:");
console.log(employee103);


let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total Salary:", totalSalary);


let highestPaidEmployee = employees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest
);

console.log("Highest Paid Employee:");
console.log(highestPaidEmployee);


let sortedEmployees = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Employees sorted by salary:");
console.log(sortedEmployees);


let namesOnly = employees.map(employee => employee.name);

console.log("Names Only:");
console.log(namesOnly);


// TASK 5 — SHOPPING CART

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let itemTotals = cart.map(item => {
        return item.price * item.quantity;
    });

    console.log("Item Totals:");
    console.log(itemTotals);


    let totalCartValue = cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    let finalAmount = totalCartValue - discount;

    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);

    return finalAmount;
}

calculateCart(cart);


// TASK 6 — STUDENT SEARCH SYSTEM

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];


let studentNames = students.map(student => student.name);

console.log("Student Names:");
console.log(studentNames);


let above80 = students.filter(student => student.mark > 80);

console.log("Students above 80:");
console.log(above80);


let priya = students.find(student => student.name === "Priya");

console.log("Student named Priya:");
console.log(priya);


let totalMarks = students.reduce(
    (total, student) => total + student.mark,
    0
);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);


let anyoneFailed = students.some(student => student.mark < 40);

console.log("Anyone failed:", anyoneFailed);


let everyoneAbove40 = students.every(student => student.mark > 40);

console.log("Everyone scored above 40:", everyoneAbove40);


let sortedStudents = [...students].sort(
    (a, b) => b.mark - a.mark
);

console.log("Students sorted by marks:");
console.log(sortedStudents);


// TASK 7 — ARRAY TRANSFORMATION CHALLENGE

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubledNumbers = numbers.map(number => number * 2);

console.log("Numbers × 2:");
console.log(doubledNumbers);


let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Even Numbers:");
console.log(evenNumbers);


let greaterThan15 = numbers.filter(number => number > 15);

console.log("Numbers greater than 15:");
console.log(greaterThan15);


let firstGreaterThan20 = numbers.find(number => number > 20);

console.log("First number greater than 20:");
console.log(firstGreaterThan20);


let totalNumbers = numbers.reduce(
    (total, number) => total + number,
    0
);

console.log("Total:", totalNumbers);


let anyGreaterThan40 = numbers.some(number => number > 40);

console.log("Any number greater than 40:", anyGreaterThan40);


let everyPositive = numbers.every(number => number > 0);

console.log("Every number is positive:", everyPositive);


let sortedNumbers = [...numbers].sort((a, b) => b - a);

console.log("Highest to Lowest:");
console.log(sortedNumbers);


// TASK 8 — STRING ANALYZER

let sentence = prompt("Enter a sentence:");


console.log("Total Characters:", sentence.length);


console.log("Uppercase:", sentence.toUpperCase());


console.log("Lowercase:", sentence.toLowerCase());


console.log(
    "Contains JavaScript:",
    sentence.includes("JavaScript")
);


console.log("First Character:", sentence.charAt(0));


console.log(
    "Last Character:",
    sentence.charAt(sentence.length - 1)
);


let words = sentence.trim().split(/\s+/);

console.log("Number of Words:", words.length);


let replacedSentence = sentence.replace("JavaScript", "Python");

console.log("Replaced Sentence:", replacedSentence);


let sentenceArray = sentence.split(" ");

console.log("Sentence Array:", sentenceArray);


// FINAL MINI PROJECT — EMPLOYEE DASHBOARD

let dashboardEmployees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


dashboardEmployees.forEach(employee => {
    console.log(
        employee.id,
        employee.name,
        employee.department,
        employee.salary,
        employee.experience
    );
});


let searchName = "Arun";

let searchedEmployee = dashboardEmployees.find(
    employee => employee.name.toLowerCase() === searchName.toLowerCase()
);

console.log(searchedEmployee);


let department = "IT";

let departmentEmployees = dashboardEmployees.filter(
    employee => employee.department === department
);

console.log(departmentEmployees);



let salaryEmployees = dashboardEmployees.filter(
    employee => employee.salary > 50000
);

console.log(salaryEmployees);


let companySalary = dashboardEmployees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total Company Salary:", companySalary);


let highestSalaryEmployee = dashboardEmployees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest
);

console.log(highestSalaryEmployee);


let experiencedEmployees = dashboardEmployees.filter(
    employee => employee.experience > 3
);

console.log(experiencedEmployees);


let salaryLowToHigh = [...dashboardEmployees].sort(
    (a, b) => a.salary - b.salary
);

console.log(salaryLowToHigh);


let salaryHighToLow = [...dashboardEmployees].sort(
    (a, b) => b.salary - a.salary
);

console.log(salaryHighToLow);


let totalEmployees = dashboardEmployees.length;

let totalCompanySalary = dashboardEmployees.reduce(
    (total, employee) => total + employee.salary,
    0
);

let highestSalary = Math.max(
    ...dashboardEmployees.map(employee => employee.salary)
);

let averageSalary = totalCompanySalary / totalEmployees;

console.log("Total Employees:", totalEmployees);

console.log("Total Salary: ₹" + totalCompanySalary);

console.log("Highest Salary: ₹" + highestSalary);

console.log("Average Salary: ₹" + Math.round(averageSalary));