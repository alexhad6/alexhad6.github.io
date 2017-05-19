let nColumns = 0;

function updateMain(first) {
	let nCol = 0;
	if ($(window).width() < 640) { nCol = 1; }
	else if ($(window).width() < 1000) { nCol = 2; }
	else { nCol = 3; }
	updateColumns(nCol, first);
}

function updateColumns(nCol, first) {
	if (nColumns !== nCol) {
		const columns = [];
		$('main').empty();

		for (let i = 0; i < nCol; i++) {
			$('main').append('<div class="column" id="col'+i+'"></div>');
			columns.push({id: 'col'+i, height: 0});
		}

		for(let i = 0; i < images.length; i++) {
			let image = images[i];
			columns.sort(function(c1, c2) { return c1.height - c2.height; });
			$('#'+columns[0].id).append('<div class="container" id="img'+i+'"><a href="'+image.src+'"><img src="'+image.src+'"></a></div>');
			columns[0].height += image.height/image.width;
			if (first) {
				$('#img'+i).hide();
				image.object.onload = function() { $('#img'+i).show(); };
			}
		}

		nColumns = nCol;
	}
}
$(document).ready(function() { updateMain(true); });
$(window).resize(function() { updateMain(false); });