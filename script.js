function createCloud() 
{
	counts = [5, 4, 2];
	names = ['a','b','c'];
	var max = Math.max.apply(null, counts);

	for(var i = 0; i < counts.length; i++) {
		addWord(names[i], counts[i], max, i);
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
	
	ctx.save();
	var size = ctx.measureText(word);
	var change_x = 50;
	var change_y = 50;
	ctx.font = 'italic ' + 14 + ' pt Calibri';
	ctx.translate(400, 300);
	
	var random = Math.floor(Math.random() * 3) - 1;
	ctx.rotate(random * Math.PI/2)	
	ctx.fillText(word, x, y);
	ctx.restore();
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