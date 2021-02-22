const PIXI = require('pixi.js'); // the graphic engine
const Viewport = require('pixi-viewport').Viewport; // the dynamic background
const app = new PIXI.Application({
    height : window.innerHeight - 53,
    width : window.innerWidth,
    antialias : true,
    transparent : true,
    resolution : 1
});

document.body.appendChild(app.view)
app.view.style.position = 'absolute';
app.view.style.left = '50%';
app.view.style.top = '52.0%';
app.view.style.transform = 'translate3d( -50%, -50%, 0 )';

const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 10000,
    worldHeight: 10000,

    interaction: app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
});

// add the viewport to the stage
app.stage.addChild(viewport);

// activate plugins
viewport
    .drag()
    .pinch()
    .wheel()
    .decelerate();



document.getElementById('add_input').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        add_a_child();
        document.getElementById("add_form").reset();
        event.preventDefault();
    }
});

document.getElementById('search_input').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        console.log(document.getElementById("search_input").value);
        document.getElementById("search_form").reset();
        event.preventDefault();
    }
});
document.getElementById('delete_input').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        console.log(document.getElementById("delete_input").value);
        document.getElementById("delete_form").reset();
        event.preventDefault();
    }
});

/*
The above is the template part. If you want to add new data structure, you can add your code below. Since PIXI requires importing locally ( it can't be
imported from www.unpkg.com currently ), you need to browsify this file. That is why adding some additional files for clarification and readability may make
some trouble later. Please use this template.

Format:

{name of the data structure}.js
browsify scripts/{name of the data structure}.js > bundle_{name of the data structure}.js

then use the template html file and import this js file there.

*/