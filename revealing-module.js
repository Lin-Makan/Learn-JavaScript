// "Revealing Module Pattern"

let counter = (function () {        //We have an IIFE that we've defined.

                                   /*Inside of that IIFE,We have private stuff, more private stuff.
                                    these are the "Implementations" of 'get' , 'set' , 'increment' and 'reset' */
    let count = 0;

    function print(message) {
        console.log(`${message} => ${count}`);
    }

    function getCount() { return count; }

    function setCount(value) { count = value; }

    function incrementCount() {
        count += 1;
        print('After increment: ');
    }

    function resetCount() {
        print('Before reset: ');
        count = 0;
        print('After reset: ');
    }

    /* "reveals" the public functions
     * clearer presentation 
     * however, you can (accidentlly) overwrite
       the property values :/
    */
                                   /*Here I'm revealing publicly accessible "functions" by including them
                                    as "Properties" in this "return" 'Object'.  */
              /* So i can call "counter dot get" and "counter dot set", exactly the way that i could before but behind the scenes.*/
    return {          //These are "Revealing module pattern", they reveal the public functions through these properties in the "return object"                       
        get: getCount,                           
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    };

})();
console.log(counter);
console.log(counter.get());
//The 'Console' Answer is :
/* {
    get: [Function: getCount],
    set: [Function: setCount],
    increment: [Function: incrementCount],
    reset: [Function: resetCount]
    }
    0
*/
//BUT, I've created these as "function declarations" with "names".
/* "function getCount()" , "function setCount()" , "function resetCount()" */
// "function declaration" and "name" which is setCount, getCount(), etc...

//The downside is that you can accidently overwrite these as just properties.
/*The "Revealing module pattern" brings together brings together a bunch of techniques
 * For the good of removing or reducing our impact on the "Global Namespace/Scope" 
 * by removing "Variable names" & "function names" from the "Global Scope".
 */

