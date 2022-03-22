// "Error Handling With Try Catch"

/*
function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('if the previous line of code throws an exception you\'ll never see this.'    )
}
beforeTryCatch();      */

//Console Answer is : 
                      /* 
                         Cannot read properties of undefined (reading 'b')
                         at beforeTryCatch (C:\Source\handling)
                      */

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function afterTryCatch() {
    try {
        let object = undefine;
        console.log(object.b);
        console.log('if the previous line of code throws an exception you\'ll never see this.');
    } catch (error) {
        console.log('I caught an exception: ' + error.message);
    } finally {
        console.log('This will happen no matter what.');
    }

    console.log('My application is still running!');
}
afterTryCatch();

//Console Answer is : 
                      /* I caught an exception: undefine is not defined
                       * This will happen no matter what
                       * My application is still running!
                      */
////////////////////////////////////////////////////////////////////////////////////////////

function performCalculation(twentynine) {
    if (!twentynine.hasOwnProperty('a')) {
        throw new Error('Object missing property');
    }
    // continue with calculation with / obj.b
    return 6;
}

function performHigherLevelOperation() {
    let obj = { };
    let value = 0;

    //Now lets do a try catch

    try {
        value = performCalculation(obj);
        //now i'm going to 'catch' it.
    } catch (error) {
        console.log(error.message);
    }

    if (value == 0) {
        // contigency
        //retry logic
    }
}
performHigherLevelOperation();

// Console Answer is : Object missing property

/////////////////////////////////////////////////////////////////////////////

function logicError(emergency) {
    if (!emergency.hasOwnProperty('warning')) {
        throw new error('watchout ');


        
        return 8;
    }
}

    function alertOnHigh() {
        let territory = { };
        let sum = 3;

        try {
            sum = logicError(territory);

        } catch (error) {
            console.log(error.message);
        }

        if (sum == 3) {
            

        }

    }

alertOnHigh();

// Console Answer is : error is not defined
//////////////////////////////////////////////////////////////////////////////////////////////////

function systemX(volume) {
    if (!volume.hasOwnProperty('Be Careful')) {
        throw new error('volume high');

        return 4;
    }

}

function missionLevel() {
    let frequency = { };
    let note = 8;

    try {
        note = systemX(frequency);
    } catch (error) {
        console.log(error.message);
    }

    if (note == 8) {
        console.log('Ignore');
    }
}
missionLevel();

// Console Answer is : 
                       /* error is not defined
                          Ignore
                        */

/* This is a good start to help you understand that you do have options when you think 
   about how to safeguard your applications from completely falling against potential exceptions
   that could shut down your code completely.
*/
