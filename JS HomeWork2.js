// first task

let number = 129;
let count = 0;
let numberN=0;

while (number>0) {
numberN = number%10;
number = ((number - (numberN%10))/10);
if (numberN === 9) {
count++;
}
}
// The second way  using "length"

let number = 12999999;
number = String(number);
let count=0;
for (let i = 0; i <=number.length; i++) {
    if (number[i]=== "9") {
count++
}
}
console.log (Number(count));

// second task 

let number1 = 7;
let number2 = 100;
let x = 2;
let y = 1;
let result = 0;
while ((x**y) < number1) {
    y++;
}
result+= (x**y);
while (result < number2) {
    console.log (result);
result*= 2;
}
// third task 
let number = 26112802
number = String(number)
let result=""
for (let i = 0; i < number.length - 1; ++i) 
{
result += number[i];
    if (number[i]%2 === 0 && number[i + 1 ] % 2 === 0) {
        result += "-";
    }
}
result += number[number.length - 1];


// Fourth task 

let number = 1253;
let numberN=0;

while (number>0) {
    numberN = number%10;
    number = ((number - (numberN%10))/10);
    console.log (numberN);
}
// fifth task
