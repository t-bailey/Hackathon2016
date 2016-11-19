function createCloud() {
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