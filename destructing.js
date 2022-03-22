// "Destructing"
/* It is a technique in JavaScript for "unpacking values" from "Arrays" into 
   individual Variables or into other "Array Elements" of a different "Array".
   
   You can also use it to "unpack properties" from "Objects" again into other
   "distinct Variables" or a different "Objects". We'll use the term "unpack".
 */
/////////////////////////////////////////////////////////////////////////////////////

let a, b, c, d, e;

let names = ['King', 'Mandla', 'Lindokuhle', 'Sane', 'John'];

// Start off with just "destructing" this "names Array" into a "set of variables".
// [] = names;
[a, b, c, e, d] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//Console Answer is : 
                     /*King
                       Mandla
                       Lindokuhle
                       John
                       Sane
                      */

//We start them off in sequence, [a, b, c,]
//We switched e & d so that "d" will represent "Sane" and "e" represents "John".
// So "e" has taken the place of "Sane"
// So "d" has taken the place of "John".

//And using this style syntax, I've destructered it down to 'individual variables'.

let one, two, three, four, five, six;

let Indivdual = ['Lindo', 'Loki', 'Opal', 'Akil', 'Tsepo', 'Mbali'];

[one, two, ...others] = Indivdual; //we have one, two and the rest just put them into a new "Array" called "others".

console.log(one);
console.log(two);
console.log(others);

//Console Answer is : 
                     /* Lindo
                        Loki
                        [ 'Opal' , 'Akil', 'Tsepo', 'Mbali' ]
                      */


//We will now destruct objects.

/* 
   let year, model;
   let car = {
    make: 'Ssangyong ',
    model: 'Musso',
    year: 2001,
    value: 15000
}

*/

/*In order to destruct this  "let car", what i'll do is remove this, and say 
  and say hey, i want to take the "year" and the "model" and 
 
 */
let year, model;
({ year, model } = {
    make: 'Ssangyong ',
    model: 'Musso',
    year: 2001,
    value: 15000
});

console.log(year);
console.log(model);

// The Console Answer is :
                            /* 2001
                               Musso
                             */


