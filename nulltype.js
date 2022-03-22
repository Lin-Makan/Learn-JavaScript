// "Null Type"

// "Null Type"

// Let us talk about the last of the "DataTypes" we'll encounter called "null".

//"Null" represents a "Variable" that points to nothing but an "Object Reference" was expected in that case.

/* 
  REMINDER: You create a 'variable' and not set any "value" to it, "not initialize" the "value" ,
  not set the "value".

Its going to end up 'returning "undefined".
*/

let a;
console.log(a);
console.log(typeof a);

//Console Answer is :
                     /*
                       undefined
                       undefined
                      */
let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern);
console.log(result);

//Console Answer is : null 
//There is no "match" for any 'value' to 'pattern'.

/* We have our "Regular Expression" example where we're going to try and "match"
   a "pattern"
 */

if (result === null) {
    console.log('no match was found');
}

// Console Answer is :  no match was found 

/* This is very helpful for building our Applications.
   Recap: the "primitive data type null" is not "zero", it's not "undefined",
   it's not an "empty string".

**It Just means that you have a "variable" where an "object" reference was
  expected but it's not "set" to any "object reference".

**It's different than undefined, because "undefined" says i'm expecting maybe a 
  "value" but one was never "set" and it was expecting maybe a "number", "string",
  or "boolean" no, no,no at all.

  We're expecting an "object reference" but we don't have an "object reference" at
  this time set to our "variable".
 
 */

                      
                      