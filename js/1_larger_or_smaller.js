var firstNumber = parseInt(window.prompt("Enter the first number:"));
var secondNumber = parseInt(window.prompt("Enter the second number:"));

if(isNaN(firstNumber) || isNaN(secondNumber)) {
  document.write("Invalid inputs");
}
else if(firstNumber == secondNumber) {
  document.write("Both the numbers are equal");
}
else {
  var largerNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
  document.write("Larger number is : " + largerNumber);
}