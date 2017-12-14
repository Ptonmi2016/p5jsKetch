var ellipA = 0;
var green = 0;
var speed = 2;

function setup() {
	createCanvas(800,600);
}

function draw() {
	background(0,green,255);
	noStroke();
	fill(255,green,0);
	ellipse(400,ellipA,200,200);
	if (ellipA > 800 || ellipA < -200){
		speed = speed * -1;
		green = map(ellipA,0,400,0,255);
	}
	green = map(ellipA,0,400,255,0);
	ellipA = ellipA + speed;		
}
