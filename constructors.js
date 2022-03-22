// "Constructor Function Calls with The "New Keyword"

//Previously, we saw how to create an "object Literal" using this style of syntax:
/*
let car = {
    make: Ssangyong,
    model: Kyron,
    Year: 2006
};
*/
/* There's another technique for creating an "object" and that's through
   use of what are called "CONSTRUCTOR FUNCTIONS".
 */
/* Create a new "Function" and I'm going to name it "car"
   It'll have some "input parameters", one for each of the "Properties" that
   i want to initialize upon creation of the object that get's returned.
*/

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

/* And most importantly, whenever you're creating an "Object" using this "function",
   it requires the "new" keyword.
*/

let myCar = new Car('Ssangyong', 'Kyron', 2006);

console.log(myCar);

/* || Car { make: 'Ssangyong', model: 'Kyron', year: 2006 }   */

//So we get a "Car Object", that has the properties "make", "model", "year", populated.

//So What's realy going on here???
//Is that the "new" keyword creates an "empty object" calling the "function" in this case "Car".

//The "new" keyword creates an "empty object", calling in this case, calling the "function" which is "Car".
/* It will take that "empty object" as the "this",
   Remember the discussion about how the "this" keyword get's bound to the context from which it is called???
   well in that case, that "new object" gets kind of becomes the context for this "function call".
   
   And therefore, this "empty object" starts recieving nw "properties" on lines "20", "21" ,"22" with new 
   "values" set those new properties.
 */

function Television(Manufacture, ScreenType, Date, Size) {
    this.Manufacture = Manufacture;
    this.ScreenType = ScreenType;
    this.Date = Date;
    this.Size = Size;
}

let myTv = new Television('LG', 'Plasma', '2012', '22 Inch');
console.log(myTv);

//Console Answer is : 
                     /* Television {
                          Manufacture: 'LG',
                          ScreenType: 'Plasma',
                          Date: '2012',
                          Size: '22 Inch'
                        }
                     */

/*What get'sreturned from this whole thing with the "call" to this "function"
  is an "object" with "properties" 'Manufacture', 'ScreenType', 'Date', 'Size' already set.
 */

/* So it's important to remember that the "functions" themselves that we define
   in lines "19", "49" "ARE NOT CONSTRUCTORS"
   though coming from other program languages like JAVA OR C#, you might be inclined to think so.
 
   BUT, Rather in JavaScript its the "new" keyword in front of any normal function, any function that makes it
   a "CONSTRUCTOR CALL".
   
 */

function MyFunction() {
    console.log('I Am A Simple Function');
}

let myFunction = new MyFunction();
console.log(typeof myFunction);

//Console Answer is : 
                      /* I Am A Simple Function
                         object
                      */
// myFunction();  <<<<<<is no longer a "function" anymore.
//At this this point, it is an "object".
//It will become a "TypeError" error and not RUN anymore.

/* See what JavaScript is about?? "FUNCTIONS" first of all !!
   Secondly, how you call a "function" really changes the meaning of the "function"
    and what's it is intended to be used for.
    In some cases, it even changes the "functionality" thats defined inside of the "function".
 
 */