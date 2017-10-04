/**
 * Form builder class
 * 
 */

function FormBuilder (input) {
    
    function build() {
        clearForms();
        input = textArea.value; //get the value from text area
        
        try {
            var json = JSON.parse(input); //parse the json input
            json.forEach(obj => {
                var block = createBlock(obj);
                outputArea.appendChild(block);
            })        
    
        } catch(e) {
            alert("Invalid Json input: " + e.message);
        }
        
    }

    /**
     * create an element from json 
     */
    function createElement(jsonCFG) {
        var el = document.createElement('input');
        el.setAttribute('class', 'form-control');
        if (jsonCFG.class) el.setAttribute('class', el.getAttribute('class') + ' ' + jsonCFG.class)
        el.setAttribute("type", jsonCFG.type);
        el.setAttribute("id", jsonCFG.id);
        el.setAttribute("name", jsonCFG.name);
        
        if(jsonCFG.type == 'checkbox' && jsonCFG.checked) {
            el.setAttribute('checked', "true");
        } 
              
        //console.log(jsonCFG.checked);
    
        return el;
    }

    /** 
     * create a label  
     */
     function createLabel(jsonCFG) {
         var label = document.createElement('label');
         label.setAttribute('for', jsonCFG.id);
         label.innerHTML = jsonCFG.label;
         return label;
    }

    /**
     * create the block for the input
     */
    function createBlock(jsonCFG) {
        var div = document.createElement('div');
        var label = createLabel(jsonCFG);
        var input = createElement(jsonCFG);
        div.setAttribute('class', 'form-group');
        div.appendChild(label);
        div.appendChild(input);
    
        return div;
    }


    function clearForms() {
        // console.log('cleared')
        outputArea.innerHTML = ''; //clears the form from previous inputs
    }

    
    return {
        build: build,
        createElement: createElement,
        createLabel: createLabel,
        createBlock: createBlock,
        clearForms: clearForms
    }
}