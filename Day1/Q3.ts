/*  Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s 
name in lowercase, uppercase, and titlecase.  */

let personName = "Sandleen";

let lowercaseName = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);
let uppercaseName = personName.toUpperCase();
console.log("uppercase:", uppercaseName);
let titlecaseName = personName.replace(/\b\w/g, (char: string) => char.toUpperCase());
console.log("Titlecase:", titlecaseName);