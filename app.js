// Element adding and removing with DOM
// First adding

// click dile add hbe so function dako 

function adding(){
    
    let headForAdd = document.createElement(`h1`);
    let addText = document.createTextNode(` i am from js. so`);
    headForAdd.appendChild(addText);

    let clickButton = document.getElementById('btn1');
    clickButton.appendChild(addText);
}

let span = document.getElementById('btn1');
span.style.cursor = 'pointer' ;

// click dile remove hbe so function dako

let span2 = document.getElementById('btn2');
span2.style.cursor = 'pointer' ;

function removing(){

    let removeText = document.getElementById(`removing`);
    let clickspan = document.getElementById('removeMe');
    removeText.removeChild(clickspan)
    
}
