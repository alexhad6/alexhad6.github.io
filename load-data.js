let images = [
	{ src: 'img/blue_ridge_bonfire.jpg', width: 3000, height: 3749, object: new Image(), date: 1471281841 },
	{ src: 'img/central_park_waterfall.jpg', width: 3588, height: 3000, object: new Image(), date: 1447639167 },
	{ src: 'img/east_river_sunset.jpg', width: 4032, height: 3022, object: new Image(), date: 1487820227 },
	{ src: 'img/flatiron.jpg', width: 2448, height: 3060, object: new Image(), date: 1490292058 },
	{ src: 'img/hudson_river_boats.jpg', width: 4018, height: 3011, object: new Image(), date: 1471402968 },
	{ src: 'img/orange_sunset.jpg', width: 3931, height: 2946, object: new Image(), date: 1483049374 },
	{ src: 'img/red_sunset.jpg', width: 3536, height: 2964, object: new Image(), date: 1448237681 },
	{ src: 'img/snowy_sidewalk.jpg', width: 4032, height: 3022, object: new Image(), date: 1455575473 },
	{ src: 'img/southampton_beach.jpg', width: 4032, height: 3022, object: new Image(), date: 1470090716 },
	{ src: 'img/squirrel.jpg', width: 4608, height: 3456, object: new Image(), date: 1495064973 },
	{ src: 'img/third_avenue_night.jpg', width: 3630, height: 2999, object: new Image(), date: 1443924856 },
	{ src: 'img/washington_square_arch.jpg', width: 3024, height: 3779, object: new Image(), date: 1456614904 }
];

for (let image of images) {
	image.object.src = image.src;
}

images.sort(function(img1, img2) { return img2.date - img1.date });