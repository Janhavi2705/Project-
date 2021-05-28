class Paper{
      constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':1,
            'density':1.0,  
             
      }
      this.radius = radius; 
      this.x = x;
      this.y = y;
     // this.width = 20;
     //this.height = 20;
     this.body = Matter.Bodies.circle(this.x,this.y,this.radius/3,options);
     this.paperImage = loadImage("paper.png");
     World.add(world, this.body);
}
display(){
  image(this.paperImage,0,0,this.radius,this.radius);
      var pos =this.body.position;
      translate(pos.x, pos.y); 
      var angle = this.body.angle;
      push();
      rotate(angle);
      rectMode(CENTER);
      fill("purple");
      ellipse(this.x,this.y,this.radius,this.radius);
      pop();
    }
  };