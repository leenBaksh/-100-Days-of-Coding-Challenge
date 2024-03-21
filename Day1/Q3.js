/*  Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s
name in lowercase, uppercase, and titlecase.  */
var personName = "Sandleen";
var lowercaseName = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);
var uppercaseName = personName.toUpperCase();
console.log("uppercase:", uppercaseName);
var titlecaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase:", titlecaseName);
