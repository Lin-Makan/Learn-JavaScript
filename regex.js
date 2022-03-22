// "Regular Expressions"

/* Regular expressions allow you to create a pattern to determine if a 
   given string matches that pattern that you created.
   Regular Expressions often referred to as "Regex".

It is used for something like making sure that a "string" matches the pattern of a "phone number", a "zipcode"
something thats common,especially with data.
*/
/*
let pattern = /xyz/;
console.log(pattern);
console.log(typeof pattern);  */

// The Console Answer is : 
/*
 /xyz/
 object
*/
//The "datatype" or "type" of the "pattern" is "Object"

let pattern = /xyz/;

let value = 'This is xyz a test. ';

/*console.log(pattern.test()); */ /*>>> the test()method returns a boolean value that indicates
                                         whether or not a pattern exists*/
console.log(pattern.test(value));

//The console Answer is : true
//Yes it's true that we do find our "pattern "xyz" inside of the "string "value".

/* Next thing, is to actually to 'replace' that "pattern" that we found in that
   "string" with some other "string".
   
   console.log(value.replace()).
   console.log(value.replace(pattern, 'just'));
*/

console.log(value.replace(pattern, 'just'));

// The Console Answer is : 
                           /* true
                              This is just a test.
                             */
/* So i removed "xyz" and i replaced it with the word "just" by using the "replace" method() of the string,
   passing in the "pattern" and the word.
 */

//Theres also "match() method" 
console.log(value.match(pattern));
////////////////////////////////////////////////////////////////////////////////////////////////////

let tower = /squares/;

let building = 'We have many squares to build a house.  ';
console.log(building.replace(tower, 'bricks'));

//Console Answer is : We have many bricks to build a house.

let audio = /soundwaves/;

let earpiece = 'Tones are not the same as soundwaves';
console.log(earpiece.match(audio));

// Console Answer : 
                   /* [ 'soundwaves',
                    *    index: 26,
                    *    input: 'Tones are not the same as soundwaves',
                    *    groups: undefined
                    * ]
                    */
var match = earpiece.match(audio);
console.log(match.index);
//The console answer is : 26 
/* So here it just shows you how to get an individual part of it, so here i 
   can grab the index itself, and i could use that to do some sort of 
   "custom replacement logic", Not sure if its though.(I'm just speculating).
  */
////////////////////////////////////////////////////////////////////////////////////////////

//REGEX TEST :
const regex = /^\d{5}[-\s]?(?:\d{4})?$/gm;
const str = ` 12345
12345-6789
12345 1234
123451234
12345 1234
12345 1234
1234512341`;
let m;

while ((m == regex.exec(str) !== null)) {
    //This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    

    //The result can be found accessed through the 'm' variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex} : ${match}`);
    });
}





