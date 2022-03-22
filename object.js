// "Object Literals".
//Objects let us keep information contained in a box,
//And That Info are known as properties.
//An Object contains a series of properties and their values.

//Lets create an Object of a car along with its descriptions.

let car = {
    make: 'Ssangyong',
    model: 'Kyron',
    year: 2006,
    getPrice: function () {            //Function expression:, essentially returning a value of 40000
        //Perform some calculation
        return 40000;
    },
    printDescription: function () {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();     //Since this is a "function" i'm going to use the method invocation operator.
console.log(car.year);
console.log(car['getPrice']);
//The 'Console' Answer is : Ssangyon Kyron  2006  [Function: getPrice]

/*The Object we built on screen, we're dealing with a realvlive tangible product/products.
 * You're also going to work with things that represents more abstract concepts that are
   specific to "web client" or "web server development" 
   **In This Simple Example, we created an "Object" using whats called "Object Literal Syntax"
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var anotherCar = {};              //Created an object, named "anotherCar", assigned to it are the 'empty curly braces'{}
anotherCar.whatever = 'The Makan';   //Called the Object "anotherCar" and created a property of it named"whatever" 
console.log(anotherCar.whatever);       //And assigned with the value "The Makan" 
                                   //We then call the console to display that.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var power = {};
power.strength = 'V12';
console.log(power.strength);

//The 'Console' Answer is The Makan V12
//You see how you can "chain" things "together" whether they be "functions" or "properties" 

var temperature = {               //we created an object called "temperature".
    myProperty: { m: 'hello' }     // We created a property called "myTemperature"
};       
console.log(temperature.myProperty.m);    //We logged in the "Object">>>"Property">>>"Property with asigned value".

//The 'Console' Answer is hello

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let bathroom = {
    shower: { p: 'water' }
};
console.log(bathroom.shower.p);
//The 'Console' Answer is water.

////////////////////////////////////////////////////////////////////////////////////////////////////
//See how we can chain things together.
//Solving the global namespace or putting our Variables at the global level of our Application which we're trying to avoid.

//ANOTHER Example Of Creating Properties:
//I can create an "Object" with a "Properties" 

var cargo = {
    transport: [
        { a: 'boat' },
        { b: 'ship' },
        { c: 'truck' },
        { d: 'kombi' },

    ]
};
console.log(cargo.transport);

//The 'Console' Answer is::
//[ { a: 'boat' }, { b: 'ship'}, { c: 'truck' }, { d: 'kombi' } ]

//This gets complicated as an "Object Graph".
//////////////////////////////////////////////////////////////////////////////////////


//EXPAND THOUGHT PROCESS:
let groceryStore = [
    { fruit: 'Pineapple', farm: 'orchard Vineyards', Weigh: 'Kilograms' },
    { Snack: 'Chocolate Bar', factory: 'CoCo Make', Quantity: 600 },
    { Milk: 'Dairy', farm: 'barn family', factory: 'process place', WeightSize: '1-5Litres' },
];
console.log(groceryStore);
//The 'Console' Answer is : All The Above up here.
////////////////////////////////////////////////////////////////////////////////////////////////

let carShop = [
    { year: 2006, make: 'Ssangyong', model: 'Kyron' },
    { year: 2013, make: 'Mercedes-Benz', model: 'Unknown' },
    { year: 1996, make: 'Toyota', model: 'Camry' },
];
console.log(carShop);

/////////////////////////////////////////////////////////////////////////////

//A System to keep track of all our customers and employees.
let contacts = {
    customers: [
        { firstName: 'Lindokuhle', lastName: 'Msane', phoneNumbers: ['(071) 890-4567'] },
        { firstName: 'Howard', lastName: 'King', phoneNumbers: ['(082) 888-7892'] },
        { firstName: 'Onika', lastName: 'Khanyi', phoneNumbers: ['(084) 490-756'] },

    ],
    employees: [
        { firstName: 'Mona', lastName: 'Lisa', phoneNumbers: ['(076) 590-7658'] },
        { firstName: 'leonard', lastName: 'Xaki', phoneNumbers: ['(072) 897 567'] },
        { firstName: 'Nicole', lastName: 'Sanu', phoneNumbers: ['(072) 897 567'] },
        { firstName: 'Jafta', lastName: 'Xaki', phoneNumbers: ['(085) 013 997'] },
    ]
};

console.log(contacts);

 





