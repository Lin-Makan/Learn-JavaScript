// Returning "Functions" From "Functions"
/*Now until now, our functions perform one or more actions and then exited quietly
  , we may have returned a simple value like "true" or "High" somewhere along those lines
*/
//In Web Development, working against the "global scope" is a crucial concern.
//Declaring "Variables" at the Global Scope is bad idea.

//NEVER DO THIS:

/*var myFunction = function () {
    console.log('yes sir');
}
*/

//And NEVER DO THIS:
/*var myVariable = 'I  am at the global scope';

var myFunction = function () {
    console.log('Yes we are');
}
*/

//We'll be working towards a solution to "avoid" writing your code in "global scope" if at all possible.

function one() {
    return 'one';
}

let value = one();
console.log(value);

//The Console Answer is : one
//We got the string 'one'.

//Let Us PARAPHRASE This:
function one() {
    return 'one';
}
console.log(one());
//The Console Answer  is : one

////////////////////////////////////////

function two() {
    return 'two';
}
let amount = two;
console.log(typeof two);
//The Answer is : function.
//We can see the type is 'function'.

//Think About All the DataTypes By Now:
/*
   string
   number
   boolean
   undefined
   function
 */
//Theres more to come.
/////////////////////////////////////

function ultimate() {
    return function () {           //Here We're using a return keyword to return a "function expression"  
        console.log('ultimate');
    }
}

let myFunction = ultimate();
myFunction();
//The 'Console' Answer is : ultimate
//WE Invoke it using "()".

function eight() {
    return function () {
        return 'eight';
    }
}
console.log(eight()());

//The Console Answer is: eight
//The Using of double Parentheses Methods()() inside the console  dot log
//What we're working with here is references to functions.





