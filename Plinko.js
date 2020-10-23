class Plinko{
    constructor(x,y,radius){
        this.body= Bodies.circle(x,y,radius);
        this.radius=radius;
        }
       display(){
           ellipseMode(RADIUS);
           ellipse(this.body.position.x,this.position.y,10,10);
       } 
}