/* A simple JS calculator 
 Youtube tutorial 

1. Listen and capture all the button events.
2. When an event occurs, depending on the button, I will do  +-x/
3. For any operation, I have to get values from the text boxes too.



 */

// Function to get values from text input
getValues = function (){

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    resultObject = {
        "number1": number1,
        "number2": number2
    }
    return resultObject;

}



//Plus operation - Used with Shortend code of getValues function
plusButton = document.getElementById("plusButton");
plusOperation = function(){

    numberValues = getValues();

    sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);

    result = document.getElementById("result");
    result.innerText = sum; 

    
}
plusButton.addEventListener("click", plusOperation );

// Minus operations

minusButton = document.getElementById("minusButton");

minusOperation = function (){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    difference = parseInt(number1.value) - parseInt(number2.value);
    result.innerText = difference;



}

minusButton.addEventListener("click", minusOperation );


// Multiplication Operations

mulButton = document.getElementById("mulButton");

mulOperation = function (){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    multiple = parseInt(number1.value) * parseInt(number2.value);
    result.innerText = multiple;

}


mulButton.addEventListener("click", mulOperation)


// Division Operation

divButton = document.getElementById("divButton");

divOperation = function (){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    division = parseInt(number1.value) / parseInt(number2.value);
    result.innerText = division;

}


divButton.addEventListener("click", divOperation);

