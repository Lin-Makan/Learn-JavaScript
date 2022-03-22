// JavaScript source code

(function () {    // The whole function itself that contains function xpressions, objects,variables etc...

    function incrementCounter() {               //the first "function expression" to "increment" the value by one.
        counter = counter + 1;
    }

    function updateUI() {                    //Created another "function" called "updateUI()".

        const colors = [                          // Object, Datatype, properties of the "function".
            { name: 'Alizarin', value: '#e74c3c' },
            { name: 'Belize', value: '#2980b9' },
            { name: 'Emerald', value: '#2ecc71' },
            { name: 'Midnight Blue', value: '#2c3e50' },
            { name: 'Sun Flower', value: '#f1c40f' },
            { name: 'Pumpkin', value: '#d35400' },
        ];

        let result = document.getElementById('resultDiv'); //Assigning the HTML element "resultDiv" to the variable 'result'

        // Relative to the font-size of the element
        // (2em means 2 times the size of the current font)
        result.innerText = counter;             //Next we'll set the "innerTxt" property of the "result object".Setting innertex to DOM node.
        if (counter > 0) {                         
            result.style.fontSize = counter + 'em';
        }

        //Divide first into second, return the remainder
        //Access that element of the colors array to grab
        //the color object:
        let remainder = counter % colors.length;   //taking current value of "counter and use the modulo for the remainder 
        result.style.color = colors[remainder].value;    //Here we'll stylize the result with color values.

        //Clear out all existing child color div's
        let colorDiv = document.getElementById('colorDiv');
        colorDiv.innerHTML = '';                    //Emptying out everything of the colorDiv. 

        // Re-add the child color div's
        for (i = 0; i < colors.length; i++) {          // We gonna loop through each of the colors.

            //Creating a node dynamically with the intent of 
            // adding it to the colorDiv.
            var node = document.createElement('div');
            var textnode = document.createTextNode(colors[i].name);
            node.appendChild(textnode);
            node.style.backgroundColor = colors[i].value;

            // Alternatively,   I could have made this into a CSS
            // Style and added that to the node.classList...
            node.style.width = '150px';
            node.style.height = '50px';
            node.style.cssFloat = 'left';
            node.style.paddingLeft = '10px';
            node.style.paddingTop = '10px';

            if (i == remainder) {
                node.style.height = '45px';

                // Example of adding a class to the node's
                // ClassList
                node.classList.add('selected');
            }

            colorDiv.appendChild(node);
        }
    }

    (function handleClick() {
        incrementCounter();
        updateUI();
    });

    let counter = 0;

    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function () {
        incrementCounter();
        updateUI();
    });

    updateUI();
    

})();
