function createCloud() 
{
	counts = [5, 4, 2];
	names = ['a','b','c'];
	var MAX_FONT_SIZE = 72;

	canvas = document.getElementById('cloudCanvas');
	ctx = canvas.getContext('2d');

	max = Math.max.apply(null,counts);
	console.log(max);
	for(var i = 0; i < names.length; i++) {
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
	
}