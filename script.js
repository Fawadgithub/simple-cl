
var num2 = Number(prompt("Enter a first number"));
var num3 = Number(prompt("Enter a second number"));
var operator = prompt("Enter operator")

if( operator === '+'){
    alert ( num2  + num3);
}
else if( operator === '-'){
    alert ( num2 -  num3);
}
else if( operator === '*'){
    alert( num2  *  num3);
}
else if( operator === '/'){
    alert( num2  / num3);
}
else{
    alert("Please enter one of the following: +, -, *, /.");
}