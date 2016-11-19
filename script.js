function createCloud() {
	var counts = [5, 12, 2];
	var names = ['a','b','c'];

	canvas = document.getElementById('cloudCanvas');
	ctx = canvas.getContext('2d');

	drawCloud(names, counts);
}

function drawCloud(names, counts) {
	max = Math.max.apply(null,counts);
	for(var i = 0; i < names.length; i++) {
		addWord(names[i],counts[i],max, i);
	}	
}

function addWord(word, count, max, position) {
	var MAX_FONT_SIZE = 72;

	//Get the canvas and context
	canvas = document.getElementById('cloudCanvas');
	ctx = canvas.getContext('2d');	

	//Select the color of the text
	ctx.fillStyle = getHexColor();

	//Select the size of the word
	ctx.font = "" + (count / max) * MAX_FONT_SIZE +'pt Ariel';

	//Select the position of the word
	var x = getXPosition(position);
	var y = getYPosition(position);

	//Select the rotation of the word

	//Put the word on the canvas
	ctx.fillText(word, x, y);
}

function getHexColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return '#' + ('0' +r.toString(16)).slice(-2) +  ('0' +g.toString(16)).slice(-2) +  ('0'+ b.toString(16)).slice(-2);
}

function getYPosition(position) {
	return (position+1) * 100;
}

function getXPosition(position) {
	return 10;
}