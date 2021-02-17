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
app.view.style.top = '52.7%';
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


let circle = new PIXI.Graphics();
circle.lineStyle(2, 0xff0000);
circle.beginFill(0xff0000);
//circle.z = -1;
circle.position.set(window.innerWidth / 2, 100)
circle.drawCircle(0,0,50);
circle.endFill();
viewport.addChild(circle);

let text = new PIXI.Text("1");
text.anchor.set(0.5);
//text.x = window.innerWidth / 2 ;
//text.y = 100 ;
//viewport.addChild(text);
circle.addChild(text);