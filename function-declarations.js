// Function Declarations

  function sayHello() {
    console.log('--------------');
    console.log('Hello');
    console.log('--------------');
}


//We used a keyword called "function"
//We them gave the function an identifier.Similar rules to naming variables.
//The name of the function is "sayHello".
//To actually invoke the function, we have to use the function invocation operator().
//The "function" "Declaration" won't run if there is no "Variable assigned" to "sayHello"

let a = sayHello;
a();
a();
a();
/*The Answer Is: ___________________
                 hello
                 ___________________
                 ___________________
                 hello
                 __________________
                 hello
                 ___________________
                 
*/
//We can hello three times in a row.

//Let us create a new version of this "Function".

//Now, we can use this variable "name" in the body(Code block). 

function sayHello(name) {

    console.log('-----------------');
    console.log('hello  ' + name + '!');
    console.log('-----------------');
}

sayHello('Lisa');
sayHello('Lindo');
sayHello('Mr Msane');

//We able to reuse that code, but change it up or update it  by 'passing' the "name".

//Another thing  we can do with functions is return values from other functions.
//The first function we created was just an 'OUTPUT'.
//We're not expecting it to perform some operation to give us a "value" back.

/* BUT!, what if i wanted to create a "function" that implements a business rule in my Application System
   like for an E-Commerce webpage to calculate the  "sales of Tax" on a given amount,
   like a 'Sub-Total' of all items that are in my "Shopping Cart"???.
*/


/*function calculateTax() {
    let result = amount * 0.0825;
    return result;
}
*/  // create a simple function called "calculateTax()"
// I want to allow the caller to 'pass' in the "Amount" we're going to charge tax to.
//The sales tax is according to where you live.
//The "value" i want to return, you can return one "value" from a "Function".
//In this case i want to return the "Amount of Tax", so i'll return "result".
function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}
//Now, what i'll do is call "calculateTax", passing in an Amount, so i'll say "0ne Hundered Dollars"
calculateTax(100);
//Now i want to capture that into a "Variable", it will return a value to me.
/*let result CalculateTax(100);*/
// I can reuse the Variable word "result", BUT i want to use more descriptive terms, like "tax equals calculateTax".

let tax = calculateTax(100);
console.log(tax);

//The Answer is : "8.25"
//You can see that for a "One Hundered Dollars purchase", it would charge Eight dollars and 25 cents.
//That's  the purpose of the "return" keyword, is to actually give me something/value back.
//So this>>>>>>"calculateTax(100);" is an expression, ""A Function Invocation Expresion"",
// It's going to give me a value back that i can assign to the new "variable "tax".
//I can work with a value in this case, a number representing the "amount of Tax".

//CONCLUSION: We learnt that "Function Declaration" & "Variable Declaration" are both similar in that
//they both have an "identifier" or "name" because we plan to later call them on.
