// "Closures"
/* A closure allows you to associate some "Data" with a "Function" and then use the "Function"
   with that "Data" already kind of baked into it from that point on.

BASICALLY, taking a "Function" and I'm marrying it to some data through an "input parameter/Input Argument"
and then they live happily ever after in their own "variable" and from that point on, they  work together as
a team whenever i want to invoke that "function" with that data already pre-filled, i guess you could say
"Input Parameters" , i can call that new "variable".
 */
//Let's start with a function declaration and sayHello.

function sayHello(name) {
    return function () {
        console.log('Vuka ' + name);
    }
}

let Lindo = sayHello('Lindo');

Lindo();

let Konke = sayHello('Konke');
let Sipho = sayHello('Sipho');
let Thabi = sayHello('Thabi');
let Mbali = sayHello('Mbali');
Konke();
Sipho();
Thabi();
Mbali();

//Console Answer is : 
                      /* Vuka Lindo
                         Vuka Konke
                         Vuka Sipho
                         Vuka Thabi
                       */

//We modify the operation by relying on how scoping works.
//Each closure creates its own "Lexical Environment" which is know in "Scope".


