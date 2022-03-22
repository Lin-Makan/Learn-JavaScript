// Decision Statement
//There's 3 decisions to consider: "if", "switch", and a "ternary operator"
/*  if (//expression) {

}
*/
//The "expression" is in between the "Opening and Closing" Parentheses" ().
//If the "expression" is 'True', we'll then execute all the code inside the code block "{ }"

/* var count = 3;
   if (count == 4) {
    console.log('count is 4');
}

//Answer is Nothing: Which is "false"

if (count == 3) {
    console.log('count is 3');
}

//Answer is 3: which is "true", count is equal to '3'.
//There's an alternative to this, we can use the "else" statement.
//The "else" statement will follow "if", because the count count ==4 returned false.
if (count == 4) {
    console.log('count is 4');
} else {
    console.log('count is NOT 4');
}
//Answer is: count is NOT 4
// we skipped this block of code ('count is 4') because it returns false,
//Therefore we executed the "else" statement.

//Maybe i want to keep evaluating before i jump into the "else" statement.
// If i want to keep evaluating i can use the "else if".

if

*/
var count = 3;
if (count == 4) {
    console.log('count is 4');
} else if (count > 4) {
    console.log('count is greater than 4');
} else if (count < 4) {
    console.log('count is less than 4');
} else {
    console.log('count is not 4')
}
//The Answer is : count is less than 4.
//The final "else statement" won't run if the above conditions run
//BUT if the above conditions don't run then the final "else statement" will run.
//The structure of "else statements" allow us to evaluate one or more expressions.
//Depending on your business rules.

var number = 55;
if (number == 53) {
    console.log('Not True');
} else if (number == 55) {
    console.log('It Is True');
} else if (number > 55) {
    console.log('Higher than Expected');
} else if (number < 50) {
    console.log('Lower Than Expected');
} else {
    console.log('Invalid');
}
//The Answer is : It Is True


//Next statement is "switch", which happens to be more tricky.
/*switch () {

}
*/
// We will use a superhero connotation
//We have the "case" keyword, which is used for the value we want to compare our "case" against.
//And then the semi:Colon and anything beneath that will become part of the body of that case that's executed.

/*let hero = 'superman';
switch (hero) {
    case'superman':
}
*/
/*let hero = 'superman';
switch (hero) {
    case 'superman':
        console.log('super strength');
        console.log('X-Ray Vision');
    case 'batman':
        console.log('intelligence');
        console.log('fighting skills');
    default:
        console.log('Member of JLA');
}
/*Answer is : super strength
              X - Ray Vision
              intelligence
              fighting skills
              Member of JLA

*/
let hero = 'batman';
switch (hero) {
    case 'superman':
        console.log('super strength');
        console.log('X-Ray Vision');
    case 'batman':
        console.log('intelligence');
        console.log('figting skills');
    default:
        console.log('Member of JLA');
}

/*The Answer is : intelligence
                  fighting skills
                  Member of JLA
*/

let people = 'Mankind';
switch (people) {
    case 'Lindokuhle':
        console.log('Scared');
        console.log('Angry');
        console.log('Sad');
        console.log('Moody');
        console.log('Strong');
        console.log('Brave');
    case 'Lisa':
        console.log('Sweet');
        console.log('Supportive');
        console.log('Impulsive');
        console.log('Brave');
        console.log('Intelligent');
    default:
        console.log('Fearsome 2');
}
//The Answer is : Fearsome 2
//The "Case" that we evaluate must be 'related' or 'same' as the assigned Value.
//If the "Case" is not the same evaluation as the assigned value,it will go straight to "Default".

let device = 'laptop';
switch (device) {
    case 'Toshiba':
        console.log('Functional');
        console.log('Lasting');
        console.log('Windows OS');
    default:
        console.log('Electronics');
}
//The Answer is : Electronics
//Again, The "Case" is not relatable or same as the Assigned Value to "device" variable.
//So it will accept the "default" input.


let warrior = 'Shaka Zulu'; 'Black Panther';
switch (warrior) {
    case 'Shaka Zulu':
        console.log('Fearless');
        console.log('Unique');
        console.log('Strong');
        break;
    case 'Black Panther':
        console.log('Fighter');
        console.log('Leader');
        console.log('Willful');
        break;
    default:
        console.log('Shield and Axes');
}
//If we don't want that flow through style, we can actually use the "Break Statement".

/*The Answer Without "break" statement is : Fearless
                                            Unique
                                            Strong
                                            FighterFighter
                                            Leader
                                            Willful
////////////////////////////////////////////////////////////
  The Answer With "break" statement is :    Fearless
                                            Unique
                                            Strong
*/
let audio = 'Noise';
switch (audio) {
    case 'noise':
        console.log('Rowdy');
        console.log('Audible');
    default:
        console.log('Empty Sound');
}
//The Answer is the 'default' "Empty Sound".
//Why?? , because the value string "Noise" starts with an Uppercase letter "N".
//BUT, the "case" string "noise" starts with a lowercase letter "n"
//So there's no match between the 2 "n's".

//Solution: We must use a "Buit-in Method()" called "toLowerCase()"

let power = 'Wires';
switch (power.toLowerCase()) {
    case 'wires':
        console.log('Voltage');
        console.log('Appliance');
        console.log('Electricity');
        break;
    case 'plugs':
        console.log('twinplugs');
        console.log('usb');
        break;
    default:
        console.log('ShockWave');
}
/* The Answer is : Voltage
                   Appliance
                   Electricity
*/


//The "Ternary Operator" :
//>>>>This is useful if you wanna do an "Inline Evaluation" of an 'expression'
// And then return back a value, a "string", "number", "boolean" etc....
//probably a "string" or "number",pertains to a true or false, very small short concise "inline statements"

let a = 1, b = '1';
let result = (a == b) ? 'equal' : 'inequal;'
console.log(result);
//The 'Console' Answer is : equal
//If we added another "equal operator" within (a === b), the answer would be 'inequal',
//Because one is a 'string' and the other a 'number'. "Three Equal Operators" are Strict Equal Operators.
//It will not 'coerce' 

/*let shoeSize = 6, shoeSize = 5;
let outcome = (shoeSize == shoeSize) ? 'Same' : 'Not Same';
console.log(outcome);
//The 'Console' Answer is : ERROR, Identifier 'shoeSize' has already been declared
*/

let accounts = 2, taxBills = 7;
let outcomes = (accounts == taxBills) ? 'Yes' : 'No';
console.log(outcomes);
//The 'Console' Answer is : No.

let house = 1, flat = '1';
let accomodation = (house !== flat) ? 'Not True' : 'True';
console.log(accomodation);
//The Console Answer: Not True
//The "inequality operation" which is>>>> (!=)
//Adding another equal sign to the "Inequality Operator", makes it even stricter so it returns 'FALSE'
//left side is "true",  right side is 'false". ALWAYS REMEMBER.

/*It's "Not True", because it "True",that //"house" is not strictly equal to "flat"// 
because they're different 'DataTypes'.
*/


