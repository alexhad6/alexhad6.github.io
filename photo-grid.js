let nColumns = 0;

function updateMain() {
	if ($(window).width() < 640) { updateColumns(1); }
	else if ($(window).width() < 1000) { updateColumns(2); }
	else { updateColumns(3); }
}

function updateColumns(nCol) {
	if (nColumns !== nCol) {
		const columns = [];
		$('main').empty();

		for (let i = 0; i < nCol; i++) {
			$('main').append('<div class="column" id="col'+i+'"></div>');
			columns.push({id: 'col'+i, height: 0});
		}

		for(let i = 0; i < images.length; i++) {
			let image = images[i];
			images[i].object.src = images[i].src;
			images[i].object.onload = function() { $('#img'+i).show(); };
			columns.sort(function(c1, c2) { return c1.height - c2.height; });
			$('#'+columns[0].id).append('<div class="container" id="img'+i+'"><a href="'+image.src+'"><img src="'+image.src+'"></a></div>');
			$('#img'+i).hide();
			columns[0].height += image.height/image.width;
		}

		nColumns = nCol;
	}
}
$(document).ready(updateMain);
$(window).resize(updateMain);