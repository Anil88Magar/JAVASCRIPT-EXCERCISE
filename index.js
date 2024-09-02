// // 1. Write a JavaScript program to display the current day and time in the following format.  
// // Sample Output : Today is : Tuesday.
// // Current time is : 10 PM : 30 : 38

// const date = new Date();
// const day = `Today is : ${date.toLocaleDateString('en-Us',{weekday:'long'})}.`
// let hour = date.getHours();
// const minute = date.getMinutes();
// const seconds = date.getSeconds()
// //Determining Am or PM 
// const amPm = hour >= 12 ? 'PM' : 'AM';
// //Determining 12 or 24 hour format
//  hour = hour % 12 || 12 ;
// console.log(day);
// console.log(`Current time is : ${hour} ${amPm} : ${minute} : ${seconds}`);

// // 2. Write a JavaScript program to print the current window contents.  

// function printCurrentWindow(){
//     window.print();
// }

// printCurrentWindow()

// // 3. Write a JavaScript program to get the current date.  
// // Expected Output :
// // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


// let todayDate = date.getDate();
// let todayMonth = date.getMonth() +1;
// const todayYear = date.getFullYear();

// function currentDate(){
//   if(todayDate < 10){
//     todayDate = `0${todayDate}`
//   }
//   if(todayMonth < 10){
//     todayMonth = `0${todayMonth}`
//   }
// //dd-mm-yyyy
//  return `${todayDate}-${todayMonth}-${todayYear}`
  
// }

// console.log(currentDate());

// // 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

// const traingleArea =(a,b,c)=>{
//     //calculate semi perimeter
// const sp = (a+b+c)/2 ;

//  // Use Heron's formula to calculate the area
//     const area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
//     return area ;
// }

// const side1 = 5;
// const side2 = 6;
// const side3 = 7;

// const area = traingleArea(side1,side2,side3);
// console.log(`Area of a triangle is ${area}`);

// // 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  

// const rotateString = function(){

//   const text = document.getElementById('text');
//   element = text.textContent;

//   setInterval(()=>{
     
//     element = element.slice(-1) + element.slice(0, -1);
//     text.textContent = element ;
  
//   },3000)

// }

// rotateString(text);

// //6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

// function findLeapYear (year){
  
  

//   if(year%4=== 0 && year%400===0 || year%100===0){
//     console.log(`${year} is a leap year`);
    
//   }else {
//     console.log(`${year} is not a leap year`);
//   }

// }

// findLeapYear(2024);

// // 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

// function leapYear(year){
//    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    

// }

// console.log(leapYear(2025));

// // 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  



// for(let year= 2014; year <= 2050; year++){
//   const today = new Date(year,0,1);

//   if(today.getDay()===0){
//   console.log(`1st January of ${year} is Sunday`);
//   }
  
// }


// // 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 

// const randomNumber = Math.floor(Math.random()*10) +1 ;



// const userInput = parseInt(prompt(`Guess a number between 1 to 10`))

// if(userInput===randomNumber){
//   alert (`Good Work`)
// }else {
//   alert ('Number not matched')
// }

// // 9. Write a JavaScript program to calculate the days left before Christmas.  

// function daysUntilChristmas() {
//     // Get today's date
//     const today = new Date();

//     // Get the current year
//     const year = today.getFullYear();

//     // Create a Date object for Christmas of the current year
//     const christmas = new Date(year, 11, 25); // Month is 11 because December is the 12th month (0-based index)

//     // Calculate the difference in time (milliseconds) between Christmas and today
//     const timeDifference = christmas - today;

//     // Convert the time difference from milliseconds to days
//     const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

//     // If Christmas has passed for this year, calculate for next year's Christmas
//     if (daysLeft < 0) {
//         const nextChristmas = new Date(year + 1, 11, 25);
//         const nextTimeDifference = nextChristmas - today;
//         return Math.ceil(nextTimeDifference / (1000 * 60 * 60 * 24));
//     }

//     return daysLeft;
// }

// // Example usage
// console.log(`There are ${daysUntilChristmas()} days left until Christmas.`);


//Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  

// Define a function to multiply two numbers and display the result
function multiplyBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    var num1 = parseFloat(document.getElementById("firstNumber").value);
    var num2 = parseFloat(document.getElementById("secondNumber").value);

    // Set the inner HTML of the element with the id "result" to the product of the two numbers
    document.getElementById("result").innerHTML = num1 * num2;
}

// Define a function to divide two numbers and display the result
function divideBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    var num1 = parseFloat(document.getElementById("firstNumber").value);
    var num2 = parseFloat(document.getElementById("secondNumber").value);

    // Check if the second number is zero before dividing
    if (num2 === 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero";
    } else {
        // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
        document.getElementById("result").innerHTML = num1 / num2;
    }
}


11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C

function fahrenheitToCelsius(fahrenheit){
  return (fahrenheit-32) * 5/9
}

const fahrenheit = 45 ;
const celsiusResult = fahrenheitToCelsius(fahrenheit)

console.log(`${fahrenheit}°F is ${celsiusResult}°C.`);

function celsiusToFarhenhit(celsius){
  return (celsius*9/5) +32
}

const celsius = 60 

const fahrenheitResult = celsiusToFarhenhit(celsius);
console.log(`${celsius}°C is ${fahrenheitResult}°F.`);

// // // // //12.Write a JavaScript program to get the website URL (loading page).  

//Get the current URL of the page using ES6 syntax
//const currentUrl = window.location.href;

//Display the URL using a template literal
//console.log(`The current URL is: ${currentUrl}`);

// // // // // 13. Write a JavaScript exercise to create a variable using a user-defined name.  

const names = 'Anil';
const user = 'Lonely'

this[names] = user;
console.log(this[names]);

// // // // 14. Write a JavaScript exercise to get the filename extension.  

function fileName(extension){
 return extension.split('.').pop()
}

const onlyExtension1 = fileName('index.js');
const onlyExtension2 = fileName('index.html');
console.log(onlyExtension1);
console.log(onlyExtension2);

// // // 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.  

function difference(number){
  
  if(number <= 13){
    return number -13;
  }else {
   return (number - 13 )*2
  }
}

console.log(difference(15))

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function sum(a,b){
  if(a === b){
    return (a+b)*3
  }else {
    return (a+b)
  }
}

console.log(sum(3,3));
console.log(sum(5,3))

//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  

function compute(number){

  const difference = Math.abs(number-19)
  if(number > 19){
    return difference *3 
  }else {
    return difference
  }
}

console.log(compute(20));
console.log(compute(5));

//18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

function checkPair(a,b){
  if(a===50 || b===50 || (a+b)===50){
     return true
  }
}

console.log(checkPair(30,50));

//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

function within(num){
  if(num >=80 && num<=120){
    return `${num} is within 20 of 100.`
  }else if((num >=380 && num<=420)){
     return `${num} is within 20 of 400.`
    }else {
    return `${num} is not within 20 of 100 or 400.`;
  }
  }
console.log(within(180));

//20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function negPos(a,b){
  if(a <= 0 && b >= 0) {
       return `${a} is negative and ${b} is positive.`
  }else if(((a > 0 && b < 0))) {
    return `${b} is negative and ${a} is positive.`
  }
}

console.log(negPos(20,-30))

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

function addStr(str){
  if(str.startsWith('py')){
    return str;
  }else {
    return `py${str}`
  }
}

console.log(addStr('thon'))
console.log(addStr('charm'))
console.log(addStr('pyanil'))

//22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

function removeStr(str,index){
 return str.slice(0,index) + str.slice(index + 1)
}

console.log(removeStr('anil',2))

// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  

function newString(str){
  if(str.length <=1){
    return str;
  }
 
    const firstStr = str[0];
    const lastStr = str[str.length -1];
    const middleStr = str.slice(1, str.length -1);

    return `${lastStr}${middleStr}${firstStr}`;
  }

  console.log(newString('anil'));

//  24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

function createStr(str){
const firstStrr = str[0];
return `${firstStrr}${str}${firstStrr}`
}

console.log(createStr('lonely'));

//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  

const checkPosNeg = (num)=>{
  if((num % 3 ===0) || (num % 7 ===0)){
    return true
  }
}

console.log(checkPosNeg(21));

//26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more. 

const stringFromString = (str)=>{

  if(str.length < 3){
    return `Enter string length equal or more than 3`
  }

  const lastThreeChar = str.slice(-3)
  return `${lastThreeChar}${str}${lastThreeChar}`
  
  
}

console.log(stringFromString('anil'));

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

const checkJava = (str)=>{
  return str.startsWith('Java')
}

console.log(checkJava('anil'));
console.log((checkJava('Javashang')));


  