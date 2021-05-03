// These variables represent the coordinates
// or the sides of the diamond
let x1 = 10, x2 = 60, x3 = 110, x4  = x2,
    y1 = x2, y2 = x1, y3 = y1, y4 = x3;

// These variables represent the canvas size
let canvasX = 600, canvasY = 400;

// This variable holds a boolean value if an element should move left or right
let moveLeft = false;

// This function is where we setup the dimension of our canvas
function setup() {
  createCanvas(canvasX,canvasY);
}

// This function is where we put the elements we want to be drawn in the canvas
function draw() {
	//Sets background color to yellow
	background(225, 255, 0);
	
	//Calls the diamond element
	callDiamond();
	
	//Calls the text element
	callMyNameText();
}

// This functions holds the Diamond element and its properties
function callDiamond()
{
	//Sets the fill color of the diamond
	fill(x1);
	
	//Disables the outline color of the diamond
	noStroke();
	
	//Draws a diamond shape element
	quad(x1,y1,x2,y2,x3,y3,x4,y4);
	
	//This block will make the diamond to move right
	if (moveLeft == false){
		x1++;
		x2++;
		x3++;
		x4=x2;
	}
	
	//This block will make the diamond to move left
	if (moveLeft == true){
		x1--;
		x2--;
		x3--;
		x4=x2;
	}
	
	//This block checks if the first x-coordinate of the diamond
	//is greater than the width of the canvas. The moveLeft variable
	//is set to true if condition is met
	if (x1 > canvasX){
		moveLeft = true;
	}
	
	//This block sets the moveLeft variable to false
	//if the first x-coordinate of the diamond is less than zero
	if (x3 < 0){
		moveLeft = false;
	}
}

function callMyNameText()
{
	//The conditional if and else statement below will set the
	//properties of the text function
	
	//When mouse is clicked
	if (mouseIsPressed){
		textFont('Georgia');
		textSize(66);
		textStyle(ITALIC);
		fill(color('blue')); 
	}
	//When mouse is not clicked
	else{
		textFont('Helvetica');
		textSize(44);
		textStyle(NORMAL)
		fill(color('magenta'));
	}
	
	//Displays texts. It follows wherever the mouse pointer goes.
	text('Kevin Kimble', mouseX, mouseY);
}
