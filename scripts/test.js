
function drawLine(ctx, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }

    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}

function draw_rectangle(ctx, first_corner, second_corner, stroke = "black", width = 1) {
    var first_point = first_corner;
    var second_point = [first_corner[0], second_corner[1]];
    var third_point = second_corner;
    var fourth_point = [second_corner[0], first_corner[1]];
    drawLine(ctx, first_point, second_point, stroke, width);
    drawLine(ctx, fourth_point, third_point, stroke, width);
    drawLine(ctx, first_point, fourth_point, stroke, width);
    drawLine(ctx, second_point, third_point, stroke, width);

}
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
}
function draw() {
    const canvas = document.querySelector('#canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        draw_rectangle(ctx, [0, 0], [1200, 900]);
        draw_circle(ctx, 600, 50, 30);
        draw_rectangle(ctx, [570, 85], [580, 115], "red", 2);
        draw_rectangle(ctx, [580, 85], [620, 115], "red", 2);
        draw_rectangle(ctx, [620, 85], [630, 115], "red", 2);
    }
}
function mytest()
{
    console.log("hahaha");
}
//draw(); 
