// ARRAYS
//Used to store a list or group of objects/elements/variables in one block
//An array is a variable that can create a list of "variables"

let a = [4, 8, 15, 16, 23, 42];
let b = ['kuhle', 'Lindo', 'john', 'thabi'];

//__________________________________________
//To "access" the "elements" of the "array".

//console.log(a[0]);
//console.log(a[1]);
//console.log(a);
//The answer is 4, 8 and [4,8,15,16,23,42]
//Why? we used the index that starts with the number "0"
//________________________________________________________
//TO "Change" the or "set the value" of the elements
a[0] = 7;
console.log(a);
//The answer is [7,8,15,16,23,42]
//The placeholder index changedx the value

//______________________________________________
//To find out the datatypes of these arrays
console.log(typeof a);
//Its an Object

//An array could include elements of different "DataTypes".
//_______________________________________________
let c = [4, 'alex', true];
console.log(c);
console.log(typeof c);
//The answer is [4,alex,true] which is a "number" "string" "boolean".
//_____________________________________________________________________
 //To access an element with an index that doesnt exists
console.log(b[4]);
//The answer is undefined 
//_____________________________________________________________________

//To determine the number of elements in an array, We'll use a "property" called "length"
console.log(a.length);
//The answer is "6"
//__________________________________________________________________________________________

//To create a new element in the Array
a[10] = 77;
console.log(a);
console.log(a.length);
//The answer is [4,8,15,16,23,42, <4 empty items>, 77]       .The empty items is called "sparse array"
// "11" elements
//_______________________________________________________________________________________________________

//A better way to create a new element in the Array, use the "Push Method" of the built-in functions of the array.
a.push(77);
console.log(a);
console.log(a.length);
//The Answer is>>>>[7,8,15,16,23,42,<4 empty items>, 77, 77]
//_________________________________________________________________________________________________________________

//To remove that value, use the "Pop Method" 
//____________________________________________
a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.Length);
//The answer is>>>>>>>>[ 7,8,15,16,23,42,<4 empty items> ]
//_________________________________________________________










