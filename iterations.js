// "Iteration Statements"

/* "Iterations" allow us to 'Loop-Through' a body of code, a block of code
for a number of times until a "condition" is  met.
 
There's a number of "Iteration Statements", we'll look at. 
*/ 
//We'll even look at them in relationship to "Arrays".
//We'll CREATE  our "For Loop()" and there's 3 parts inside the Opening and Closing Parentheses in "for loop()".
// We can do this>>>>>>>>>>>   for (let i = 0) , But let us shorthand this.
//  One for "Variable and Assigning" Two for " Condition Evaluation", Three for "Iteration of the Value".
/*for (i = 0; i < 10; i++) {
    console.log(i);
}
/*
//The "Console" Answer is 0 1 2 3 4 5 6 7 8 9
//We get 10 values printed , then our Application Exits.
//The 3 parts are seperated by semi-colons.
//Keep Running this Loop until this condition is true || i < 10 ||.
//As long as "i" is less than "10", it will keep looping until the condition is 'False'.
//Then Exit our program.

//NEXT EXAMPLE:

/*let a = [4, 8, 15, 16, 23, 42];
for (i = 0; i < a.length; i++) {
    console.log(a[i]);
    
}
/*
//does not run at all, we must use the length operator. and the console must show an iteration of that value.

/*let e = [3, 6, 12, 16, 27, 38];
for (b = 1; b < e.length; b++) {
    console.log(e[b]);
    
}
*/

/*Answer is : 0
              1
              2
              3
              4
              5
              6
              7
              8
              9
              4
              8
              15
              16
              23
              42
              6
              12
              16
              27
              38
*/
// A Real Mix Up of values from 2 seperate variables.
//Using a condition statement inside the for loop prevents an "Infinite Loop" from happening.
//This Is The BASIC STRUCTURE of Using an Array in for Loop
/*for (let apple = j; apple < array.length; apple++) {
    const element = array[apple];
}
*/



let people = [12, 15, 19, 21, 23, 32 ];
for (let h = 3; h < people.length; h++) {
    const k = people[h];
    console.log(k);

}
/* The Answer is : 21
                   23
                   32
 */
//WHY?? because, the h which is value 3 is less than three and used the index count and incremented.
//The index number of "3" here is "21".

let houses = [11, 22, 33, 44, 55, 66, 77, 88, 99];
for (let t = 0; t < houses.length; t++) {
    const j = houses[t];
    console.log(j);
}
/* The Console Answer is : 11, 22, 33, 44, 55 ,66 , 77, 88, 99
 * this is because the value of 't' is "0" and it starts right at the first index number
*/
// Now The "WHILE LOOP" : While statement

let x = 1;
while (x < 10) {
    console.log(x++);
}
//The Console Answer is : 1, 2, 3 ,4, 5, 6, 7, 8, 9
//WHY?? Because the value of "x" is "1" which will start with the very first index which is 1 while it loops through
// until the condition is false.
//WHAT is The Difference between FOR Loop & WHILE Statement???
/* The "For Loop" has alot of Infrastructure that has three parts we have to build
   And uses a series of "Indexes" that represent a number of iterations moving through code block.
   The "While Statement", we control the number of iterations thus, "x++" 

You can build Busines Logic however you like.
*/

for (i = 0; i < 10; i++) {
    let x = 1;
    while (x < 10) {
        console.log(x++);
        if (x == 7) {
            break;
        }
    }
}
/*The Console Answer is : 1
                          2
                          3
                          4
                          5
                          6
*/
//The index starts at "1" going through "6" because we gave a condition
// that says should the incremetal value reach 7 then "break" the application off.
//One statement after the "if" statement.
//The Code is Readable.










