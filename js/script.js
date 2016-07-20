window.onload=setup;

var c, ctx;
var mv=[false,false,false,false]; //left=0, right=1, up=2, down=3
var circle;

function setup(){
	c=document.getElementById("canvas");
	ctx=c.getContext("2d");
	window.addEventListener("keydown",keyPressed);
	window.addEventListener("keyup",keyReleased);
    this.interval=setInterval(draw,1000/60);

    circle=new Circle(250,250,20);
}

function draw(){
	ctx.clearRect(0,0,c.width,c.height);

	circle.display();
	circle.move();
}

function keyPressed(event){
	logKey(true);
}

function keyReleased(event){
	logKey(false);
}

function logKey(pressed){
	console.log(event.which || event.keyCode);
	switch(event.which || event.keyCode){
		case 65: case 37: mv[0]=pressed; break; //A, left arrow
		case 68: case 39: mv[1]=pressed; break; //D, right arrow
		case 87: case 38: mv[2]=pressed; break; //W, up arrow
		case 83: case 40: mv[3]=pressed; break; //S, down arrow
	}
}

function Circle(x, y, r){
	this.x=x;
	this.y=y;
	this.r=r;
	this.s=1.5;

	this.display=function(){
		ctx.fillStyle="#ddd";
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
		ctx.fill();
	}

	this.move=function(){
		if(mv[0]){this.x-=this.s;}
		if(mv[1]){this.x+=this.s;}
		if(mv[2]){this.y-=this.s;}
		if(mv[3]){this.y+=this.s;}
	}
}