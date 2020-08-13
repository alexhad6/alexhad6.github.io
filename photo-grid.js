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
			const {src, width, height, filename, object} = images[i];
			const img = $('<img src="'+src+'">');

			columns.sort((c1, c2) => c1.height - c2.height);
			img.appendTo(columns[0].object);
			columns[0].height += height/width;

			img.click(function() {
				img.clone().appendTo('#active');
				$('#active').show().click(() => {
					$('#active').empty().hide();
					$('body').css('overflow', 'scroll');
				});;
				$('body').css('overflow', 'hidden');
			});
			
			if (nColumns === 0) {
				img.hide();
				object.onload = () => img.show();
				$('#active').empty().hide();
			}
		}

		nColumns = nCol;
	}
}

$(updateMain);
$(window).resize(updateMain);
