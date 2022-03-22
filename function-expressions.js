// Function Expressions
/* What if there;s no need for a name, like we're in a situation where we just need a 
   "function" but that "function wont get called up on for rest of the that "Application"???
   We don't need a "new identifier", we'll just create a "Function Expression".
   We don't have to supply a name, just give it to the body of the function.
   We can do this whenever we need to run some code in the future.
*/
//Let's use the setTimeout handler

//setTimeout()
//The timeout is the number of milliseconds that i want to wait before executing this code.

/*setTimeout(function () {
    console.log('I waited this long');


}, 5000);
*/
//The Answer is : "I waited this long"

// the number can be 5000 or 2000, or 2900, whatever it is
// the number passed in represents the milliseconds like 5000 equals 5 seconds in realtime.

//Let us use both the "Function Declaration"& "Function Expression".
//same basic idea: Will start off with the "Counter" 
//This will count the number of times we actually execute our "Function Expression".
//I'm going to set timeout using that built-in Function of javascript and pass in a new function expression.

let counter = 0;
function timeout () {
    setTimeout(function () {
        console.log('Do This ' + counter++);
        timeout();
    }, 4000);
}
timeout();

/*the answer is : Do This 0
                  Do This 1
                  Do This 2
                  Do This 3
                  Do This 4
                  Do This 5 etc....
This logic will continue to Loop if you don't press C + Ctrl
*/
//Infinite Loops are dangerous because they can harm your computer, freeze computer, harm server etc...
//You might wanna avoid Infinite Loops.

function greet () {
    console.log('hi');
}

(function greetUs() {
    console.log('Immediately Invoked Function Expression (IIFE)');
})();

//There's actually 4 sets of parenthesis "()", we just have to see them and remember
//what each of them are doing. 

