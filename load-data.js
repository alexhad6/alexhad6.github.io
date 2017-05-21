let images = [
	{ src: 'img/blue_ridge_bonfire.jpg', width: 3000, height: 3749, filename: 'blue_ridge_bonfire', name: 'Blue Ridge Bonfire', date: 1471281841, object: new Image() },
	{ src: 'img/central_park_waterfall.jpg', width: 3588, height: 3000, filename: 'central_park_waterfall', name: 'Central Park Waterfall', date: 1447639167, object: new Image() },
	{ src: 'img/east_river_sunset.jpg', width: 4032, height: 3022, filename: 'east_river_sunset', name: 'East River Sunset', date: 1487820227, object: new Image() },
	{ src: 'img/flatiron.jpg', width: 2448, height: 3060, filename: 'flatiron', name: 'Flatiron', date: 1490292058, object: new Image() },
	{ src: 'img/hudson_river_boats.jpg', width: 4018, height: 3011, filename: 'hudson_river_boats', name: 'Hudson River Boats', date: 1471402968, object: new Image() },
	{ src: 'img/orange_sunset.jpg', width: 3931, height: 2946, filename: 'orange_sunset', name: 'Orange Sunset', date: 1483049374, object: new Image() },
	{ src: 'img/red_sunset.jpg', width: 3536, height: 2964, filename: 'red_sunset', name: 'Red Sunset', date: 1448237681, object: new Image() },
	{ src: 'img/snowy_sidewalk.jpg', width: 4032, height: 3022, filename: 'snowy_sidewalk', name: 'Snowy Sidewalk', date: 1455575473, object: new Image() },
	{ src: 'img/southampton_beach.jpg', width: 4032, height: 3022, filename: 'southampton_beach', name: 'Southampton Beach', date: 1470090716, object: new Image() },
	{ src: 'img/squirrel.jpg', width: 4608, height: 3456, filename: 'squirrel', name: 'Squirrel', date: 1495064973, object: new Image() },
	{ src: 'img/third_avenue_night.jpg', width: 3630, height: 2999, filename: 'third_avenue_night', name: 'Third Avenue Night', date: 1443924856, object: new Image() },
	{ src: 'img/washington_square_arch.jpg', width: 3024, height: 3779, filename: 'washington_square_arch', name: 'Washington Square Arch', date: 1456614904, object: new Image() }
];

images.sort(function(img1, img2) { return img2.date - img1.date });

for (let image of images) {
	image.object.src = image.src;
}