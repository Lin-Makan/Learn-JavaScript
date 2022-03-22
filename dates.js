// "Date Objects"

//We've talked about the "built-in-native-functions" that "return objects".

/* We saw there was a "date constructor function", and that "date constructor function"
   will return an "object" that allows us work with "dates".
*/

// How to work with "date type" information" using the "data object".
// Let 'today equal new date'. 

let today = new Date();

let lindo = new Date('October 29, 1994 21:01:00');
// let lindo = new Date('1994-10-29to21:01:00');             
// let lindo = new Date(1994, 09, 28);     >>>>Here we use "0" based forming of 10 and 29.
// let lindo = new Date(1994, 09, 28, 21, 1, 00);
var elapsedTime = today - lindo;
console.log(elapsedTime);
console.log(lindo.getDate());
console.log(lindo.getTime());
console.log(lindo.getMonth());
console.log(lindo.getDay());
console.log(lindo.getMinutes());
console.log(lindo.getSeconds());
console.log(lindo.getMilliseconds());

//Console Answer is :
                      /* 
                         864070576345
                         29
                         783457260000
                         9
                         6
                         1
                         0
                         0
                      */

/*And then there are also some additional "date functions" for "conversion", "utc' or "universal TimeCode"
  and "local dates" and "times" so "converting" back and forth between "utc" and "local date time".  */
