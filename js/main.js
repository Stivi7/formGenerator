
var textArea;
var submitButton = document.querySelector("#submit");
var outputArea;
var jsonInput;
//var chkd = false;

/**
 * Build form
 */
submitButton.addEventListener('click', FormBuilder(jsonInput, textArea, outputArea).build)

