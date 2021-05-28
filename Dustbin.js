class Dustbin {
    constructor(x, y) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.x=x;
      this.y= y;
      this.width = 150;
      this.height = 200;
      this.body = Bodies.rectangle(this.x, this.y,this.width,this.height,options);
      this.dustImage=loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      image (this.dustImage,500,-this.height/2,this.width,this.height);
     // image(this.dustimage, 0,0,this.width, this.height/2)
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(this.x, this.y,this.width,this.height)
      pop();
    }
  };
  