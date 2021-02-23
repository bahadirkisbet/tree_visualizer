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

/* Binary Search Tree */

function calc_line_coor(x1,y1,x2,y2,radius) {
    const hypotenuse = Math.sqrt( (y2-y1)**2 + (x2-x1)**2 );
    const bottom = (x2-x1);
    const side = (y2-y1);
    
    const cosinus = bottom / hypotenuse;
    const sinus = side / hypotenuse;

    var result = []

    result.push(x1 + radius*cosinus);
    result.push(y1 + radius*sinus);

    result.push(x2 - radius*cosinus);
    result.push(y2 - radius*sinus);

    return result;
    
}

function draw_line(x1, y1, x2, y2, r) {
    let line = new PIXI.Graphics();
    line.lineStyle(2, 'black');
    line.beginFill();
    var points = calc_line_coor(x1,y1,x2,y2,r);
    line.position.set(points[0],points[1]);
    line.lineTo(points[2],points[3]);
    viewport.addChild(line);
}


var first = draw_circle([window.innerWidth / 2, 300], 0xff0000, text = "1");
function draw_circle(position, color = 0xff0000, text) {
    let circle = new PIXI.Graphics();
    circle.lineStyle(2, color);
    circle.beginFill(color);
    circle.position.set(...position);
    circle.drawCircle(0, 0, 30);
    circle.endFill();
    viewport.addChild(circle);
    let style = new PIXI.TextStyle({ fill: ["0xffffff"] })
    let txt = new PIXI.Text(text, style);
    txt.anchor.set(0.5);
    circle.addChild(txt);
    return circle
}
var arr = []
arr.push(first);
function add_a_child() {
    var data = document.getElementById("add_input").value;
    var prev_node = arr[arr.length - 1];
    var curr_node = draw_circle([prev_node.x, prev_node.y + 100], 0xff0000, text = data);
    arr.push(curr_node);
    draw_line(prev_node.x, prev_node.y, prev_node.x, prev_node.y + 100);
    if (data === "10") curr_node.destroy();
}

