// "Strings Methods"

/* We learnt about "built-in-natives", i explained how the "string primitive" is 
   mapped to the "string built-in-native object", 

And by boxing the "string primitive" into it's "equivalence". 
   
 */
let first = 'Understanding Yourself is Power In Itself.';
let second = 'It Is A Big Gap Between.';
let third = '6,13,26,29,32,34';

// You can also call "Methods" on "String Literals".
console.log('lindo does care'.toUpperCase());

let mySplit = third.split(' , ');
console.log(mySplit);
console.log(first.slice(13, 18));

//Console Answer is : 
                     /* 
                        LINDO DOES CARE
                        [ 6,13,26,29,32,34' ]
                     */

let mySubstr = first.substr(13, 7);
console.log(mySubstr);

// Console Answer is :
                       /* Your
                          Yourse
                        */

let myEndsWith = second.endsWith('try.');
console.log(myEndsWith);
let longSentence = second.endsWith('Between.');
console.log(longSentence);

// Console Answer is :
                      /* false
                         true
                      */
let myStartsWith = third.startsWith('6');
console.log(myStartsWith);

// Console Answer is : true

let myInclude = second.includes('Us');
console.log(myInclude);

// Console Answer is : false

///////////////////////////////////////////////////////////////////////////////////

let myRepeat = 'Touch! '.repeat(4)
console.log(myRepeat);

// Console Answer is : Touch! Touch! Touch! Touch!

//////////////////////////////////////////////////////////////////////////////

let myTrim = '  flowing  ';
console.log(myTrim.length);
console.log(myTrim.trim().length);

// Console Answer is : 
                       /* 11
                          7
                        */

// The whole "myTrim" string has a total of "11 character" including the "empty spaces"
 /* But when i call the "trim", and then i get the "length", there's only "seven characters"
    , which is the "string" "flowing".

*/

// So these are some helpful "string methods()" on the "built-in-native" "String Constructor Function".


//Let us do the same for "Array Methods" NEXT





