var prompter = prompt("Hello, what is your name?");

var number1=Number(prompt("What is your total bill?"));
var number2=(number1*0.07);
var number3=(number1+number2);
var number4=(number3*0.05);
var number5=(number3+number4);
var answer=number5

document.body.querySelector("#lessCool").innerHTML=prompter;
document.body.querySelector("#cool").innerHTML=answer;