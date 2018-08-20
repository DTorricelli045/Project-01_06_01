/*  Project 01_06_01

    Peronal Information Form Validation Code
      Author: Dominic Torricelli
      Date:   16 August 2018

    Filename: script.js
*/

"use strict";

//Global variables
var formValidity = true;


function validateRequired(fieldsetId) {
    var inputElements = document.querySelectorAll("#contactinfo input");
    var fieldsetValidity = true;
    var currentElement;

    // look for invalid inputs
    try {

        for (var i = 0; i < inputElements.length; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
    } catch (err) {

    }



    // function to validate form on submit button input
    function validateForm(ret) {
        // prevent default submit behavior
        if (ret.preventDefault) {
            ret.preventDefault();
        } else {
            ret.returnValue = false;
        }
        formValidity = true;

        validateRequired(); // Located on line 16

        if (formValidity === true) { // form is valid
            document.getElementById("errorText").innerHTML = "";
            document.getElementById("errorText").style.display = "none";
            document.getElementsByTagName("form")[0].submit();
        } else {
            document.getElementById("errorText").innerHTML = "Please fix the required fields.";
            document.getElementById("errorText").style.display = "block";
            scroll(0, 0);
        }
    }

    //Function to run code on page load
    function runCode() {
        createEventListeners();
    }

    //Function to Run various Event listeners
    function createEventListeners() {

        //Variable to call on the submit button
        var form = document.getElementsByTagName("form")[0];
        if (form.addEventListener) {
            form.addEventListener("submit", validateForm, false);
        } else if (form.attachEvent) {
            form.attachEvent("onsubmit", validateForm);
        }
    }


    //Page load event handlers
    if (window.addEventListener) {
        window.addEventListener("load", runCode, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", runCode);
    }
}