/**
 * Form builder class
 * 
 */

function FormBuilder (input) {
    
    function build() {
        input = textArea.value; //get the value from text area
        var json = JSON.parse(input); //parse the json input
        json.forEach(obj => {
            var block = createBlock(obj);
            outputArea.appendChild(block);
        })        

    }


    function createElement(jsonCFG) {
        var el = document.createElement('input');
        el.setAttribute('class', 'form-control');
        el.setAttribute("type", jsonCFG.type);
        el.setAttribute("id", jsonCFG.id);
        el.setAttribute("name", jsonCFG.name);
        return el;
    }


     function createLabel(jsonCFG) {
         var label = document.createElement('label');
         label.setAttribute('for', jsonCFG.id);
         label.innerHTML = jsonCFG.label;
         return label;
    }

    function createBlock(jsonCFG) {
        var div = document.createElement('div');
        var label = createLabel(jsonCFG);
        var input = createElement(jsonCFG);
        div.setAttribute('class', 'form-group');
        div.appendChild(label);
        div.appendChild(input);
        return div;
    }

    
    return {
        build: build,
        createElement: createElement,
        createLabel: createLabel,
        createBlock: createBlock
    }
}