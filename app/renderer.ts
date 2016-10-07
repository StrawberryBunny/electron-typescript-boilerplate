/// <reference path="../typings/index.d.ts" />

import electron = require('electron');

// A little test.
window.onkeydown = (event) => {
    event.preventDefault();
    console.log("You pressed: " + event.key);
};