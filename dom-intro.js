//

(function () {
    function clickHandler(message) {           // This is the top of the execution chain, the click event handler.
        console.log('Hello...' + message);
    }

    // Get a reference to myButton
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function () {
        clickHandler('hello from iffe')
    });

    

})();
