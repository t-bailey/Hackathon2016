function createCloud() 
{
	counts = [5, 4, 2];
	names = ['a','b','c'];
	var max = Math.max.apply(null, counts);
	var wordArray = [];

	for(var i = 0; i < counts.length; i++) {
		addWord(names[i], counts[i], max, wordArray);
	}	
}

function addWord(word, count, max, wordArray) {
	var MAX_FONT_SIZE = 72;

	//Get the canvas and context
	var canvas = document.getElementById('cloudCanvas');
	var ctx = canvas.getContext('2d');	

	//Select the color of the text
	ctx.fillStyle = getHexColor();

	//Select the size of the word
	var font_size = (count / max) * MAX_FONT_SIZE;
	ctx.font = "" + font_size +'pt Ariel';

	//Select the rotation of the word	
	ctx.save();
	var rotation = Math.floor(Math.random() * 3) - 1;

	//Select the position of the word
	var pos = positionWord(word,font_size,rotation, wordArray);
	ctx.translate(pos[0], pos[1]);
	
	ctx.rotate(rotation * Math.PI/2)	

	ctx.fillText(word, 0, 0);
	ctx.restore();
}

function getHexColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return '#' + ('0' + r.toString(16)).slice(-2) +  ('0' + g.toString(16)).slice(-2) +  ('0'+ b.toString(16)).slice(-2);
}

function positionWord(word,size,rot,wordArray) {

	var canvas = document.getElementById('cloudCanvas');
	var ctx = canvas.getContext('2d');
	
	var width = ctx.measureText(word).width + 5;
	var height = size + 5;

	if(rot != 0) {
		var temp = width;
		width = height;
		height = temp;
	}

	var width = 600;
	var height = 400;
	x = Math.floor(Math.random() * width) - (width/2);
	y = Math.floor(Math.random() * height) - (height/2);
	x2 = x + width;
	y2 = y + height;

	return [x,y];
}
