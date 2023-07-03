
let num1 = Number(window.prompt("Enter the first integer:"));
let num2 = Number(window.prompt("Enter the second integer:"));


if (num1 === num2) {

  document.write("The two numbers are equal.");
} else if (num1 > num2) {

  document.write("The larger number is: " + num1);
} else {

  document.write("The larger number is: " + num2);
}
