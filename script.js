let nColumns = 0;

const importImg = [
	'blue_ridge_bonfire.jpg',
	'central_park_waterfall.jpg',
	'east_river_sunset.jpg',
	'hudson_river_boats.jpg',
	'orange_sunset.jpg',
	'rainbow_flatiron.jpg',
	'red_sunset.jpg',
	'snowy_sidewalk.jpg',
	'southampton_beach.jpg',
	'third_avenue_night.jpg',
	'washington_square_arch.jpg'
];
const images = [];
for(let i = 0; i < importImg.length; i++) {
	images.push(new Image());
	images[i].src = 'img/' + importImg[i];
}

$(window).load(function() {
	updateMain();

	$(window).resize(function() {
		updateMain();
	});
});

function updateMain() {
	if ($(window).width() < 640) { updateColumns(1); }
	else if ($(window).width() < 900) { updateColumns(2); }
	else { updateColumns(3); }
}

function updateColumns(nCol) {
	if (nColumns !== nCol) {
		const columns = [];
		$('main').empty();

		for (let i = 0; i < nCol; i++) {
			$('main').append('<div class="column" id="col' + i + '"></div>');
			columns.push({id: 'col'+i, height: 0});
		}

		for (let img of images) {
			columns.sort(function(c1, c2) { return c1.height - c2.height; });
			$('#'+columns[0].id).append('<div class="container"><a href="' + img.src + '"><img src="' + img.src + '"></a></div>');
			columns[0].height += img.height/img.width;
		}

		nColumns = nCol;
	}
}