/**
 * Form builder class
 * 
 */

function FormBuilder (input) {
    
    function build() {
        input = textArea.value; //get the value from text area
        var json = JSON.parse(input); //parse the json input
        
        for(var i = 0; i < json.length; i++) {
            var generateForm = `<input type="${json[i].type}" name="${json[i].name}"></input>`
            //console.log(json[i].type)
            outputArea.innerHtml = generateForm;
        }
    }


    return {
        build: build
        
    }
}