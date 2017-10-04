
const textArea = document.querySelector('#json-input');
const submitButton = document.querySelector("#submit");
const outputArea = document.querySelector('#formFields');
var jsonInput = '';
//var chkd = false;

/**
 * Build form
 */
submitButton.addEventListener('click', FormBuilder(jsonInput).build)

