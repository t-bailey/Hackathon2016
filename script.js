
function createCloud() 
{
	counts = [5, 4, 2];
	names = ['a','b','c'];
	var MAX_FONT_SIZE = 72;
}

function createCloud() 
{
	var counts = [5, 12, 2];
	var names = ['a','b','c'];

	canvas = document.getElementById('cloudCanvas');
	ctx = canvas.getContext('2d');

	drawCloud(names, counts);
}

function drawCloud(names, counts) 
{
	max = Math.max.apply(null,counts);
	for(var i = 0; i < names.length; i++) 
	{
		ctx.fontColor
		ctx.font = 'italic ' + (counts[i] / max) * MAX_FONT_SIZE +'pt Calibri';
		ctx.fillText(names[i], 10, (i+1)*100);
		console.log('here' + i);
	}
}

function rotateElement(result)
{
	canvas = document.getElementById('cloudCanvas');
	context = canvas.getContext('2d');
	var rotated_word = result;
	
	context.save();
	var size = context.measureText(rotated_word);
	var change_x = 50;
	var change_y = 50;
	context.font = 'italic ' + 14 + ' pt Calibri';
	context.translate(400, 300);
	
	var random = Math.floor(Math.random() * 2);
	
	if(random == 1)
	{
		context.rotate(-Math.PI/2);
	}
	else
		context.rotate(Math.PI/2);
	
	context.fillText(rotated_word, 0, 0);
	context.restore();
	console.log('did the rotation ' + j);
	

	addWord(names[i],counts[i],max, i);
	
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

function putWordIntoArray(word, font_size, font_type, position)
{
	arrayOfWords = [];
	canvas = document.getElementById('cloudCanvas');
	context = canvas.getContext('2d');
	
	//Gets the width attribute of the word with a little bit of padding
	int width = context.measureText(word).width + 5;
	
	//Keeps a little room so the text is padded
	int height = font_size + 5;
	
	var wordObject = {txt: word, size: font_size, font: font_type, width: width, height: height, pos: position};
	arrayOfWords.push(wordObject);
}

function checkForWord()
{
	//Needs to be redone
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