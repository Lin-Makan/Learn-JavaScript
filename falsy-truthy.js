// "Truthy and Falsy Values"

//These are "FALSY" :

if (false) { } else { console.log('false is falsy'); }
if (null) { } else { console.log('null is falsy'); }
if (undefined) { } else { console.log('undefined is falsy'); }
if (0) { } else { console.log('0 is falsy'); }
if (NaN) { } else { console.log('NaN is falsy'); }
if ('') { } else { console.log('an empty string with single-quotes is falsy'); }
if (" ") { } else { console.log('an empty string with double-quotes is falsy'); }

// Everything else is truthy

if (true) { console.log('true is truthy'); }
if ({}) { console.log('an empty object is truthy'); }
if ([]) { console.log('an empty array is truthy'); }

if ('Lindo') { console.log('a non-empty string is truthy'); }
if (new RegExp()) { console.log('a new instance of an object is truthy'); }

if (10) { console.log('positive integers are truthy'); }
if (-10) { console.log('negative integers are truthy'); }
if (1.23) { console.log('positive floats are truthy'); }
if (-1.23) { console.log('negative floats are truthy'); }
if (Infinity) { console.log('positive Infinity is truthy'); }
if (-Infinity) { console.log('negative Infinity is truthy'); }

// Console Answer is:
                     /*  
                      *  falsy is falsy
                      *  null is falsy
                      *  undefined is falsy
                      *  0 is falsy
                      *  NaN is falsy
                      *  an empty string with single-quotes is falsy
                      *  an empty string with double-quotes is falsy
                      *  
                      *  true is truthy
                      *  an empty object is truthy
                      *  an empty array is truthy
                      *  
                      *  a non-empty string is truthy
                      *  a new instance of an object is truthy
                      *  
                      *  positive integers are truthy
                      *  negative integers are truthy
                      *  positive floats are truthy
                      *  negative floats are truthy
                      *  positive infinity are truthy
                      *  negative infinity are truthy
                      
                      */

