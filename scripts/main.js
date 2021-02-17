const PIXI = require('pixi.js');
const Viewport = require('pixi-viewport').Viewport;
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
app.stage.addChild(viewport)

// activate plugins
viewport
    .drag()
    .pinch()
    .wheel()
    .decelerate()

// add a red box
const sprite = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE))
sprite.tint = 0xff0000
sprite.width = sprite.height = 100
sprite.position.set(100, 100)

/*
var canvas = document.getElementById('canvas'); 
var renderer = PIXI.autoDetectRenderer(100,200,canvas);
document.body.appendChild(renderer.view);
renderer.view.height = window.innerHeight - 53;
renderer.view.width = window.innerWidth;

renderer.view.style.position = 'absolute'; 
renderer.view.style.left = '50%'; 
renderer.view.style.top = '52.7%'; 
renderer.view.style.transform = 'translate3d( -50%, -50%, 0 )';

const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,

    interaction: renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
});

*/

/*

// add the viewport to the stage
app.stage.addChild(viewport)

// activate plugins
viewport
    .drag()
    .pinch()
    .wheel()
    .decelerate()

// add a red box
const sprite = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE))
sprite.tint = 0xff0000
sprite.width = sprite.height = 100
sprite.position.set(100, 100)
*/