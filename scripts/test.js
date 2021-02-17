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
function draw_circle(ctx, x, y, r, stroke = '#FF0000', width = 3) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }
    ctx.beginPath();
    ctx.arc(x, y, r, 2 * Math.PI, false);
    ctx.stroke();
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

//draw(); 
