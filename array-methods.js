// "Array Methods"

let names = ['Ursula', 'Makan', 'Msane', 'Lindokuhle', 'Kula'];
let others = ['Kong', 'KK', 'Sire', 'King', 'Onke'];

let lost = [3, 5, 12, 15, 23, 41];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

// I have four "Arrays" called "names","others", "lost", "fibonacci".
// The difference is : 'lines 3-4' we're working with "strings" and 'lines 6-7' we're working with "numbers".

// So we're looking at "Methods" that can be applied to "Arrays"

// So the first thing we need to do is combine 2 'Arrays" together by using the "concat() method".
//The "concat() method" combines 2 or more arrays together.

var combine = lost.concat(fibonacci);
console.log(combine);

//Console Answer is : [ 3, 5, 12, 15, 23, 41, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ].
//Two sets of "arrays" become one "array".

//We can also : 

console.log(fibonacci.join('~'));

//Console Answer is : 1~1~2~3~5~8~13~21~34~55

//You can see we printed out "fibonacci numbers" with a "tilde" joined them together into a "single string" seperated by a 'tilde'.

/* We've already demonstrated "push" and "pop", there are essential ways to 'add elements'
   in an "Array" and to 'remove the 'last element' from the "Array"
 */
console.log(lost.shift());
console.log(lost);
lost.unshift(1,2,3,4);
console.log(lost);
                          /* 3
                             [ 5, 12, 15, 23, 41 ]
                             [ 
                                1, 2, 3, 4, 5,
                                12, 15, 23, 41
                             ]
                           
                           */

console.log(names);
console.log(names.reverse());
console.log(names.sort());

//Console Answer is : 
/*
   [ 'Ursula', 'Makan', 'Msane', 'Lindokuhle', 'Kula']
   [ 'Kula', 'Lindokuhle', 'Msane', 'Makan', 'Ursula']
   [ 'Kula', 'Lindokuhle', 'Makan', 'Msane', 'Ursula']
*/

//The "sort() method" puts the array in "Alphabetical Order'.

console.log(others.indexOf('King'));
// Console Answer is : 3 

var combine = lost.concat(fibonacci);

console.log(combine);
console.log(combine.lastIndexOf(1));

//Console Answer is : 
                      /* 1, 2, 3, 4, 5, 12, 15, 23, 41, 1, 1, 2, ,3, 5, 8, 13, 21, 34, 55 ]
                         10
                       */

//It's very useful if i'm looking at a large set of "Data".

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* We can create a "filtered list" using "Arrow Functions".
   So "var" filtered equals combine dot filter method()"
   "x" will be the input parameter name(i can give it any name i want).

 */

var filtered = combine.filter((x) => { if (x <= 15) return x; }); //filter()method returns elements of the array according to the conditions.
console.log(filtered);

//Console Answer is : 
                     /* [
                         1, 2, 3, 4, 5, 12,
                         15, 1, 1, 2, 3,  5,
                         8, 13
                        ]
                      
                      */
////////////////////////////////////////////////////////////////////////////////////////////////////////

names.forEach((name) => console.log(`Hello ${name} `));

//Console Answer is :
                     /*   
                        Hello Kula
                        Hello Lindokuhle
                        Hello Makan
                        Hello Msane
                        Hello Ursula
                      
                      */

/////////////////////////////////////////////////////////////////////////////////////////

// So here i'll take the "filtered list" i created here 
//This should contain all of the "values" that are less than "15" from "combine".
console.log(filtered.every((num) => num < 10) );

console.log(filtered.every((num) => num < 16));

//Console Answer is : 
                       /*
                          false
                          true
                       */
////////////////////////////////////////////////////////////////////////////////////////
// Are all the "nums" greater than 50??? true or false?
console.log(fibonacci.some((num) => num > 50));
//Console Answer is : true

// Is there any number or at least one item greater than "100"?? 

console.log(fibonacci.some((num) => num > 100));

//Console Answer is : false
// There is no item in that "fibonacci sequence" that we have in our 'array' thats "greater than 100".

// You can see that there are some very useful "helper methods" on the "array-built-in-native".















