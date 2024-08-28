// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const date = new Date();
const day = `Today is : ${date.toLocaleDateString('en-Us',{weekday:'long'})}.`
let hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds()
//Determining Am or PM 
const amPm = hour >= 12 ? 'PM' : 'AM';
//Determining 12 or 24 hour format
 hour = hour % 12 || 12 ;
console.log(day);
console.log(`Current time is : ${hour} ${amPm} : ${minute} : ${seconds}`);

// 2. Write a JavaScript program to print the current window contents.  

function printCurrentWindow(){
    window.print();
}

printCurrentWindow()

// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


let todayDate = date.getDate();
let todayMonth = date.getMonth() +1;
const todayYear = date.getFullYear();

function currentDate(){
  if(todayDate < 10){
    todayDate = `0${todayDate}`
  }
  if(todayMonth < 10){
    todayMonth = `0${todayMonth}`
  }
//dd-mm-yyyy
 return `${todayDate}-${todayMonth}-${todayYear}`
  
}

console.log(currentDate());

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

const traingleArea =(a,b,c)=>{
    //calculate semi perimeter
const sp = (a+b+c)/2 ;

 // Use Heron's formula to calculate the area
    const area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    return area ;
}

const side1 = 5;
const side2 = 6;
const side3 = 7;

const area = traingleArea(side1,side2,side3);
console.log(`Area of a triangle is ${area}`);

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  

const rotateString = function(){

  const text = document.getElementById('text');
  element = text.textContent;

  setInterval(()=>{
     
    element = element.slice(-1) + element.slice(0, -1);
    text.textContent = element ;
  
  },3000)

}

rotateString(text);

//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

function findLeapYear (year){
  
  

  if(year%4=== 0 && year%400===0 || year%100===0){
    console.log(`${year} is a leap year`);
    
  }else {
    console.log(`${year} is not a leap year`);
  }

}

findLeapYear(2024);

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

function leapYear(year){
   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    

}

console.log(leapYear(2025));

// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  



for(let year= 2014; year <= 2050; year++){
  const today = new Date(year,0,1);

  if(today.getDay()===0){
  console.log(`1st January of ${year} is Sunday`);
  }
  
}


// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 

const randomNumber = Math.floor(Math.random()*10) +1 ;



const userInput = parseInt(prompt(`Guess a number between 1 to 10`))

if(userInput===randomNumber){
  alert (`Good Work`)
}else {
  alert ('Number not matched')
}

// 9. Write a JavaScript program to calculate the days left before Christmas.  

function daysUntilChristmas() {
    // Get today's date
    const today = new Date();

    // Get the current year
    const year = today.getFullYear();

    // Create a Date object for Christmas of the current year
    const christmas = new Date(year, 11, 25); // Month is 11 because December is the 12th month (0-based index)

    // Calculate the difference in time (milliseconds) between Christmas and today
    const timeDifference = christmas - today;

    // Convert the time difference from milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // If Christmas has passed for this year, calculate for next year's Christmas
    if (daysLeft < 0) {
        const nextChristmas = new Date(year + 1, 11, 25);
        const nextTimeDifference = nextChristmas - today;
        return Math.ceil(nextTimeDifference / (1000 * 60 * 60 * 24));
    }

    return daysLeft;
}

// Example usage
console.log(`There are ${daysUntilChristmas()} days left until Christmas.`);




