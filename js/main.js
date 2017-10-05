
var textArea = document.querySelector('#json-input');
var outputArea = document.querySelector('#formFields');
var submitButton = document.querySelector("#submit");

var jsonInput;
//var chkd = false;

/**
 * Build form
 */
submitButton.addEventListener('click', FormBuilder(jsonInput, textArea, outputArea).build)

