# jsforms

a simple JS Form Builder

## Description

Build a form dynamically by getting input properties from json input in the given format

```
[
    {
        "type": "Type of Input ex: text, email",
        "name": "Name attr",
        "id": "Id attr",
        "label": "Label attr",
        "defaultValue": "Initial value for input",
        "customAttrs": [
            {
                "name": "data-attr1",
                "value": "Attribute 1 value ..."
            }    
        ]
    }
]
```

## Example

```
[
    {
        type: 'text',
        name: 'name',
        id: 'name',
        label: 'Name',
        defaultValue: 'Put your name here',
        customAttrs: [
            {
                name: 'data-full-name',
                value: 'NdoniJS'
            }
        ]
    },
    {

        type: 'checkbox',
        name: 'Married',
        id: 'married',
        label: 'name',
        defaultValue: 'false',
        customAttrs: [
            {
                name: 'data-full-name',
                value: 'NdoniJS'
            }
        ]
    },
    {
        type: 'button',
        name: 'Submit',
        id: 'submit',
        defaultValue: 'Submit',
        customAttrs: [
            {
                name: 'data-submit-1',
                value: '1'
            }
        ]
    },
]
```

## Funcitonal Requirements

1. Bootstrap included (input classes, input-form classes)
2. Global form, On submit, print submitted values on output div
3. Reset form
4. Rebuild form (Reset back to original state)

## Non-Funcitonal Requirements !!!

1. Organize code, do not reuse a single line of code