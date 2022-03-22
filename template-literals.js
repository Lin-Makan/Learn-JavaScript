// "String Template Literals"
// Here,It allows you to create better "Literal Strings" through the use of "Templates".

let name = 'Lindokuhle';
console.log(`hi ${name}`);      //Here we use the "backtick" ` ` as our string interpolation.

//The Console Answer is : hi Lindokuhle

let sentence = `    We all know its a convenience, I've never done anything
    like this before in my whole entire lifetime.
    I've seen crazy moments, but not quite like this man.
    I swear this hit different everytime, man.`;

console.log(sentence);

//The Console Answer is : 
                         /* hi Lindokuhle
                            We all know its a convenience, I've never done anything
                            like this before in my whole entire lifetime.
                            I've seen crazy moments, but not quite like this man.
                            I swear this hit different everytime, man.
                          */
//You can do anything inside the "expression interpolation area".

////////////////////////////////////////////////////////////////////////////////////////////////
//Let's make an example with a function

function getReasonCount() { return 1; }
//then i 'll create a "variable" called "interpolation"

//let interpolation = `Give me ${} to try this.`  //Inside the curly braces, we 'pass in' the "function" to 'evaluate the condition'

let interpolation = `Give me ${(getReasonCount() == 1) ? 'one good reason' : 'a few reasons'} to try this.`

console.log(interpolation);

//The Console Answer is : "Give me one good reason to try this"

/* There's a need for this, especially in "web development" where you may
   have "One Item" in your "Shopping Cart",
   OR "Two Items" in your "Shopping Cart" to change up the "string" that
   gets "outputted" to for the "End User" on a quantity, and maybe other uses as well.
   */

/* Strings Templates can make your code more "Compact" and "Readable" to do more
   interesting things that would require alot of appending of strings previously.
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function transferAmount() { return 6000; }

let account = `Choose Amount To Transfer: ${transferAmount() < 6000 ? 'Transcaction Approved' : 'Transaction Invalid'}`
console.log(account);

//The Console Answer is : Choose Amount To Transfer: Transaction Invalid 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
  "Template Literals" or "Template Strings" in JavaScript are multi-line String literals that allow "string
  interpolation".
  String Interpolation allows us to include embedded expressions as part of the string.
  You can create "multi-line strings" , "basic string formatting" & "tagged templates with 
  template strings".

Interpolation Definition : The insertion of something of a different nature into something else.
 
 */

