/*  Project 01_06_01

    Peronal Information Form Validation Code
      Author: Dominic Torricelli
      Date:   16 August 2018

    Filename: script.js
*/

"use strict";

//Global variables
var formValidity = true;
var errorInput = "rgb(229, 95, 65)";


function validateRequired() {
    var inputElement = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var fieldsetValidity = true;
    var elementCount = inputElement.length;
    var current;

    // look for invalid inputs
    try {

        for (var i = 0; i < elementCount; i++) {
            current = inputElement[i];
            if (current.value === "") {
                current.style.background = errorInput;
                fieldsetValidity = false;
            } else {
                current.style.background = "white";
            }
        }

        if (fieldsetValidity === false) {
            throw "please enter your information";
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }

    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}


    // function to validate form on submit button input
    function validateForm(submit) {
        // prevent default submit behavior
        if (submit.preventDefault) {
            submit.preventDefault();
        } else {
            submit.returnValue = false;
        }
        formValidity = true;
        validateRequired(); // Located on line 16

        if (formValidity === true) { // form is valid
            document.getElementById("errorText").innerHTML = "";
            document.getElementById("errorText").style.display = "";
            document.getElementsByTagName("form")[0].submit();
        } 
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
        window.addEventListener("load", createEventListeners, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", createEventListeners);
    }
