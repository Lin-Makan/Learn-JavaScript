// "Module Pattern and Revealing Module Pattern"
//We'll start off with an "IIFE" and "Immediately Invoked Function Expression".
//To create a function and then that function will return an "object".
/*We'll see how "Variables" and "functions" can be made essentially "Private".
  so that we can hide some implementations from the ability for just any code to call them.
  
  This is often called "Encapsulation" in Software Development terms.
  So these will be unavailable outside of the public "Variables" and the Public "Functions, that we return".
*/
// We'll create an IIFE Immediately Invoked Function Expression
/*(function () {

})();
*/

var counter = (function () {        //return an "object" that will get set to "Counter"
    //private stuff                 //Not accessible outside of the calling the 'counter'.Spmething to access it.
    let count = 0;                  //We can have a 'Private Variable' like "count" equals "zero"

    function print(message) {          //Let's create a "private function", it'll print a message.
        console.log(message + '----' + count); // we'll say whatever the message is, it'll have "4 dashes" to stylize it
    }

    //return an object        //Now to return an "object" that will get set to "counter".
    return {
        value: count,          //This part here, what if i want to return back the "current value of'count'".

        increment: function () {   //Let's create an "increment property" that returns a "function". 
            count += 1;             // And inside that "function" we say "count plus equal to one"
            print('Add On Top: '); //And In the end we can call the "print method()" then say "Add On Top"
        },
                                        
        reset: function () {      //Now let's create a "property" called "reset" and return a "function xpression"
            print('Previous Reset: '); //Inside this "function xpression" print method() "Previous Reset".
            count = 0;          //Then we'll call the "count", set it to equal zero because that's the point of reset
            print('Last Reset: '); // And after reset, it should always "display zero"
        }
    }

})();
console.log(counter.count);
console.log(counter.value);
counter.increment();
counter.increment();
counter.increment();
counter.reset();

/* The Console Answer is : undefined
 *                         0
 *                         Add On Top:  ----1
 *                         Add On Top:  ----2
 *                         Add On Top:  ----3
 *                         Previous Reset: ----3
 *                         Last Reset:    ----0
 **/ 
///////////////////////////////////////////////////////////////////////////////////////

var charge = (function () {                
    //private stuff
    let power = 0;

    function print(messages) {
        console.log(message + '-----' + power);
    }
    //return an object
    return {
        value: power,

        increment: function () {
            power += 1;
            print('After Increment: ');
        },

        reset: function () {
            print('Before reset: ');
            power = 0;
            print('After reset: ');
        }
    }
})();
console.log(charge.value);
console.log(charge.power);

//The Console Answer is : 0,
                  //     undefined

//////////////////////////////////////////////////////////////////



var state = (function () {

    let building = 0;

    function print(message) {
        console.log(message + '>>>>>>' + building);
    }

    return {
        value: building,

        increment: function () {
            building += 2;
            print('House: ');
        },

        reset: function () {
            print('Before We Reset: ');
            building = 0;
            print('After We Reset: ');
        }
    }

})();
console.log(state.building);
console.log(state.value);            //We accidently created a "Closure" here.This something we should'nt be doing.
state.increment();
state.increment();
state.increment();
state.increment();
state.increment();
state.reset();

//The 'Console' Answer is : 
/*                          undefined
 *                          0
 *                          House>>>>>2 
 *                          House>>>>>4
 *                          House>>>>>6
 *                          House>>>>>8
 *                          House>>>>>10
 *                          Before We Reset: >>>>>>10
 *                          After We Reset: >>>>>>0
 */

/*So you see, After the "increment" the "Value" is House'one, House'two', House'three'.
    * BUT,then, when we attempt to get the "Value" of "console.log(state.value)", from this
      "property" >>>>  100--  ""value: building,"" we get '0'.
    * WHY??? WHAT Happened???? We accidently created a "closure", 
    * We're going to need a different way to implement this
      basic functionality "console.log(state.value)".
    * So we can't use this technique "value: building". 
    
      So we will need to take a different tactic.
      We will implement "2 more functions"
 */

/////////////////////////////////////////////////////////////////////////////////////

var machine = (function () {     //

    //private stuff
    let robot = 0;

    function print(message) {
        console.log(message + '-----' + robot);
    }

    //return an object
    return {

        get: function () { return robot; },  //we'll create a 'get function", it'll return robot, all in one line.

        set: function (value) { robot = value; },  /*Then create a "set function", we're going to "set robot equal" to  
                                                     some 'value' that's going to be 'passed in'.
                                             So we'll set an input parameter called ''value'' "(set: function (value))" */    
        increment: function () {    
            robot += 1;
            print('Electric Wires');
        },

        reset: function () {
            print('Restart Machine: ');
            robot = 0;
            print('System Reboot: ');
        }
    }
})();

machine.set(7);            //Then we'll set the "set function" createdn to the value of seven.
console.log(machine.get());
machine.reset();
machine.increment();
machine.increment();
machine.increment();

//The "Console" Answer is: 
                          /* 
                             7
                             Restart Machine: -----7                              
                             System Reboot: -----0
                             Electric Wires: -----1
                             Electric Wires:  -----2
                             Electric Wires: ------3
                          */

/* This technique of returning an object from an IIFE will first of all allow us to keep some "implementation
    details" private like we could'nt get to "count" and we did try but we would'nt be able to get it to PRINT
    because only certain things are being "returned" and mostly in terms of "functions", that give us "access" to
    the "private functionality" and a little bit more.

    But in addition to that we've reduced, think of all these "variables" that we've reduced out of the global scope!!
    There's no "count" 'variable' now, there's no "print", there's no "get", "set", "increment" or "reset".
    There are ALL Part of this ONE VARIABLE called "counter" which is from line 16 "var counter = (function () {})
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var cars = (function () {

    let engine = 4;

    function print(vroom) {
        console.log(vroom + '<><><><><>' + engine);
    }

    return {

        get: function () { return engine; },

        set: function (SumValue) { engine = SumValue; },

        decrement: function () {
            engine -= 1;
            print('Depraciating: ');
        },

        reset: function () {
            print('LowerPrices: ');
            engine = 4;
            print('Leaked Pipes: ');
        }


    }
})();
cars.set(6);
console.log(cars.get());
cars.reset();
cars.decrement();
cars.decrement();
cars.decrement();

//The 'Console' Answer is :
                            /* 6
                               LowerPrices: <><><><><>6
                               Leaked Pipes: <><><><>4
                               Depreciating: <><><>3
                               Deprecating: <><><>2
                               Deprecating: <><><>1
                            */ 
//We managed to write our code a bit more defensively therefore protecting ourselves.
//This technique is so popular that it's called "Module Pattern".


 
                            
