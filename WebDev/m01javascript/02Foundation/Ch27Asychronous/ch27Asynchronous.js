
// Asynchronous in javascript 

/**
 * 
 * in this chapter 
 * 
 * -- 01. Single threaded programming 
 * -- 02. multi threaded programming 
 * -- 03. callback queue 
 * -- 04. callback stack
 * -- 05. setTimeout()
 * -- 06. setInterval()
 * -- 07. setTimeout() - example 
 * -- 08. setInterval() - example 
 * -- 09. clearTimeout 
 * -- 10. clearInterval 
 * -- 11. synchronous vs Asynchronous 
 * -- 12. call back hell 
 * -- 13. promises 
 * -- 14. async & await 
 * -- 15. 
 * 
*/


/**
 * explore quiz - 01, 02, 03 
 * 
 * 
*/


/**
 * explore Problem  - coding 
 * -- code section - problem 2 - counterII - same as leetcode 
 * -- code section - problme 3 - chunk array 
*/


/**
 * explore topics  - out of the box 
 * 
*/



// 01. 
// single threaded programming language 
// javascript, ruby is a single threaded programming language



// 02.  
// multi threaded programming language 
// java, c++, python are multi threaded programming language



// 03. 
// callback queue 
// task queue
/*  
    JavaScript engine place the Some task() function is into a queue 
    called a callback queue or a task queue

*/



// 04. 
// callback stack



/* 
 05. 

 setTimeout()

 if you need to run a function only one time then use setTimeout

 syntax :- setTimeout(function, delayTime)
 syntax :- setTimeout(function, delaytime, argument1, argument2, argument3 );

*/







// 06.
// setInterval()

// if you need to run a function multiple time then use setInterval

// setInterval is self calling function
// setInterval need to stop, otherwise program will go infinite number of times
// seInteval is perpetual, (means programs will runs, until memory runs out)

// setInterval(function, dalayTime);
// setInterval(function, delayTime, argument1, argument2, argument3)







// 07: 
// example using setTimeout()

// Write a program to display a Text Once After 3 Second
// function will execute after calling 

console.log("Hello World ");

function greet() {
    console.log("Hello Friends");
}


setTimeout(greet, 3000); // function call using setTimeout or Asynchronous calling 

console.log("Namastey World");
greet(); // simple function call or normally we call 




// write a program to display a text once after 3 second 
// by passing arguments using setTimeout


function greetHello(name, message) {
    console.log(`Hello ${name}, ${message}`);

}

setTimeout(greetHello, 3000, "John", "How are You ? ");








// 08. 
// Interview question === important

// example using setInterval()
// Display Time Every 3 Second

console.log("Display time ");

let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let timeNow = `${hours} : ${minutes} : ${seconds}`;

function displayTime() {
    console.log(`Now the time is ${timeNow}`);
}

let intervalId = setInterval(displayTime, 2000);

setTimeout(function () {
    clearInterval(intervalId)
}, 6000);





// 09. clearTimeout

// syntax :- clearTimeout(function, miliseconds)
// by using setTimeout we can display or perfrom any task after certain interval of time.
// but lets suppose we have to halt or stop that function before the execution of task,
// we can use clearTimeout.




// 10. clearInterval
// stop set interval after five times, using clearInterval
let count = 0;

function countDisplay() {
    count++;
    console.log("count = ", count);
    if (count === 5) {
        clearInterval(intervalId2);
        console.log("Interval Stopped ");
    }

}
let intervalId2 = setInterval(countDisplay, 1000);




// 11.
// synchronous vs Asynchronous

/*
 Synchronous programming refers to a traditional programming approach
 where tasks are executed sequentially (one after the other).

 In contrast, asynchronous programming allows for
 multiple tasks to be executed concurrently without blocking the main thread or UI.

*/





// 12.
// call back hell
/*

  When using a large number of nested callbacks, 
  it can become challenging to understand the 
  structure of the code and the order of events. 
  This is often called "Callback Hell" .

  https://www.youtube.com/watch?v=y_TTSQ1jf64 (anuj bhaiya - call back hell)

  we have to reduce call back hell - by using promises;

*/






/*
   What is promises ?

   to create a promise object , we use the Promise() constructor.
   
   syntax -
   it takes two parameter -
   Promise( function (resolve, reject) ) 

   then() - resolve
   catch() - reject
   finally() - in all case

   Promise.all([promise1,promise2])


*/




/*

  What is async & await ?

*/




/* 
  A callback is a function passed as an argument to another function.
  and received as parameter ;

  for eg;
  setTimeout & setInterval - takes a function as parameter; 
*/
