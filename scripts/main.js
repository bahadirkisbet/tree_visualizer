const PIXI = require('pixi.js'); // the graphic engine
const Viewport = require('pixi-viewport').Viewport; // the dynamic background
const anime = require('animejs');

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

// CONSTANTS ARE HERE

COLOR_CONSTANTS = {
    node: 0xff0000,
    text: 0xffffff,
    edge: 'black'
};

SIZE_CONSTANTS = {
    radius: 30
};



function add_a_child() {
    var data = document.getElementById("add_input").value;
    var prev_node;
    var curr_node;

    if(arr.length === 0) {
        curr_node = draw_circle([window.innerWidth / 2, 300], 0xff0000, text = data);
        arr.push(curr_node);
    }
    else {
        
            prev_node = arr[arr.length - 1];
            curr_node = draw_circle([prev_node.x, prev_node.y + 100], 0xff0000, text = data);
            arr.push(curr_node);
            draw_line(prev_node.x, prev_node.y, prev_node.x, prev_node.y + 100, 30);
    }
    

}

// TODO - depthe göre boyut
// TODO - root baz alınarak yeniden boyutlama

class BinarySearchTreeNode {
    constructor(_parent, _val, _left = null, _right = null) {
        this.parent = _parent;
        this.left = _left; 
        this.right = _right;  // its type is a line or an arrow
        this.val = _val;
        this.circle = null;
        this.edge = null;
    }

    draw_node(pos, color = COLOR_CONSTANTS.node) {
        let circle = new PIXI.Graphics();
        this.circle = circle;
        circle.lineStyle(2, color);
        circle.beginFill(color);
        circle.position.set(...pos);
        circle.drawCircle(0, 0, SIZE_CONSTANTS.radius);
        circle.endFill();
        viewport.addChild(circle);
        let style = new PIXI.TextStyle({ fill: [COLOR_CONSTANTS.text] });
        let txt = new PIXI.Text(text, style);
        txt.anchor.set(0.5);
        circle.addChild(txt);
        return circle;

    }

    draw_edge() {
        let line = new PIXI.Graphics();
        this.edge = line;
        line.lineStyle(2, COLOR_CONSTANTS.edge).beginFill();
        var points = calc_line_coor(x1, y1, x2, y2, r);
        line.position.set(points[0], points[1]);
        line.lineTo(points[2] - points[0], points[3] - points[1]);
        viewport.addChild(line);
    }

    calc_line_coor(x1, y1, x2, y2, radius) {
        var hypotenuse = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);

        var bottom = (x2 - x1);
        var side = (y2 - y1);

        var cosinus = bottom / hypotenuse;
        var sinus = side / hypotenuse;


        var result = [
            x1 + radius * cosinus,
            y1 + radius * sinus,
            x2 - radius * cosinus,
            y2 - radius * sinus
        ];

        return result;

    }
    
    set_pos(pos) {
        this.circle.position.set(pos);
    }

    set_edge_post(pos) {
        this.edge.lineTo(pos[0]-this.edge.x,pos[1]-this.edge.y);
    }   

};

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
};