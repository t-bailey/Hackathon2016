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
	var MAX_IMAGE_SIZE = 300;

	//Get the canvas and context
	var canvas = document.getElementById('cloudCanvas');
	var ctx = canvas.getContext('2d');	

	//Select the color of the text
	ctx.fillStyle = getHexColor();

	//Select the size of the word
	var font_size = (count / max) * MAX_FONT_SIZE;
	// ctx.font = "" + font_size +'pt Arial';
	var image_size = Math.floor((count / max) * MAX_IMAGE_SIZE);

	//Select the rotation of the word	
	// ctx.save();
	var rotation = Math.floor(Math.random() * 4) - 1;
	if(rotation == 2) {
		rotation = 0;
	}

	//Select the position of the word
	var pos = getPosition(image_size,word,rotation);
	// ctx.translate(pos[0], pos[1]);
	
	// ctx.rotate(rotation * Math.PI/2)	
	getImage(word, pos[0],pos[1], image_size);
	// ctx.fillText(word, 0, 0);
	// ctx.restore();
}

function getHexColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return '#' + ('0' + r.toString(16)).slice(-2) +  ('0' + g.toString(16)).slice(-2) +  ('0'+ b.toString(16)).slice(-2);
}

var xStart, xEnd, yStart, yEnd, imgSizes;

function getPosition(imgSize, word, rotationAngle)
{
	var canvasHeight = 900;
	var canvasWidth = 1024;

	var x1, y1, x2, y2; // x1 and y1 are the origin of the box; x2 and y2 are the opposite corner

	if (xStart== null)
	{
		xStart = new Array();
		xEnd = new Array();
		yStart = new Array();
		yEnd = new Array();
		imgSizes = new Array();

		x1 = Math.floor(Math.random() * (canvasWidth  - 199)) + 100;
		y1 = Math.floor(Math.random() * (canvasHeight - 199)) + 100;

		if (rotationAngle == 0)
		{
			x2 = x1 + imgSize;
			y2 = y1 - imgSize;
		}
		else if (rotationAngle == Math.PI/2)
		{
			x2 = x1 + imgSize;
			y2 = y1 + imgSize;
		}
		else // if (rotationAngle == -1 * Math.PI/2)
		{
			x2 = x1 - imgSize;
			y2 = y1 - imgSize;
		}

		var xLittle, xBig, yLittle, yBig;

		if  (x1 < x2){xLittle = x1;	xBig = x2;}
		else         {xLittle = x2;	xBig = x1;}
		if (y1 < y2) {yLittle = y1;	yBig = y2;}
		else         {yLittle = y2; yBig = y1;}

		xStart.push(xLittle);
		xEnd.push(xBig);
		yStart.push(yLittle);
		yEnd.push(yBig);
		imgSizes.push(imgSize);

		return [x1, y1];
	}

	do
	{
		var spotIsTaken = false;

		x1 = Math.floor(Math.random() * (canvasWidth  - 199)) + 100;
		y1 = Math.floor(Math.random() * (canvasHeight - 199)) + 100;

		if (rotationAngle == 0)
		{
			x2 = x1 + word.length * imgSize * 2;
			y2 = y1 - imgSize;
		}
		else if (rotationAngle == Math.PI/2)
		{
			x2 = x1 + imgSize;
			y2 = y1 + word.length * imgSize;
		}
		else // if (rotationAngle == -1 * Math.PI/2)
		{
			x2 = x1 - imgSize;
			y2 = y1 - word.length * imgSize;
		}

		var xLittle, xBig, yLittle, yBig;

		if  (x1 < x2){xLittle = x1;	xBig = x2;}
		else         {xLittle = x2;	xBig = x1;}
		if (y1 < y2) {yLittle = y1;	yBig = y2;}
		else         {yLittle = y2; yBig = y1;}

		for (var i = 0; i < xStart.length; i++)
		{
			if ( x1 < xStart[i] + imgSizes[i] &&
				x1 + imgSize > xStart[i] &&
				y1 < yStart[i] + imgSizes[i] &&
				y1 + imgSize > yStart[i])
			/*
			 ((xLittle <= xEnd[i]      && xLittle >= xStart[i] && yLittle <= yEnd[i]   && yLittle >= yStart[i])
			 || (xBig <= xEnd[i]      && xBig >= xStart[i]    && yLittle <= yEnd[i]   && yLittle >= yStart[i])
			 || (xLittle <= xEnd[i]   && xLittle >= xStart[i] && yBig <= yEnd[i]      && yBig >= yStart[i])
			 || (xBig <= xEnd[i]      && xBig >= xStart[i]    && yBig <= yEnd[i]      && yBig >= yStart[i])
			 || (xLittle <= xStart[i] && xBig >= xEnd[i]      && yLittle >= yStart[i] && yLittle <= yEnd[i])
			 || (xLittle <= xStart[i] && xBig >= xEnd[i]      && yBig >= yStart[i]    && yBig <= yEnd[i])
			 || (xLittle >= xStart[i] && xLittle <= xEnd[i]   && yLittle <= yStart[i] && yBig >= yEnd[i])
			 || (xBig >= xStart[i]    && xBig <= xEnd[i]      && yLittle <= yStart[i] && yBig >= yEnd[i])
			 || (xBig >= xStart[i]    && xBig <= xEnd[i]      && yLittle <= yStart[i] && yBig >= yEnd[i])

			 || (xBig > canvasWidth - 200) || (xLittle < 0)
			 || (yBig > canvasHeight) || (yLittle < 0))*/

			{spotIsTaken = true; break;}
		}
	}
	while (spotIsTaken)

	var i = xStart.length;

	xStart[i] = (xLittle);
	xEnd[i] = (xBig);
	yStart[i] = (yLittle);
	yEnd[i] = (yBig);
	imgSizes[i] = imgSize;

	return [x1, y1];
}

function getImage(word, x, y, size) {
	var data = JSON.parse(emotedata);
	var emoteData = data.emotes[word]['image_id'];

	var canvas = document.getElementById('cloudCanvas');
	var ctx = canvas.getContext('2d');
  	var base_image = new Image();
 	base_image.src = 'https://static-cdn.jtvnw.net/emoticons/v1/' + emoteData + '/3.0';
 	
 	base_image.onload = function(){
    	ctx.drawImage(base_image, x, y, size, size);
  }
}