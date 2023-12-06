/* Problem One = Write a program that takes two numbers as input and performs addition, subtraction, multiplication,
and division. Display the results.
Do not copy on the same code. */

// Function to perform addition
function add(x, y) {
  return x + y;
}

// Function to perform subtraction
function subtract(x, y) {
  return x - y;
}

// Function to perform multiplication
function multiply(x, y) {
  return x * y;
}

// Function to perform division
function divide(x, y) {
  if (y === 0) {
    return "Cannot divide by zero";
  } else {
    return x / y;
  }
}

// Taking input from user
let num1 = 10;
let num2 = 5;

// Performing addition
// console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);

// Performing subtraction
// console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);

// Performing multiplication
// console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);

// Performing division
// console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);

/* Problem Two = Create a program that demonstrates the use of different variable types (numeric, string,
boolean). Calculate the remainder when dividing two numbers. */

/*
function Remainder(x, y) {
    return x % y;
}

let Result = parseFloat(Remainder(50, "3"));

console.log("Result= " + Result); */

/* Problem Three = Create a function that takes an object as a parameter (representing a person with properties like Name, age, etc.) and prints out the person's details. */

/*
function printPersonDetails(person) {
    return `Name = ${person.Name}, Age = ${person.age}, Gender = ${person.gender}, Religion = ${person.religion}`;
  }
  
  const person = {
    Name: "John Doe",
    age: 30,
    gender: "Male",
    religion: "Islam",
  };
  
  console.log(printPersonDetails(person));
*/

/*
function printPersonDetails(person) {
  return `Name = ${person.Name}, Age = ${person.age}, Gender = ${person.gender}, Religion = ${person.religion}`;
}

const person = {
  Name: "John Doe",
  age: 30,
  gender: "Male",
  religion: "Islam",
};

console.log(printPersonDetails(person)); */

/* Problem Four Solve: Repeat previous exercise, but this time allow for the possibility that the user enters something that is not a number. Hint: the built in function isNaN(x) returns true if x is not a number. It returns false if x is a number. Sort of backwards, but that's what's available */

/*
let userInput = 121;
if (userInput == "string") {
  console.log("This is a String");
}

else {
    console.log("This is Number");
}
*/

/* Problem Five Solve: Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy  */

/*
function getCurrentDate() {
  let date = new Date();

  let mm = date.getMonth();
  let dd = date.getDate();
  let yyyy = date.getFullYear();

  mm = mm < 10 ? "0" + mm : mm;
  dd = dd < 10 ? "0" + dd : dd;

  return `Present Date: ${mm}-${dd}-${yyyy}`;
}

console.log(getCurrentDate());

*/

/* Problem Six Solve: Create an object representing a student with properties like Name, age, and grade. Write a function that takes the student object as a parameter and returns a sentence with their information (e.g., "John
is 20 years old and is in Grade 10"). At Least 3 student object using a single one function. */


function studentDetails(student1, student2, student3) {
    return `Name: ${student1.Name}, Age: ${student1.age}, Grade: ${student1.grade}`;
}

const student1 = {
    Name: "Rana",
    age: 20,
    grade: "C"
};
const student2 = {
    Name: "Rahim",
    age: 22,
    grade: "B"
};
const student3 = {
    Name: "Rehana",
    age: 18,
    grade: "A"
};

console.log(studentDetails(student1)); 