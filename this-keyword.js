// "this Keyword".
// The "this" keyword in Javascript represents the way a given function is called 
//"The Way A Function Is Called", will determine what this represents.
//So you essentially "bind" "this" keyword to a given context based on how you call the "functions".
//You'll see how it gets referenced in your "object" or "function".

function first() {
    return this;
}

console.log(first() === global);
//The Console Answer is : true
//The "this" is equal to the "global namespace/Scope".
/* Yes; its true, the first() method which returns "this" is equal to the "global namespace/scope"
   Because the "this" and "first()method" is WITHIN the "global namespace/scope"

This I s Node's global object because thats where the first method was called.
 */

function second() {
    'use strict';
    return this;
}
console.log(second() === global);
console.log(second() === undefined);

//The Console ANSWER is: 
                          /*false
                             true 
                          */

///////////////////////////////////////////////////

let myObject = { value: 'My Object' };   //The value of 'My Object' is set to 'My Object' string

//Value is set on the global object
global.value = 'Global object';       //

function third() {        //Because we called "third" from the ''global namespace''
    return this.value;   //When we reference the "this" keyword it's referencing this "Global Variable" called 'value'.
}
console.log(third());   //Because we called "third" from the ''global namespace''.

//The 'Console' Answer is :
/* Global object */

/*>>>>So when we grab the "value" property it's grabbing the value property of
      the "global variable" thus printing out "Global Object".
*/

/*There are other ways to invoke the "third function" and we can control
  the 'binding' of "this" keyword like :
*/
console.log(third.call(myObject));
console.log(third.call());

//The Console Answer is :
                         /* Global object
                            My Object
                            Global object
                          */
let myLife = { lifespan: '100 Years' };

//lifespan is set to on the global object
global.lifespan = '99 Years';

function years() {
    return this.lifespan;
}
console.log(years.call(myLife)); //The "call() method" calls a method of an Object, substituting another object for the current object.
console.log(lifespan);
console.log(years.apply(myLife));
console.log(years.call(myLife, 'Healthy'));     //if you want to call on string Healthy, you must use the "name input parameter"
console.log(years.apply(myLife, ['Alive', 'WellBeing', 'Strong']));  //Even with the Array you must use the "name input parameter"

//If you want to use the naming of Healthy, Alive, WellBeing, Strong, input the function method with "name"

//The 'Console' Answer is : 
                            /* 100 Years
                               99 Years
                               100 Years 
                               100 Years
                               100 Years
                            */

///////////////////////////////////////////////////////////////////////
let Length = { Height: 'Tall' };

global.Height = 'Short';

function Measure(name) {
    return this.Height + name;
}
console.log(Measure());
console.log(Height);
console.log(Measure());
console.log(Measure.call(Length));
console.log(Measure.apply(Length, [' 10cm, 20cm, 30cm, 50cm, 60cm']));
console.log(Measure.call(Length, ' Millimeters, Kilometers, Distance'));
console.log(Measure.call(Length));

//The "Console" Answer is : 
                            /* Shortundefined
                             * Short
                             * Shortundefined
                             * Tallundefined
                             * Tall 10cm, 20cm, 30, 50cm, 60cm
                             * Tall Millimeters, Kilometers, Distance.
                             * Tallundefined 
                             */

////////////////////////////////////////////////////////////////////////////////
/* Both "call" and "apply" allow you to explicitly set what you want to represent "this"
   or how we want to refine "this" the difference is how the 'additional arguments" are "passed" in.
  
 */

//This is what "Binding" does.
//The "this" keyword depends on how a "function" is called.

var car = {
    make: 'Ssangyong',
    model: 'Kyron',
    year: 2006,
    getPrice: function () {
        //perform some calculation
        return 40000;
    },

    printDescription: function () {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();  /*This is the "call site", where it now the "object" itself that
                           and all its properties like "make" and "model" and "year" are
                           available to this "inner Function" only when i use the "this" keyword.
                           because "this" represents this context: make: "Ssangyong",
                                                                   model: "Kyron",
                                                                   year: 2006,
                                                                   getPrice: function() {
                           
                           because i'm calling "printDescription" using the "car object".
                          */

/* So to call the "function", i would use the "Object" reference that "Object" reference "car" gets bound
   to the "this" keyword. 
 */

//The  Console Answer is : Ssangyong Kyron

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'Lindokuhle',
    lastName: 'Msane',
    print: fifth
}

let customer2 = {
    firstName: 'Kuhlekonke',
    lastName: 'Makan',
    print: fifth
}

customer2.print();
customer1.print();

//The Console Answer is : Ssangyong Kyron

/* So this interesting and an elegant way of essentially "pass values" into a "function" without defining
   a bunch of "input parameters/Arguments" to the "function" itself.
 
 */
