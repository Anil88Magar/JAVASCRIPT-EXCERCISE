// // // // // // 1. Write a JavaScript program to display the current day and time in the following format.  
// // // // // // Sample Output : Today is : Tuesday.
// // // // // // Current time is : 10 PM : 30 : 38

// // // // // const date = new Date();
// // // // // const day = `Today is : ${date.toLocaleDateString('en-Us',{weekday:'long'})}.`
// // // // // let hour = date.getHours();
// // // // // const minute = date.getMinutes();
// // // // // const seconds = date.getSeconds()
// // // // // //Determining Am or PM 
// // // // // const amPm = hour >= 12 ? 'PM' : 'AM';
// // // // // //Determining 12 or 24 hour format
// // // // //  hour = hour % 12 || 12 ;
// // // // // console.log(day);
// // // // // console.log(`Current time is : ${hour} ${amPm} : ${minute} : ${seconds}`);

// // // // // // 2. Write a JavaScript program to print the current window contents.  

// // // // // function printCurrentWindow(){
// // // // //     window.print();
// // // // // }

// // // // // printCurrentWindow()

// // // // // // 3. Write a JavaScript program to get the current date.  
// // // // // // Expected Output :
// // // // // // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


// // // // // let todayDate = date.getDate();
// // // // // let todayMonth = date.getMonth() +1;
// // // // // const todayYear = date.getFullYear();

// // // // // function currentDate(){
// // // // //   if(todayDate < 10){
// // // // //     todayDate = `0${todayDate}`
// // // // //   }
// // // // //   if(todayMonth < 10){
// // // // //     todayMonth = `0${todayMonth}`
// // // // //   }
// // // // // //dd-mm-yyyy
// // // // //  return `${todayDate}-${todayMonth}-${todayYear}`
  
// // // // // }

// // // // // console.log(currentDate());

// // // // // // 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

// // // // // const traingleArea =(a,b,c)=>{
// // // // //     //calculate semi perimeter
// // // // // const sp = (a+b+c)/2 ;

// // // // //  // Use Heron's formula to calculate the area
// // // // //     const area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
// // // // //     return area ;
// // // // // }

// // // // // const side1 = 5;
// // // // // const side2 = 6;
// // // // // const side3 = 7;

// // // // // const area = traingleArea(side1,side2,side3);
// // // // // console.log(`Area of a triangle is ${area}`);

// // // // // // 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  

// // // // // const rotateString = function(){

// // // // //   const text = document.getElementById('text');
// // // // //   element = text.textContent;

// // // // //   setInterval(()=>{
     
// // // // //     element = element.slice(-1) + element.slice(0, -1);
// // // // //     text.textContent = element ;
  
// // // // //   },3000)

// // // // // }

// // // // // rotateString(text);

// // // // // //6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

// // // // // function findLeapYear (year){
  
  

// // // // //   if(year%4=== 0 && year%400===0 || year%100===0){
// // // // //     console.log(`${year} is a leap year`);
    
// // // // //   }else {
// // // // //     console.log(`${year} is not a leap year`);
// // // // //   }

// // // // // }

// // // // // findLeapYear(2024);

// // // // // // 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

// // // // // function leapYear(year){
// // // // //    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    

// // // // // }

// // // // // console.log(leapYear(2025));

// // // // // // 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  



// // // // // for(let year= 2014; year <= 2050; year++){
// // // // //   const today = new Date(year,0,1);

// // // // //   if(today.getDay()===0){
// // // // //   console.log(`1st January of ${year} is Sunday`);
// // // // //   }
  
// // // // // }


// // // // // // 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 

// // // // // const randomNumber = Math.floor(Math.random()*10) +1 ;



// // // // // const userInput = parseInt(prompt(`Guess a number between 1 to 10`))

// // // // // if(userInput===randomNumber){
// // // // //   alert (`Good Work`)
// // // // // }else {
// // // // //   alert ('Number not matched')
// // // // // }

// // // // // // 9. Write a JavaScript program to calculate the days left before Christmas.  

// // // // // function daysUntilChristmas() {
// // // // //     // Get today's date
// // // // //     const today = new Date();

// // // // //     // Get the current year
// // // // //     const year = today.getFullYear();

// // // // //     // Create a Date object for Christmas of the current year
// // // // //     const christmas = new Date(year, 11, 25); // Month is 11 because December is the 12th month (0-based index)

// // // // //     // Calculate the difference in time (milliseconds) between Christmas and today
// // // // //     const timeDifference = christmas - today;

// // // // //     // Convert the time difference from milliseconds to days
// // // // //     const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// // // // //     // If Christmas has passed for this year, calculate for next year's Christmas
// // // // //     if (daysLeft < 0) {
// // // // //         const nextChristmas = new Date(year + 1, 11, 25);
// // // // //         const nextTimeDifference = nextChristmas - today;
// // // // //         return Math.ceil(nextTimeDifference / (1000 * 60 * 60 * 24));
// // // // //     }

// // // // //     return daysLeft;
// // // // // }

// // // // // // Example usage
// // // // // console.log(`There are ${daysUntilChristmas()} days left until Christmas.`);


// // // // //Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  

// // // // // Define a function to multiply two numbers and display the result
// // // // function multiplyBy() {
// // // //     // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
// // // //     var num1 = parseFloat(document.getElementById("firstNumber").value);
// // // //     var num2 = parseFloat(document.getElementById("secondNumber").value);

// // // //     // Set the inner HTML of the element with the id "result" to the product of the two numbers
// // // //     document.getElementById("result").innerHTML = num1 * num2;
// // // // }

// // // // // Define a function to divide two numbers and display the result
// // // // function divideBy() {
// // // //     // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
// // // //     var num1 = parseFloat(document.getElementById("firstNumber").value);
// // // //     var num2 = parseFloat(document.getElementById("secondNumber").value);

// // // //     // Check if the second number is zero before dividing
// // // //     if (num2 === 0) {
// // // //         document.getElementById("result").innerHTML = "Cannot divide by zero";
// // // //     } else {
// // // //         // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
// // // //         document.getElementById("result").innerHTML = num1 / num2;
// // // //     }
// // // // }


// // // // 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// // // // [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// // // // Expected Output :
// // // // 60°C is 140 °F
// // // // 45°F is 7.222222222222222°C

// // // // function fahrenheitToCelsius(fahrenheit){
// // // //   return (fahrenheit-32) * 5/9
// // // // }

// // // // const fahrenheit = 45 ;
// // // // const celsiusResult = fahrenheitToCelsius(fahrenheit)

// // // // console.log(`${fahrenheit}°F is ${celsiusResult}°C.`);

// // // // function celsiusToFarhenhit(celsius){
// // // //   return (celsius*9/5) +32
// // // // }

// // // // const celsius = 60 

// // // // const fahrenheitResult = celsiusToFarhenhit(celsius);
// // // // console.log(`${celsius}°C is ${fahrenheitResult}°F.`);

// // // // // // // // //12.Write a JavaScript program to get the website URL (loading page).  

// // // // //Get the current URL of the page using ES6 syntax
// // // // //const currentUrl = window.location.href;

// // // // //Display the URL using a template literal
// // // // //console.log(`The current URL is: ${currentUrl}`);

// // // // // // // // // 13. Write a JavaScript exercise to create a variable using a user-defined name.  

// // // // const names = 'Anil';
// // // // const user = 'Lonely'

// // // // this[names] = user;
// // // // console.log(this[names]);

// // // // // // // // 14. Write a JavaScript exercise to get the filename extension.  

// // // // function fileName(extension){
// // // //  return extension.split('.').pop()
// // // // }

// // // // const onlyExtension1 = fileName('index.js');
// // // // const onlyExtension2 = fileName('index.html');
// // // // console.log(onlyExtension1);
// // // // console.log(onlyExtension2);

// // // // // // // 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.  

// // // // function difference(number){
  
// // // //   if(number <= 13){
// // // //     return number -13;
// // // //   }else {
// // // //    return (number - 13 )*2
// // // //   }
// // // // }

// // // // console.log(difference(15))

// // // // // 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

// // // // function sum(a,b){
// // // //   if(a === b){
// // // //     return (a+b)*3
// // // //   }else {
// // // //     return (a+b)
// // // //   }
// // // // }

// // // // console.log(sum(3,3));
// // // // console.log(sum(5,3))

// // // // //17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  

// // // // function compute(number){

// // // //   const difference = Math.abs(number-19)
// // // //   if(number > 19){
// // // //     return difference *3 
// // // //   }else {
// // // //     return difference
// // // //   }
// // // // }

// // // // console.log(compute(20));
// // // // console.log(compute(5));

// // // // //18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

// // // // function checkPair(a,b){
// // // //   if(a===50 || b===50 || (a+b)===50){
// // // //      return true
// // // //   }
// // // // }

// // // // console.log(checkPair(30,50));

// // // // //19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

// // // // function within(num){
// // // //   if(num >=80 && num<=120){
// // // //     return `${num} is within 20 of 100.`
// // // //   }else if((num >=380 && num<=420)){
// // // //      return `${num} is within 20 of 400.`
// // // //     }else {
// // // //     return `${num} is not within 20 of 100 or 400.`;
// // // //   }
// // // //   }
// // // // console.log(within(180));

// // // // //20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

// // // // function negPos(a,b){
// // // //   if(a <= 0 && b >= 0) {
// // // //        return `${a} is negative and ${b} is positive.`
// // // //   }else if(((a > 0 && b < 0))) {
// // // //     return `${b} is negative and ${a} is positive.`
// // // //   }
// // // // }

// // // // console.log(negPos(20,-30))

// // // // // 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

// // // // function addStr(str){
// // // //   if(str.startsWith('py')){
// // // //     return str;
// // // //   }else {
// // // //     return `py${str}`
// // // //   }
// // // // }

// // // // console.log(addStr('thon'))
// // // // console.log(addStr('charm'))
// // // // console.log(addStr('pyanil'))

// // // // //22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

// // // // function removeStr(str,index){
// // // //  return str.slice(0,index) + str.slice(index + 1)
// // // // }

// // // // console.log(removeStr('anil',2))

// // // // // 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  

// // // // function newString(str){
// // // //   if(str.length <=1){
// // // //     return str;
// // // //   }
 
// // // //     const firstStr = str[0];
// // // //     const lastStr = str[str.length -1];
// // // //     const middleStr = str.slice(1, str.length -1);

// // // //     return `${lastStr}${middleStr}${firstStr}`;
// // // //   }

// // // //   console.log(newString('anil'));

// // // // //  24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

// // // // function createStr(str){
// // // // const firstStrr = str[0];
// // // // return `${firstStrr}${str}${firstStrr}`
// // // // }

// // // // console.log(createStr('lonely'));

// // // // //25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  

// // // // const checkPosNeg = (num)=>{
// // // //   if((num % 3 ===0) || (num % 7 ===0)){
// // // //     return true
// // // //   }
// // // // }

// // // // console.log(checkPosNeg(21));

// // // // //26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more. 

// // // // const stringFromString = (str)=>{

// // // //   if(str.length < 3){
// // // //     return `Enter string length equal or more than 3`
// // // //   }

// // // //   const lastThreeChar = str.slice(-3)
// // // //   return `${lastThreeChar}${str}${lastThreeChar}`
  
  
// // // // }

// // // // console.log(stringFromString('anil'));

// // // // // 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

// // // // const checkJava = (str)=>{
// // // //   return str.startsWith('Java')
// // // // }

// // // // console.log(checkJava('anil'));
// // // // console.log((checkJava('Javashang')));


// // // //28. Write a JavaScript program to capitalize the first letter of each word in a given string.  

// // // function capitalize(str){
// // //   return str.split(' ')
// // //   .map(word=>{
// // //   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// // //   }).join(' ')
// // // }

// // // console.log(capitalize('anil'));
// // // console.log(capitalize('my name IS AniL MagaR'));

// // // // 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  

// // // function range(a,b){
// // //   if(a >= 50 && a <=99 || b >= 50 && b <=99 ){
// // //     return true
// // //   }
// // //   return false
// // // }

// // // console.log(range(30,195));

// // // //30. Write a JavaScript program to check whether a string " Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. 

// // // function scriptAtFifth(str){
// // //    if (str.substring(4, 10) === "Script") {
// // //     // Return the string without "Script"
// // //     return str.slice(0, 4) + str.slice(10);
// // //   }
// // //   // Return the original string if "Script" is not found at index 4
// // //   return str;
// // // }

// // // console.log(scriptAtFifth('NepaScriptGood'));

// // // //31. Write a JavaScript program to find the largest of three given integers.  

// // // const largestNumber = (a,b,c)=>{
// // //   return Math.max(a,b,c)
// // // }

// // // console.log(largestNumber(13,555,2900));


// // // //32. Write a JavaScript program to find the closest value to 100 from two numerical values. 

// // // function closestValue(a,b){
// // //   const target = 100;

// // //   const largeA = a - target;
// // //   const largeB = b-target;

// // //   return (a>b) ? a :b
// // // }

// // // console.log(`closest value to 100 is ${closestValue(95,89)}`);

// // // //33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive. 

// // // function findRange(a,b){
// // //   if(a>=40 && a<=60 || b>=40 && b<=60  ){
// // //     return `Number is in range of 40 t0 60`
// // //   }else if(a>=70 && a<=70 || b>=100 && b<=100  ) {

// // //      return `Number is in range of 70 t0 100`
// // //   }else {
// // //     return `No range defined`
// // //   }
// // // }

// // // console.log(findRange(50,90));

// // // //33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  
// // // function findLargestInRange(x, y) {
// // //   // Check if both numbers are within the range 40 to 60
// // //   if ((x >= 40 && x <= 60) && (y >= 40 && y <= 60)) {
// // //     // Return the larger of the two numbers
// // //     return Math.max(x, y);
// // //   } else {
// // //     // Return a message indicating that the numbers are out of the range
// // //     return 'Both numbers must be in the range 40 to 60';
// // //   }
// // // }

// // // // Example usage
// // // console.log(findLargestInRange(45, 55)); // Output: 55
// // // console.log(findLargestInRange(60, 50)); // Output: 60
// // // console.log(findLargestInRange(35, 55)); // Output: Both numbers must be in the range 40 to 60

// // // //35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  

// // // function specifiedCharacter(str,char){
// // //   if(str.length < 4){
// // //     return false;
// // //   }
// // //   const newStr = str.slice(1,4);
// // //   return newStr.includes(char)
// // // }

// // // console.log(specifiedCharacter('Anil', 'n'));

// // // //36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.  

// // // function checkInt(a,b,c){
// // //  const lastA = a.toString().slice(-1);
// // //  const lastB = b.toString().slice(-1);
// // //  const lastC = c.toString().slice(-1);

// // //  return lastA===lastB && lastB===lastC;
// // // }

// // // console.log(`Last digit ${checkInt(32,43,63)}`);

// // // //37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  

// // // function stringLowUp(str){
// // //   if(str.length < 3){
// // //     return str.toUpperCase()
// // //   }

// // //   return str.slice(0,3).toLowerCase() + str.slice(3)
// // // }

// // // console.log(stringLowUp('HELLO'));
// // // console.log(stringLowUp('HEL'));
// // // console.log(stringLowUp('aa'));

// // // //48.Write a JavaScript program to reverse a given string. 

// // // function reverseString(str){
// // //   return str.split('').reverse().join('')
// // // }

// // // console.log(reverseString('hello'));



// // //49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  

// // function replace (str){
// // return str.split('').map(char=>{
// //   let charCode= char.charCodeAt(0)
// //   if(charCode==='z')return 'a';
// //   if(charCode==='Z') return 'A';
// //   else {
// //     return String.fromCharCode(charCode +1);
// //   }
// // })
// // .join('').toUpperCase()
// // }
// // console.log(replace('lonelYshanG'));

// // //50. Write a JavaScript program to capitalize the first two letter of each word in a given string.  

// // function capitalize (str){
// //  return str.split(' ')
// //         .map(word =>{
// //     return word.charAt(0).toUpperCase() +word.charAt(0).toUpperCase() + word.slice(2).toLowerCase();
// //   }).join(' ')
// // }

// // console.log(capitalize('this is sdhfGGa klf klHHah'));

// // //51. Write a JavaScript application that transforms a provided numerical value into hours and minutes.  

// // function intoHours(num){
// //  const hours = Math.floor(num/60);
// //  const minutes = num % 60;
// //  return `${hours}hours, ${minutes}mins`
// // }

// // console.log(intoHours(135));

// // //52. Write a JavaScript program to convert letters of a given string alphabetically. 

// // function letter (str){
// //   return str.split('').sort().join('')

// // }

// // console.log(letter('ghasgdfaal'));

// // //53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string. 

// function seperate(str){
//   return (/a...b/).test(str) || (/b...a/).test(str);
// }

// console.log(seperate('agggggggggb'));

//  //54.Write a JavaScript program to count the number of vowels in a given string.  

// //  function countVowel(str){
// //   const vowelPattern = /[aeiou]/gi;
// //  const vowel = str.match(vowelPattern)
// //  if(vowel){
// //   return vowel.length
// //  }else {
// //   return 0
// //  }

// //  }

// //  console.log(countVowel('lonelyshang'));

// // Define a function named vowel_Count with parameter str
// function vowel_Count(str) {
//   // Use regular expression to replace all characters not in 'aeiou' with an empty string
//   // and get the length of the resulting string, which is the count of vowels
//   return str.replace(/[^aeiou]/g, "").length;
// }

// // Log the result of calling vowel_Count with the given strings to the console
// console.log(vowel_Count("Python"));
// console.log(vowel_Count("w3resource.com")); 

// //55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.   
function equalNumber(str){
 let str_p = (str.match(/p/g) || []).length
 let str_t = (str.match(/t/g) || []).length
  if(str_t === 0 || str_p === 0){
    return false;
  }
 return str_p === str_t;
}

console.log(equalNumber('gopogtle'));

//56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  

function divide(num1,num2){
  const result = num1/num2 ;

  return result.toLocaleString()

}

console.log(divide(123456000, 1000));

//57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.  

function makeCopies(str,copies){
  return str.repeat(copies);
}
console.log((makeCopies('hello',3)));

//58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.  

function fourCopies(str,copies){
 return (str.length >= 3) ? str.slice(-3).repeat(copies) : 0
  
}

console.log(fourCopies('anil',4));

//59. Write a JavaScript program to extract the first half of a even string.  

const firstHalf= (str)=>{
  const firstHalf =  str.length / 2;
  return str.slice(0,firstHalf ) ;
}

console.log(firstHalf('lonelyshang'));

//60. Write a JavaScript program to create a new string without the first and last characters of a given string.  

function firstLast(str){
  return str.slice(1,-1);
  
}

console.log(firstLast('Hello'));

//61. Write a JavaScript program to concatenate two strings except for their first character.  

function concatenate (str1,str2){
  return `${str1.slice(1)}${str2.slice(1)}`;
}

console.log(concatenate('Hello', 'World'));

//62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.  

function move(str){
  if(str.length>= 3)
  return `${str.slice(-3)}${str.slice(0, -3)}`
}

console.log(move('lonelyshang'));

//63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.  

function middleThree(str){
  if(str.length >= 3){
    let middleStr = Math.floor(str.length/2);

    return str.slice(middleStr -1 , middleStr+ 2);
    
  }
}
console.log(middleThree('lonelyshang'));

//64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.  

function twoStr(str1,str2){
 str1.length > str2.length ? str1 = str1.slice(0,str2.length): str2 = str2.slice(0,str1.length)
 return str1 + str2 ;
}


console.log(twoStr('anil','magar'));

//65. Write a JavaScript program to test whether a string ends with " Script". The string length must be greater than or equal to 6.  

function script (str){
   if(str.length >= 6){
     
     return str.endsWith('script')
   }
}

console.log(script('javascript'));

//66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank. 

function cityName (str){
  if(str.startsWith('Los') || str.startsWith('New')){
    return str;
  }else {
    return ""
  }
}

console.log(cityName('New york'));
console.log(cityName('Kathmandu'));

//67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.  

function newString(str){
  // if(str.startsWith('P') || str.endsWith('P')){
  //   return str.slice(1,-1) 
  // }else{
  //   return str
  // }

  if(str.length > 1 && (str[1] === 'P' || str[str.length-1] === 'P' )){

    return str.slice(1,-1)
  }else{
    return str
  }
}

console.log(newString('kasthamandaP'));
console.log(newString('Lonelyshang'));
console.log(newString('Prata'));

//68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.  

function createNew(str,n){
  if(str.length >= n){

    return str.slice(0,n) + str.slice(-n)
    
 
  }else{
    return str
  }
}
console.log(createNew('javascript',4));
console.log(createNew('lonelyshang',4));

//69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  

function sumArray(arr){
  if(arr.length === 3){
    return arr[0] + arr[1] + arr[2]
  }else{
    return false
  }
}

console.log(sumArray([1,2,3]));

//70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.  

function rotateArray(arr){
  if(arr.length===3){

    return [arr[2],arr[1],arr[0]]

  }
}

console.log(rotateArray([1,2,3]));

//71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.  

function find1(arr){
  if(arr.length >=1){
    return arr[0]===1 || arr[arr.length -1]===1
  }
}

console.log(find1([5,2,3,1]));

//72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3. 

function checkFirstLast(arr){
  if(arr.length===3){
    return arr[0] === arr[arr.length-1]
  }
}

console.log(checkFirstLast([1,2,1]));

//73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.  

const reverse = function(arr){
  if(arr.length===3){
    return arr.reverse()
  }
  return `Array length is not three`
}

console.log(reverse([4,5,6]));

//74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.  

function findLargest(arr){
  if(arr.length > 2){
    let largest = Math.max(arr[0],arr[arr.length-1])

   const newArray = arr.map(()=>largest)
   return newArray
  }
}
console.log(findLargest([10,20,30,40,50]));






















  