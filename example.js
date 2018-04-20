

var myArray = [
    {
        super: "oui",
        innovant: 'oui1',
        xand : 'oui'
    },
    {
        super: "oui",
        innovant: 'oui2',
        xand : 'oui'
    },
    {
        super: "oui",
        innovant: 'oui3',
        xand : 'oui'
    },
    {
        super: "oui",
        innovant: 'oui4',
        xand : 'oui'
    },
    {
        super: "oui",
        innovant: 'oui5',
        xand : 'oui'
    },
    {
        super: "oui",
        innovant: 'oui6',
        xand : 'oui'
    }
]
/* 
    import the functions as Array.prototypes and work with your array of objects
*/
Array.prototype.NestedArrayObjectEditor = require('./NestedArrayObjectEditor.js').NestedArrayObjectEditor
Array.prototype.rebuild = require('./NestedArrayObjectEditor.js').rebuild

myArray.NestedArrayObjectEditor('innovant').then( data => {
    /* 
        'data' is an array of values from the selected key
    */
    var temp = []
    data.forEach( value => {
        /* 
            the processed value comes here
        */
        var lastword = value + " adding the same data to my keys"
        /* 
            fill our temporary array before reinjecting the value to our keys
        */
        temp.push(lastword)
    })
    myArray.rebuild(temp, 'innovant')
    /* 
        now the array has been rebuilt
    */
})
.then( () => {
    /* 
        Since the 'rebuild' function doesn't return a value, the resulting value is 'undefined'    
        to see the changes just look at your array now
    */
    console.log(myArray)
})
.catch( err => {
    console.log(err)
})
