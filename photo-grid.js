let nColumns = 0;

function updateMain() {
	let width = $(window).width();
	updateColumns(width < 640 ? 1 : width < 1000 ? 2 : 3);
}

function updateColumns(nCol) {
	if (nColumns !== nCol) {
		const columns = [];
		$('#grid').empty();

		for (let i = 0; i < nCol; i++) {
			let object = $('<div class="column"></div>')
			$('#grid').append(object);
			columns.push({object: object, height: 0});
		}

		for(let i = 0; i < images.length; i++) {
			const { src, width, height, object } = images[i];
			const img = $('<div class="container"><img src="'+src+'"></div>');

			columns.sort(function(c1, c2) { return c1.height - c2.height; });
			img.appendTo(columns[0].object);
			columns[0].height += height/width;

			img.click(function() {
				$('#grid').hide();
				img.clone().appendTo('#active').click(function() {
					$('#active').empty();
					$('#grid').show();
				});
			});
			
			if (nColumns === 0) {
				img.hide();
				object.onload = function() { img.show(); }
				$('#active').empty();
			}
		}

		nColumns = nCol;
	}
}

$(document).ready(updateMain);
$(window).resize(updateMain);