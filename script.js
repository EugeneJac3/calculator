/* A simple JS calculator 
 Youtube tutorial 

1. Listen and capture all the button events.
2. When an event occurs, depending on the button, I will do  +-x/
3. For any operation, I have to get values from the text boxes too.



 */


//Plus operation
plusButton = document.getElementById("plusButton");
plusOperation = function(){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    sum = parseInt(number1.value) + parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = sum; 

    
}
plusButton.addEventListener("click", plusOperation );