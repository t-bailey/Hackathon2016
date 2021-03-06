var xStart, yStart, imgSizes;
function drawCloud(names, counts) {

	var canvas = document.getElementById('cloudCanvas');
	var ctx = canvas.getContext('2d');	
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, 1024, 600);
	xStart = null;
	yStart = null;
	imgSizes = null;

	var ranking = document.getElementById('emoteBody');
	ranking.innerHTML = '';

	max = Math.max.apply(null,counts);
	for(var i = 0; i < names.length; i++) {
		addWord(names[i],counts[i],max, i);
		ranking.innerHTML += "<tr><td>" + names[i] + '</td><td>' + counts[i] + '</td></tr>';
	}	
}

function addWord(word, count, max, position) {
	var MAX_IMAGE_SIZE = 200;

	//Get the canvas and context
	var canvas = document.getElementById('cloudCanvas');
	var ctx = canvas.getContext('2d');	

	//Select the size of the image
	var image_size = Math.ceil((count / max)*10) / 10 * MAX_IMAGE_SIZE ;

	//Select the position of the word
	var pos = getPosition(image_size);
	getImage(word, pos[0],pos[1], image_size);

}

function getPosition(imgSize)
{
	var canvasHeight = 600;
	var canvasWidth = 1024;

	var x1, y1; // x1 and y1 are the origin of the box; x2 and y2 are the opposite corner

	if (xStart== null)
	{
		xStart = new Array();
		yStart = new Array();
		imgSizes = new Array();

		do {
			x1 = Math.floor(Math.random() * canvasWidth);
			y1 = Math.floor(Math.random() * canvasHeight);
		} while (x1 < 10 || (x1 + imgSize) > (canvasWidth - 10) || y1 < 10 || (y1 + imgSize) > (canvasHeight - 10));

		xStart.push(x1);
		yStart.push(y1);
		imgSizes.push(imgSize);

		return [x1, y1];
	}
	else {
		do
		{
			var spotIsTaken = false;

			x1 = Math.floor(Math.random() * canvasWidth);
			y1 = Math.floor(Math.random() * canvasHeight);

			for (var i = 0; i < xStart.length; i++)
			{
				if ( x1 < xStart[i] + imgSizes[i] &&
					x1 + imgSize > xStart[i] &&
					y1 < yStart[i] + imgSizes[i] &&
					y1 + imgSize > yStart[i]) {
					spotIsTaken = true; break;
				}

				 if ((x1 + imgSize > canvasWidth) || (x1 < 0)
				 || (y1 + imgSize > canvasHeight) || (y1 < 0))
				{spotIsTaken = true; break;}

			}

		}while (spotIsTaken)

		var i = xStart.length;

		xStart[i] = x1;
		yStart[i] = y1;
		imgSizes[i] = imgSize;
			return [x1, y1];
	}
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

