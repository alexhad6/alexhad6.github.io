let images = [
	{ src: 'blue_ridge_bonfire.jpg', width: 3000, height: 3749 },
	{ src: 'central_park_waterfall.jpg', width: 3588, height: 3000 },
	{ src: 'east_river_sunset.jpg', width: 4032, height: 3022 },
	{ src: 'flatiron.jpg', width: 2448, height: 3060 },
	{ src: 'hudson_river_boats.jpg', width: 4018, height: 3011 },
	{ src: 'orange_sunset.jpg', width: 3931, height: 2946 },
	{ src: 'red_sunset.jpg', width: 3536, height: 2964 },
	{ src: 'snowy_sidewalk.jpg', width: 4032, height: 3022 },
	{ src: 'southampton_beach.jpg', width: 4032, height: 3022 },
	{ src: 'squirrel.jpg', width: 4608, height: 3456 },
	{ src: 'third_avenue_night.jpg', width: 3630, height: 2999 },
	{ src: 'washington_square_arch.jpg', width: 3024, height: 3779 },
	{ src: 'waterfall.jpg', width: 3588, height: 3000 }
];

for (let image of images) {
	image.src = 'img/'+image.src;
	image.object = new Image();
	image.object.src = image.src;
}