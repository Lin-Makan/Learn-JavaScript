// "Objects and the Prototype Chain".
/* JavaScript has "objects", and we've seen howto create "Literal Objects"
 * We've seen how we can "Construct" an "Object" using a "Constructor" function and the "new" keyword", previously.
 * 
 * In some of the most popular program languages you create an "object" using a pattern called a "class" or 
   "construct" called a "class",
 * In other words, you create a "class" named 'car', and then you create "individual instances" of the
   "Car class" as "individual seperate objects."
 
 In JavaScript, "Objects" are the "Focus"
 In C-Sharp/C#, Java, C++, "classes"  are the focus.

So JavaScript kind of support "classes", also kind of does'nt kind of support "classes".
  WHAT About "Inheritance"???

Well JavaScript does support "inheritance" but not really the kind of "inheritance" from 
the traditional 'object oriented programming' sense.

** So In "JavaScript" you have something different called, "PROTOTYPE CHAIN".
 */

/* Here, I'm going demonstrate a new technique that allows you to "Construct" a "new object"
   based on an "existing Object" in a moment.

*When you do that, when you create a "new object" based on an "old object"
 something special happens i JavaScript.
  
*There is a permanent link that's created between those, the "new object" always know
 who it "inherited" all those "properties" from.
*The "new object" knows the link between it and the "Prototype" that came before it.
  
 *In other words, the "Original Object" serves as a "Prototype" for the "New Object",
  And the "New Object" is essentially "chained" to that "Prototype" from that point on.

 */

/* In Languages like "C-Sharp", "Java" , and "C++", those traditional Object-Oriented-Programming
   (OOP) languages, you create a "Class Hierarchy" where "One Class" , 'Inherits' from "another class"
 * So whenever you create an "Instance" of the "Child Class", theres really nothing that's linking
   that "instance" of the "Child Class" back to the "Parent-Class" definition.
   Again the focus is not on the relationship between "individual objects" that link to each other,
   BUT, more on the of a "Parent-Child" relationship in traditional "Object-Oriented-Programming".

-Again, the relationship between "Classes" is the focus of OOP Languages.
-Whereas  in JavaScript its the relationship between "Objects" and how they're "chained together".

Some people use the term "JavaScript Prototypal Inheritance" but try to shy away from the term
"inheritance".

*This is simply "Objects" LINKING To other "Objects". 
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let originalCar = {    // originalCar is the "Original Object".
    make: 'Ssangyong',
    model: 'Kyron',
    year: 2006
};

let newCar = Object.create(originalCar);   // We created a 'new object' called "newCar"
console.log(newCar.make);    //We then called the "new object" called "newCar" and called the "make property"

//BUT, at this point i have "2 Objects": I have the "originalCar" & the "newCar".
/*And i could at this point, with "newCar" change the "values" of the "existing properties" that i have on "newCar",
  i could add new "Properties" to "newCar" or new methods to the "new car" or i could delete the existing 
  properties from "newCar".
*/

// REMEMBER, there's a relationship between "OriginalCar" and "newCar"
//Theres a link between the "new object" and its "prototype", its predecessor, "originalCar".


console.log(Object.getPrototypeOf(newCar));

// Console Answer is : { make: 'Ssangyong', model: 'Kyron', year: 2006 }
//Basically it's pointing to this "originalCar" the 'prototype'. the 'originalObject'
let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

//Console Answer is :
                     /* Ssangyong
                        { make: 'Ssangyong', model: 'Kyron, year: 2006 }
                        Ssangyong
                      */
//There's no way to prove that because they both have the same "values" right now.
//What if were to create a new "property" on "OriginalCar", in other words "new property" on the "original object" ?? 

originalCar.doors = 4;   //  We're adding a door property and setting its value to 4.
console.log(newCar.doors);
/* You can see that the "newCar" get's this "doors" "property", and it seems to be "copying" that "property",
   value" over but thats not true, its just a link between "new object" and "original object".
 */
// To get the bottom of this :
console.log(originalCar.hasOwnProperty('doors'));   // its "true", "originalCar" has its "own property" called "doors"

                                           /* Ssangyong
                                              { make: 'Ssangyong', model: 'Kyron, year: 2006 }
                                              Ssangyong
                                              4
                                              true
                                            */
console.log(newCar.hasOwnProperty('doors'));
// Console Answer is : false. 
console.log(newCar.hasOwnProperty('make'));
// Console Answer is : false.

//So after we called "newCar" it had none of it's own "properties"
newCar.make = 'Audi';
console.log(newCar.make);
//Console Answer is : Audi
console.log(newCar.hasOwnProperty('make'));
//Console Answer is : true
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let diningRoom = {
    tables: 'CleanWood',
    chairs: 'rosewood',
    lights:'Chandeleir',
    cupboard: 'Classical'
}

let tableRoom = Object.create(diningRoom);
console.log(tableRoom.lights);
//Console Answer is : Chandeleir

console.log(Object.getPrototypeOf(tableRoom));

let myWood = Object.getPrototypeOf(tableRoom);
console.log(myWood.chairs);

diningRoom.roof = 1;
console.log(tableRoom.roof);

console.log(tableRoom.hasOwnProperty('lights'));   //..this returns 'false' because we didnt get object getPrototype
console.log(myWood.hasOwnProperty('cupboard'));  //..this return 'true' because we directly got the 'myWood' object from the original

//The Console Answer is : 
                          /*  Chandeleir
                              {
                               tables: 'CleanWood',
                               chairs: 'rosewood',
                               lights: 'Chandeleir',
                               cupboard: 'Classical'
                              }
                              rosewood
                              1
                              false
                              true
                            */  

///////////////////////////////////////////////////////////////////////////////////////////////

//That's how ProtoType chain works in JavaScript.
//Adding on top of what already exists, we could call that "Syntactic Sugar" in JavaScript.



