/* apps.js will be used for interactivity of the site */
'use strict'

const switcher = document.querySelector('.btn'); /* gets the reference to the theme changing button */
var num_rows = 1; 
var srcUrls = [];

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className); /* adds a message to the console in the developer tools */
});

function upload(event){
	var srcUrl = URL.createObjectURL(event.target.files[0]);

    
};

function addRow () {
    // create a new div element
    num_rows = num_rows + 1;
    const newDiv = document.createElement("div");
    newDiv.className = "row";
    newDiv.id = num_rows;
    
    const x = document.createElement("section");
    x.className = "section";
    x.id = "tier-name";
    x.contentEditable = "true";
    x.innerText = "tier"

    const y = document.createElement("section");
    y.className = "section";
    y.id = "buttons";
    y.innerText = "btns here"

    newDiv.appendChild(x);
    newDiv.appendChild(y);

    // add the newly created element and its content into the DOM
    document.getElementById("tierlist").appendChild(newDiv);
};

function deleteRow () {
    var row = document.getElementById(num_rows);
    row.remove();
    num_rows = num_rows - 1;
};