// Object & Json 


/**
 * -- 01. Object Literal 
 * -- 02. Object Constructor 
 * -- 03. Nested Object
 * -- 04. Modify Object 
 * -- 05. Adding Property 
 * -- 06. Delete property 
 * -- 07. keys, values, entries 
 * -- 08. iterating set 
 * -- 09. iterating map 
 * -- 10. iterating object s
 *  
 * 
*/





// 01. 
// creating object by object literal method

console.log("01. Creating object by object literal method");

let person = {
    name: "Anurag",
    age: 21,
    3: 1,
};

console.log(person.name);
console.log(person.age);
console.log(person[3]);
console.log(person["3"]);
console.log(person["name"]);
console.log(person["age"]);







// 02.
// creating object by constructor method

console.log("02. Creating object by object constructor method");

let person1 = new Object();

person1.name = "Anu";
person1.age = 21;

console.log(person1.name);
console.log(person1.age);
console.log(person1["name"]);
console.log(person1["age"]);






//  03.
//  javascript nested object

console.log("03. javascript nested object ");

let cricketer = {
    hisName: "Sachin 10",
    isCaptain: false,
    playIPL: true,
    address: {
        pin: 829204,
        city: "Mumbai",
        state: "Maharashtra"
    },
    total100: 100,
};


console.log(cricketer.hisName);
console.log(cricketer.total100);
console.log(cricketer.address.state);

console.log(cricketer["hisName"]);
console.log(cricketer["address"]["city"]);
console.log(cricketer["total100"]);








// 04.
// modify existing property
console.log("04. Modifying existing property ");

cricketer.hisName = "Sachin Tendulkar";
cricketer["total100"] = 200;
cricketer.address.pin = 987654;
console.log(cricketer);







// 05. 
// adding new property
console.log("05. adding new property");

cricketer.nickName = "God of Cricket ";
cricketer["address"]["country"] = "India"
console.log(cricketer);






// 06.
// delete new property
console.log("06. delete");

delete cricketer.isCaptain;
delete cricketer['address']['pin'];
console.log(cricketer);








//  07.
//  some predefined object method
//  these all three method will return array 
// .keys
// .values
// .entries

console.log("07. keys, values, & object");

let crickProperty = Object.keys(cricketer);
console.log("array of property ");
console.log(crickProperty);


let crickValues = Object.values(cricketer);
console.log("array of values");
console.log(crickValues);

let allCrickValue = Object.entries(cricketer);
console.log("array of array of property & value - 2d array ");
console.log(allCrickValue);








// 08. 
// on set 
const mySet = new Set([1, 2, 3, 4, 5]);

// Using forEach
mySet.forEach((value) => {
    console.log(value);
});

// Using for...of loop
for (const value of mySet) {
    console.log(value);
}





// 09. 
// on map 
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

// Using forEach with destructuring
myMap.forEach((value, key) => {
    console.log(key, value);
});

// Using for...of loop
for (const [key, value] of myMap) {
    console.log(key, value);
}





// 10 
// on object 
const myObject = { a: 1, b: 2, c: 3 };

// Using for...in loop
for (const key in myObject) {
    if (Object.hasOwnProperty.call(myObject, key)) {
        const value = myObject[key];
        console.log(key, value);
    }
}

// Using Object.entries
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, value);
}

// Using Object.keys
Object.keys(myObject).forEach((key) => {
    const value = myObject[key];
    console.log(key, value);
});




