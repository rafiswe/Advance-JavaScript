function summation(a,b) {
    console.log(a+b);
    
}
summation(40,10);

//Way in ES6
//Two arguments
const sum = (firstNumber, secondNumber) => {
    console.log(firstNumber + secondNumber);
}
sum(10, 20);

//one argument
const details = name => name //it's also a function with a single parameter
console.log(details("Rafi"));

//without argument
const simple = () => {
    console.log("This is a function without any arguments.");
}
simple();
