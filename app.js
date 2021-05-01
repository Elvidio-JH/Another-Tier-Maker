/* apps.js will be used for interactivity of the site */
'use strict'

const switcher = document.querySelector('.btn'); /* gets the reference to the theme changing button */

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