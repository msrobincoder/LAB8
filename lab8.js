/*
    CMSY 172 - Lab 8 
    
    Author: Monique Robinson	
    Date: November 2, 2016
    
    Determine if a number was input by the user in the web form
    and display a message to the web page stating whether a valid 
    number was entered.
    
    Required JS & DOM functions, methods, and properties:
      - getElementById() method   (DOM)
      - Number function           (JS)
      - String trim method        (JS)
      - isNaN() function          (JS)
      - innerHTML property        (DOM)

    Required programmer defined functions for processing:
      - getValue() form event handler function - manages remaining function calls
      - validInput() - validate input
        -> takes one parameter: the value to verify
      - outputMessage() - Display valid/invalid input message
        -> takes one parameter: the message to display (valid or invalid)
*/


/* getValue() - Event handler function for web form.

   Determine if the user entered a number.

   - Retrieve the value entered in the document form.
   - Verify that one or more characters have been input.
   - If one or more characters have been input, attempt to 
     convert the string to a number.
        - If the string is successfully converted to a number 
            - display valid input message
          else
            - display invalid input message


*/


function getValue() {
  /* 
    Use this function to manage all processing including function calls 
    to the validInput function, and the outputMessage function.
  */
  
  //ask the user to input value.
      var x = document.getElementById("valueToCheck").value;
	   // console.log(x); // gets the value and prints it out on the log
      outputMessage(x);
  console.log("get value was called");
}

/* Check to make sure one or more characters was input.
   Return true or false to the calling function indicating valid input. */
function validInput(value) {
  
}

//Display a message to the document stating whether or not a valid number was input.
function outputMessage(displayMessage) {
  var testOutPutMessage = "This is the output.";
  document.getElementById("output").innerHTML = displayMessage;
}

//window.onload = outputMessage;