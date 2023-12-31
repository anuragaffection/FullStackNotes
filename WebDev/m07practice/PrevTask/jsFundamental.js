//



// 01. 
// difference between .has() && .includes()
// problem number 08 - common element

/*

  In JavaScript, 
  
  the .has() method 
  is used to check if an object has a particular property name. 
  
  The .includes() method 
  is used to check if an array contains a particular value.

*/ 






//  02. 
// Isomorphic string 

/*
  Two strings are called isomorphic 
  if all occurrences of each character in X can be 
  replaced with another character to get Y and vice-versa. 
  
  In other words, there should be one-to-one mapping 
  for every character of string X to every character of string Y and vice-versa

*/





// 03. 
// example of isomorphic & non isomorphic string 

/*

Here are some examples of isomorphic strings:

"aab" and "xxy"
"ab" and "cd"
"abc" and "def"

Here are some examples of non-isomorphic strings:

"aab" and "xyx"
"ab" and "dc"
"abc" and "defg"

*/






// 04.
// time and Date function in javascript

/*


important note :- The Date() function will also accept a variety of other date formats, 
                   such as "MM/DD/YYYY", "YYYY-MM-DD", and "DD-MM-YYYY". as parameters 

Date(): 
    This function creates a new Date object, which represents a single moment in time.

getTime(): 
    This method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

getHours(): 
    This method returns the hour of the day (0-23).

getMinutes(): 
    This method returns the minute of the hour (0-59).

getSeconds(): 
    This method returns the second of the minute (0-59).

getMilliseconds(): 
    This method returns the millisecond of the second (0-999).

getDay() :
    This will retur day as 0,1, 2, 3, 

getDate(): 
    This method returns the day of the month (1-31).

getMonth():
    This method returns the month of the year (0-11).

getFullYear():
    This method returns the year.

now(): 
    This method returns the current date and time as a Date object.

setTimeout(): 
    This method executes a function after a specified number of milliseconds.

setInterval(): 
    This method executes a function repeatedly after a specified number of milliseconds.

*/





// 05. 
// sleeping beauty problem 



// goes to nearest greater integer
let x = Math.ceil(2.8); // = 3
let y = Math.ceil(2.3)  //  = 3
let z = Math.ceil(-2.8) // -2
let q = Math.ceil(-2.3) // -2



// goes to nearest smallest integer 
let x1 = Math.floor(2.8); //  = 2
let y1 = Math.floor(2.3); //  = 2
let z1 = Math.floor(-2.8) //  = -3
let q1 = Math.floor(-2.3) //  = -3



// exact rounding of number 
let x2 = Math.round(2.8); //  = 3
let y2 = Math.round(2.3); //  = 2
let z2 = Math.round(-2.8) // -3
let q2 = Math.round(-2.3) // -2



// it just remove decimal part
let x3 = Math.trunc(2.8);  // 2
let y3 = Math.trunc(2.3);  // 2
let z3 = Math.trunc(-2.8)  // -2
let q3 = Math.trunc(-2.3); // -2



console.log( 2 % 24);


function main() {
    var startTime = readLine();
    var endTime = readLine();
    console.log(calculateSleepDuration(startTime, endTime));
}

function calculateSleepDuration(startTime, endTime) {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);
  
    let duration = (endHour + 24 - startHour) % 24;
    duration += (endMinute - startMinute) / 60;
  
    return Math.floor(duration);
}

// check array destructuring 
//  .map is function , that is converting the input into Number




