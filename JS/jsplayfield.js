'use strict'
function increaseNumber(e) {
    const numElement = e.target;
    const num = parseInt(numElement.innerText);
    const newNum = num + 1;
    numElement.innerText = newNum;
    console.log(num);
}

let origTitle = true;
function changeTitleText(e) {
    e.preventDefault();
    const header = document.querySelector('#header').firstElementChild;
    console.log(header)
    if (origTitle) {
        header.innerText = 'King Dragon will take over the world!';
        origTitle = false;
    }
    else {
        header.innerText = '124san\'s website';
        origTitle = true;
    }
}

function addElement(e) {
    e.preventDefault();
    // get text
    const text = document.querySelector('#newText').value;
    let newText = 'Blank';
    if (text) {
        newText = text;
    }
    // get element type
    const eleType = document.querySelector('#selectElement').value;
    //create new element
    const newElement = document.createElement(eleType);
    newElement.className = 'added';
    newElement.innerText = newText;
    //append to html
    const collection = document.querySelector('#elementCollection');
    collection.appendChild(newElement);
}

const changeTitleButton = document.querySelector('#changeTitleButton');
changeTitleButton.addEventListener('click', changeTitleText);

const form = document.querySelector('#addElementForm');
// form.addEventListener('submit', addElement);

