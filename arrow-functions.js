// "Arrow Functions"

/*In JavaScript, you can define a "function" using a "Shorthand Syntax" called "Arrow Functions".
  
  "Arrow Functions" are just a "shorthand syntax" for creating a "real Function" and "Functions"
  are used everywhere in "JavaScript".
*/

//There are many different ways of using "Arrow Functions" in JavaScript.
//And there are many "syntax variations" to boot.
// let hi = ()       ....instead of using the keyword "function" ||let hi = function ()|| get rid of the keyword "function"
// let hi = () =>    ...BUT, the "()" remains, allows to define an "input parameter name".
// let hi = () => {}

let hi = () => { console.log('hello'); }

hi();
/////////////////////////////////////////////

// let yes = (agreed) =>   ...And inside of the open/close parentheses we can accept an input parameter.
// let yes = (agreed) =>      
// let yes = (agreed) => { console.log(`Of Course`) }
// let yes = (agreed) => { console.log(`Of Course ${ }`) }

let yes = (agreed) => { console.log(`Of Course${agreed}`) };
yes(' I Know!');

//Console Answer :
                  /* hello
                     Of Course I Know!
                   */

/////////////////////////////////////////////////////////////////////////////////
let Hello = (name) => { console.log(`hello${name}`) };
Hello(' there Lindo');

//Console Answer : hello there Lindo
///////////////////////////////////////////////////////////////////////////

let horizon = (atlantis) => {
    console.log(`atmosphere is : ${atlantis} `)
};
horizon('colder!');

//Console Answer : atmosphere is : colder!

/////////////////////////////////////////////////////////////////////
// The "Arrow Function" is also known as the => "Fat Arrow".
/* Now, up to this point, we've just been kind of creating what i call "void functions",
   these "void functions" don't return anything.

   BUT, what if we need to use the "return keyword".
   
   We'll create add equals, we'll allow this() to take 2 input parameters "a" & "b", "fat arrow" and 
   we'll use the "return" keyword, a plus b.
*/

let add = (a, b) => { return a + b };  //
console.log(add());
//Console Answer is : NaN  which stands for 'Not a Number'
// The add()method formula is this : 
                                    /* let add = (a:any, b:any) => any
                                       which is provided to us by intellisense */
let count = (x, y) => { return x + y };
console.log(count(6, 7));        //   this is where we assign the values of the input parameter "properties". 

// The Console Answer is : 13


///////////////////////////////////////////////////////////////////////////////////////////
let Audio = (sound, volume) => { return sound + volume };
console.log(Audio('Frequency', ' Tune'));

// Console Answer : Frequency Tune

//////////////////////////////////////////////////////////////////////////
// Lets try with an "Array".
/*
let names = ['king', 'john', 'lindo', 'kule',];
names.map((name) => { console.log() };
*/

let names = ['king', 'john', 'lindo', 'kule'];
names.map((individual) => { console.log(`Morning ${individual}!`) });

// Console Answer is: 
                      /* Morning king!
                         Morning john!
                         Morning lindo!
                         Morning kule!
                       */


///////////////////////////////////////////////////////////////////////////////////////////

let people = ['kk', 'jacq', 'leandro', 'lindo'];
let i = 0;
people.map((person) => {
    i++; console.log(`Wake Up ${person} ${i}!`);

});

//Console Answer is : 
                     /* Wake Up kk 1!
                        Wake Up jacq 2!
                        Wake Up leandro 3!
                        Wake Up lindo 4!
                      */

////////////////////////////////////////////////////////////////////////////////////////////////////////

let mankind = ['Man', 'Woman', 'Child', 'Elder', 'Teenager'];
var transformed = mankind.map((life) => { return `You're a : ${life}` }  //Instead of consoledotlog, we'll use the "return" keyword.
);                        // so i'm going to take every "life" in "mankind" and i'm going to return "You're a:" plus "life"
console.log(transformed);

// The Console Answer is :
/*
[
  "You're a : Man" ,
  "You're a : Woman",
  "You're a : Child",
  "You're a : Elder",
  "You're a : Teenager",
]
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////

let store = ['Pick n Pay', 'Game', 'Macro', 'ShopRite'];
var groceries = store.map((package) => {
    return `Purchased at : ${package}`
});
console.log(groceries);

//Console Answer is :
                     /* 'Purchased at : Pick n Pay',
                        'Purchased at : Game',
                        'Purchased at : Macro',
                        'Purchased at : ShopRite'
                      */

/* You can see that what get's "returned" here, because we're returning "multiple
   values" they get added to essentially an "Array" and now you can see on each 
   element of the "Array" is the "literal string" that we "construct" inside
   of this "Map Function" using an "Arrow Function" to do the 'Construction'.
 
 */

/* So, "Arrow Functions" are simple to create and they're just a short-hand version
   of "function expressions", they really are useful whenever you're working with
   "functions on arrays" like this "map method", that allows us to "map" each element
   of an "array" to one of our "arrow functions".

And then execute that "function" against each element of the "array'
  
 */


