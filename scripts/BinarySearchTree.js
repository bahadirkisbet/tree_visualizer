class BinarySearchTreeNode {
    constructor(_parent, _val, _viewport , _pos = null, _left = null, _right = null) {
        this.parent = _parent;
        this.left = _left;
        this.right = _right;  // its type is a line or an arrow
        this.val = _val;
        this.circle = null;
        this.edge = null;
        this.viewport = _viewport;
        if(_pos !== null)
        {
            this.draw_node([300,300]);
        }

    }

    draw_node(pos, color = COLOR_CONSTANTS.node, text = this._val) {
        let circle = new PIXI.Graphics();
        this.circle = circle;
        circle.lineStyle(2, color);
        circle.beginFill(color);
        circle.position.set(...pos);
        circle.drawCircle(0, 0, SIZE_CONSTANTS.radius);
        circle.endFill();
        this.viewport.addChild(circle);
        let style = new PIXI.TextStyle({ fill: [COLOR_CONSTANTS.text] });
        console.log(text,text.toString());
        let txt = new PIXI.Text(text.toString(), style);
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
        this.viewport.addChild(line);
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
        this.edge.lineTo(pos[0] - this.edge.x, pos[1] - this.edge.y);
    }

}
