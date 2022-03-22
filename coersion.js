// Type Coersion and Conversion

//let a = 7;  //----A literal "number"/integer.
//let b = '6';  //----A literal "string"/not number.
//let c = a + b;  //-----Adding the assigned values.
//console.log('Answer: ' + c);
//Answer is '76', should'nt it be '13'.
//Why and How?
//The 'a+b' is not treated as a numeric value by javascript.
//Its treating them both as 'string values',It's not adding "2 numbers" together.
//it's "coercing" a-from an "integer" into a "string" and then concatening them together. a___and___b.

//What happens here is to taking a "numeric value" of a and then 'coerce' it /'convince' it/ 'force' it into a 'string'.


//To perform an addition on two integers, take steps to force the string "6" to become a 'number'.
//To force that "conversion", we must use 'parseInt' or 'Parse'.
//We are parseing  the 'b' value into a number represented as an "integer".

let a = 7;
let b = '6';
b = parseInt(b, 10);
let c = a + b;
console.log('Answer ' + c);
//Answer is 13.

let d = parseInt('lindokuhle', 10);  //Trying to parse a 'string' lindokuhle into a number represented as an 'integer'
console.log(d);
//The answer is NaN /Not a Number.
//the value we parsed in is not a number(Integer, decimal, float).

let e = parseInt('Lindokuhle', 12);
let f = isNaN(e);
console.log(e);
console.log(f);

//Answer is : Answer 13
//            NaN
//            NaN
//            true


