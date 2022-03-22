// JavaScript Classes
// "JavaScript Classes"
/* Earlier we said that Javascript doesnt have classes, at least not in the Object Oriented Programming sense.
   Nor did it have "inheritance" in the 'inheritance' Object Oriented Programming.
   
   JavaSript now has "classes", or the notion of a "class"
 */

// declaration
/*
class Car {
    constructor(make, model, year) {

    }
}
*/
////////////////////////////////////////////////////////////////////////////////////////////|
// declaration                                                                              |
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }

    //Now that i have an Instance of my car class called "myCar" i can call "print".


    print() {
        console.log(`${this.make} ${this.model} ${this.year}`);

    }
};



let myCar = new Car('Ssangyong', 'Kyron', 2006);    // let "myCar" = >>>>> This is an Object instant/Instant of car. 
myCar.print();

// expression
/*
let car = class {

}\
*/

/* All right, so you can create "methods" on the "class".
   In fact, let me do it ouitside of the "constructor method".
   So here we will "print()" method.
 */

/*
print() {
    console.log(`${} ${} ${}`)  >>>> We will use a 'backtick' "String Interpolation Syntax".
}
*/

/* Now beyond these basics,you can "approxiamate inheritance", at least "inheritance" in these 
   classic "Object Oriented Programming" sense.
   I want to create "Class" "SportsCar" and i have to use the keyword "extends" Car.
*/


/*
class SportsCar extends Car {
       
}

//Lets create a "new instance" of "SportsCar".

let mySportsCar = new SportsCar('dodge', 'viper', 2011);
mySportsCar.print();
*/

///>>>> We are now extending the "Car Class".

class SportsCar extends Car {
    revEngine() {
        console.log('Vrrroom goes the ' + this.model);
    }
}

//Lets create a "new instance" of "SportsCar".

let mySportsCar = new SportsCar('dodge', 'viper', 2011);

//Because by extending "SportsCar" from "Car", i still get the "Constuctor Method" defined on "Car".
//Therefore, i still get access to "make", "model" and "year".

mySportsCar.print();
mySportsCar.revEngine();

//Console Answer is : 
                     /* dodge viper 2011
                        Vrrroom goes the viper
                      */

/* We get this "print out". So we're extending, we're borrowing the entire definition of our "class"
   and we are getting the "constructor method" defined in 'Car' 

   We're getting thhe "print() method" defined in "Car".

*BUT, I can extend and push boundaries of the "Car's" definition by adding "properties" 
 and "methods" like "revEngine()"
 
 */

//IF I do something like >>>> myCar.revEngine(); I will get a "TypeError": myCar revEngine() is not a 'function'.

/* Well, RevEngine() is a function, its just not defined on the "Car Class", it is defined
   on the "Car classes inherited child" called "SportsCar".
   So you can't access "revEngine" from the "car class".
   */

//ANOTHER EXAMPLE:
///////////////////////////////////////////////////////////////////////////////////////////////////////

class Transaction {
    constructor(AccountNumber, PaymentMethod, Bank) {
        this.AccountNumber = AccountNumber;
        this.PaymentMethod = PaymentMethod;
        this.Bank = Bank;
    }

    print() {
        console.log(`${this.AccountNumber} ${this.PaymentMethod} ${this.Bank}`);
    }

  
};

let myTransaction = new Transaction(569087657, 'Credit Card', 'Sovereign Bank');
myTransaction.print();

class MonetarySystem extends Transaction {
    paymentProcessing() {

        console.log('Transaction Successful From : ' + this.Bank);
    }

}
let myMonetarySystem = new MonetarySystem(8901209768, 'EFT', 'TradeBank');
myMonetarySystem.print();
myMonetarySystem.paymentProcessing();

//The Console Answer is : 
                           /* 569087657 Credit Card Sovereign Bank
                              8901209768 EFT Tradebank
                              Transaction Successful From : TradeBank
                            */

//The "Prototype here is "Transaction".
////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Honestly, there's more to it than that, there a some advanced scenarios but that should be enough to
   show you what the "Class" keyword and the "extends" keyword can do and how it "operates" and you can
   see the rough equivalence between what we did here and what we've done previously.
 */

