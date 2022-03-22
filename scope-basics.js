// "Basics Of Scope" :
// Variables Of Scope:

let a = 'first';

function scopeTest() {
    console.log(a);
}
scopeTest();
//The Answer is : first

/* Yes, We can in fact view the value of a "variable" that was declared outside of the scope of the
   "function".
   
   Variables are like people, citizenship, availability, location.
   They are like scopes too look at but not within inside the parameter of a given area.
*/

/*let plane = 'Fly';                 //Declared first variable outside the function scope.

function highAltitude() {
    console.log(plane);

    let wings = 'Feather';          //Declared second Variable inside of a function scope.
}
highAltitude();                     //Called highAltitude and console.log(wings) to see if i can view the 
console.log(wings);                 // "second variable" inside the function scope.
*/

//The Answer is : ERROR, wings is not defined.
//So No, you can't use it and the application blows.

let level = 'High';

function sizeA() {
    console.log(level);

    if (level != '') {
        console.log(level);
    }
}
sizeA();
//The Console Answer is : High High

/* If we were to create a "Variable" 'third' and then try to reference it
   outside of the "code block" in which it was defined, What Do You Thing will Happen???
*/

let weather = 'degrees';

/*function temperature() {
    console.log(weather);

    if (weather != '');
    console.log(weather);

    let cold = 'freeze';  //The 'variable' cold was defined inside of this code block.
}

console.log(cold);
*/


//The 'Console' Answer is : cold is not defined.
/*And once we executed that code block and got to the end of it, then the "cold" was removed from
  the computers memory, it becomes no longer available or applicable to us.
 */


let memory = 'neurons';      // declared a variable called memory, assigned a value 'neurons', outside the scope

function neuralNetworks() {   //created a function called neuralNetworks()
    console.log(memory);      //this console.log will be the "value" 'neurons'
    memory = 'brainActivity';   //But then we changed the value to "brainActivity"

    if (memory != '') {        //Evaluating if memory is not equal to 'empty strings'
        console.log(memory);      //Where the second change is logged in to display 

        let brainwaves = 'communication'; // called a new variable within the scope of this function.

    }
}

neuralNetworks();
console.log(memory);

//The 'Console' Answer is: neurons brainActivity brainActivity.
//HIGHLIGHT OF The Story: When you declare a variable, you have to understand under which scope you have defined it.
//If defined in the outermost 'scope', it will have a lifespan, citizenship and available in all "interscopes"
//BUT, If defined in an "innermost scope", it will not be available to "outerscopes".

let book = 'pages';

function pageLines() {
    console.log(book);
    book = 'script';

    let pen = 'write';
    if (pen != '') {
        console.log(book);
        console.log('inside if: ' + pen);
        let words = 'underline';
    }
}

pageLines();
console.log(book);
////////////////////////////////////////////////////////////////

let ring = 'bell';

function soundEffect() {
    console.log(ring);
    ring = 'ding';
    console.log(ring);

    if (ring != '') {
        console.log(ring);
        console.log('Brass Instrument : ' + ring);
        let eardrums = 'voice';
    }
}

soundEffect();
console.log(ring);
//The Console Answer is : bell ding ding Brass Instrument : ding  ding

//By now you should hold a better grasp on "scope of variables".
// Defining outside of acode block versus defining them inside of a code block.
//And then try to reference them outside of a "function".