class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX; 
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA= this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;  
        strokeWeight(4);
        line(pointA.x, pointA.y+55, pointB.x, pointB.y+20);
    }

    display1(bodyAPositionX, bodyAPositionY, bodyBPositionX , bodyBPositionY){
     
        strokeWeight(4);
        line(bodyAPositionX, bodyAPositionY+55, bodyBPositionX, bodyBPositionY);
    }
    
}