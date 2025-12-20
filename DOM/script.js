// ----------------------------Window Object---------------------------------------------
// The window object represents an open window in a browser.
// It is browser's object (not js's) & is automatically created by browser.
// It is a global object with lots of properties and methods.
// eg. window.clg(), window.alert(), window.prompt()


// -------------------------------------DOM--------------------------------------------------
/*
    Document Object Model --> HTML ka code JS mai aake objects mai convert ho jata hai which is called document that is present in window.
    Whole HTML code is accessed through documents
    When a web page is loaded, the browser creates a DOM of the page.
    DOM is tree like structure that stores html code

    console.log ---> print 
    console.dir ---> document ---> prints properties and methods
    eg :- console.dir(window.document.body)
*/


// --------------------------------DOM Manipulation----------------------------------
/* 
    1. Selecting with id --> document.getElementById('myId')
    2. Selecting with class --> document.getElementsByClassName('myClass')
    3. Selecting with tag --> document.getElementsByTagName('p')
    4. Query Selector --> document.querySelector('#myId / .myclass / mytag') --> returns first element
                          document.querySelectorAll('#myId / .myclass/ mytag') --> returns a NodeList
*/

// Properties of DOM
/* 
    tagName --> returns tag for element nodes
    innerText --> returns the text content of the element and all its children
    innerHTML --> returns the plain text or html contents in the element
    textContent --> returns textual content even for hidden elements
*/

// first child printing
let firstchild = document.body.firstChild
console.log(firstchild)

// childrens printing
let allchildren = document.querySelector('div').children
console.dir(allchildren)

