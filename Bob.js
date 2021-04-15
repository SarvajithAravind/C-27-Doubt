class Bob{
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, radius,options );
        World.add(world, this.body);
}

      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x-50, pos.y-50);
        //rotate(angle);
        //ellipseMode(RADIUS);
        
        stroke("black");
        fill("red");
        ellipse(50,125, 50);
        //rect(0, 0, this.width, this.height);
        pop();
      }
    
}