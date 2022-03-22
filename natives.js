// "Built-In Natives"
/* We've talked about a number of types': we looked at "string" "number" "boolean"
   "object" "undefined" and "function" as its own type.
We'll look at ohters later such as "null" and "symbol".
*/
/*
In Regex, we did something like "value" which is a "string" set to this "literal
string". The "Literal string" being "This is xyz a test".

 *And we did "value.replace", HOW is it that this "value" has this "dot replace() method"???
 *We never addressed that.
 *How is it that something like a "string" can have a "method" after all we said
  that "METHODS" are really just "FUNCTIONS" defined inside of an "object"???
 *Would that make a "string" an "object"???.  NO.
  
  BUT, a "string" is a "string", how can that be? well actually both of those are true statements.
*/

/*The Fact of the matter is the "Datatypes"/"Types" we've been looking at so far like
  especially "string" and "boolean" and "number" are known as
  "PRIMITIVE TYPES".
  These "Primitive Types" that have corresponding "built-ins" or "Natives" that  are "Functions"
  that return objects with a bunch of methods() that are added to them by JavaScript.
*/

/* So behind the scenes, JavaScript Compiler will "coerce" your "Primitive" in this case
   "Primitive String" into an "Object" that's returned from a "native string function"
 */
/////////////////////////////////////////////////////////////////////////////////

let myString = new String('Hello');

//Created own variable >>> let "myString" =
// Here's our "Function", that "Built-in-Function" >>>  = new "String"('Hello')
console.log(myString);

//Console Answer is : [String: 'Hello']

//We did'nt get a "Literal String" but instead we got an "Object" that has a "string property" and a value set to 'Hello'.
//Kind of works almost like a normal string.

// The "new" keyword creates a 'Constructor' call to this "Function" >>> "String".

/*So in order to not get the result to return only the "string", we must 
  actually call a method on this "native" that's nreturned from the "string function".
  to convert it into a "Primitive String" for the proper display inside of console dot log.
  */
console.log(myString.toString());
//Console Answer is : Hello
console.log(typeof myString);
//Console Answer is : Object
/////////////////////////////////////////////////////////////////////////

let goodQuality = new String('Comfort');
console.log(goodQuality);
console.log(typeof goodQuality);
console.log(goodQuality.toString());

//Console Answer is : 
                     /* [String: 'Comfort']
                        object
                        Comfort
                      */
/*What is actually going on here is that these "built-in-native" types provide
  extra "functionality" like this "toString()method".
   And like this "replace method".>>> console.log(value.replace(pattern, 'just'));

They provide this extra functionality to their corresponding "Primitive Types".
This is the list of those native built-in functions:
                                                    String()
                                                    Number()
                                                    Boolean()
                                                    Object()
                                                    Function()
                                                    Symbol()

/* So it includes kind of corresponding to the Primitive String lowercase 's"string , theres "number", "boolean"
   "object" , "function" and a "symbol".
   And then there are "built-in natives" that do not have "Primitive" "Versions".
   The "Primitive" versions as you know of "array" is object and the same with "regular expressions":
   Array()
   RegExp()
   BUT it does provide this "native-built in" with extra functionality for our "Arrays", so the same
   thing happens it's just not directly back to the "Primitive", it's to an 'object" but still works
   anytime we work with Arrays.
*/

/* 
  There's some other "built-in-natives" that provide foundational "data types"/"Types"
  maybe for important features but essentilly are just objects whose "()methods" implement
  a lot of "Logic" for their features: things like 
  Date()
  Error()
  Things like "Date Function" and "Error Function".
  RIGHT NOW WE ARE FOCUSSING ON THE Relationship between "Primitives" and "Built-Ins".
 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////

let myPrimitive = 'THE NATIVE ENVIRONMENT';      //>>>So here, we're creating a "literal string".
myPrimitive = myPrimitive.toLowerCase();  //And on this "literal string"(myPrimitive).I'm going to call this method "toLowercase()"
console.log(myPrimitive);
console.log(typeof myPrimitive);

//Console Answer is :
                     /* the native environment
                        string
                     */
/* WHAT we did here is to take "string", turn it into an "Object"
   so that we can call the "toLowerCase()" method on it.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////

let myNumber = new Number(8);
console.log(typeof myNumber);

//Console Answer is : object
/////////////////////////////////////////////////////

let myLaptop = 'THE BRIGHT LIGHT SHINES';
myLaptop = myLaptop.toLowerCase();
console.log(myLaptop);
console.log(typeof myLaptop);   

//Console Answer is : 
                      /* the bright light shines
                         string
                       */
let myCount = new Number(5);
console.log(typeof myCount);
let myShop = myCount.valueOf();
console.log(typeof myShop);

//Console Answer is : 
                     /* object
                        number
                      */
let myHouse = 'living out my life at home';
myHouse = myHouse.toUpperCase(); 
console.log(myHouse);

// Console Answer is : LIVING OUT MY LIFE AT HOME

                       

