function createCloud() {
	var counts = [5, 12, 2,10,1,5,15,7,11,3];
	var names = ['Kappa','PogChamp','VoteYea','VoteNay','KappaRoss','KappaPride','BrainSlug','BrokeBack','BudBlast','cmonBruh'];

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
	var canvas = document.getElementById('cloudCanvas');
	var ctx = canvas.getContext('2d');	

	//Select the color of the text
	ctx.fillStyle = getHexColor();

	//Select the size of the word
	var font_size = (count / max) * MAX_FONT_SIZE;
	ctx.font = "" + font_size +'pt Arial';

	//Select the rotation of the word	
	// ctx.save();
	var rotation = Math.floor(Math.random() * 4) - 1;
	if(rotation == 2) {
		rotation = 0;
	}

	//Select the position of the word
	var pos = getPosition(font_size,word,rotation);
	// ctx.translate(pos[0], pos[1]);
	
	// ctx.rotate(rotation * Math.PI/2)	
	getImage(word, pos[0],pos[1]);
	// ctx.fillText(word, 0, 0);
	// ctx.restore();
}

function getHexColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return '#' + ('0' + r.toString(16)).slice(-2) +  ('0' + g.toString(16)).slice(-2) +  ('0'+ b.toString(16)).slice(-2);
}

var xStart, xEnd, yStart, yEnd;

function getPosition(fontSize, word, rotationAngle)
{
	var canvasHeight = 600;
	var canvasWidth = 800;

	var x1, y1, x2, y2; // x1 and y1 are the origin of the box; x2 and y2 are the opposite corner

	//if (xStart == null)
	//{
		// x1 = canvasWidth / 2;
		// y1 = canvasHeight / 2;

		// if (rotationAngle == 0)
		// {
		// 	x2 = x1 + word.length * fontSize;
		// 	y2 = y1 - fontSize;
		// }
		// if (rotationAngle == Math.PI/2)
		// {
		// 	x2 = x1 + fontSize;
		// 	y2 = y1 + word.length * fontSize;
		// }
		// else // if (rotationAngle == -1 * Math.PI/2)
		// {
		// 	x2 = x1 - fontSize;
		// 	y2 = y1 - word.length * fontSize;
		// }

		xStart = [];
		xEnd = [];
		yStart = [];
		yEnd = [];

		// xStart.push(x1);
		// xEnd.push(x2);
		// yStart.push(y1);
		// yEnd.push(y2);

		// return [x1, y1];
	//}

	do
	{
		var spotIsTaken = false;

		x1 = Math.floor(Math.random() * (canvasWidth  - 199)) + 100;
		y1 = Math.floor(Math.random() * (canvasHeight - 199)) + 100;

		if (rotationAngle == 0)
		{
			x2 = x1 + word.length * fontSize * 2;
			y2 = y1 + fontSize;
		}
		else if (rotationAngle == Math.PI/2)
		{
			x2 = x1 + fontSize;
			y2 = y1 + word.length * fontSize;
		}
		else // if (rotationAngle == -1 * Math.PI/2)
		{
			x2 = x1 - fontSize;
			y2 = y1 - word.length * fontSize;
		}

		for (var i = 0; i < xStart.length; i++)
		{
			if ((x1 < xEnd[i] && x1 > xStart[i])
				|| (x2 < xEnd[i] && x2 > xStart[i])
				|| (y1 > yEnd[i] && y1 < yStart[i])
				|| (y2 > yEnd[i] && y2 < yStart[i])
				|| (xEnd > canvasWidth - 100) || (xEnd < 0)
				|| (yEnd > canvasHeight) || (yEnd < 0))
				spotIsTaken = true;
		}
	}
	while (spotIsTaken)

	return [x1, y1];
}

function getImage(word, x, y) {
	var data = JSON.parse(emotedata);
	var emoteData = data.emotes[word]['image_id'];

	var canvas = document.getElementById('cloudCanvas');
	var ctx = canvas.getContext('2d');
  	var base_image = new Image();
 	base_image.src = 'https://static-cdn.jtvnw.net/emoticons/v1/' + emoteData + '/3.0';
 	base_image.width = 50;
 	base_image.height = 50;
 	base_image.onload = function(){
    	ctx.drawImage(base_image, x, y);
  }
}