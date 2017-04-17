'use strict';

// pixelapp
function pixelapp () {

	// запрет выделения текста
	document.ondragstart = function() { return false };
	document.body.onselectstart = function() { return false };

	var pa_factor = 32,
		brush_color = '#ee4a72',
		pa_drawing = document.getElementById('pa-drawing');

	// генерация растрового поля
	raster(pa_factor, pa_drawing);

	// рисование
	pa_drawing.onmousedown = function (e) {
		e.target.style.background = brush_color;
		pa_drawing.onmousemove = function (e) {
			e.target.style.background = brush_color;
		};
	};
	document.onmouseup = function () {
		pa_drawing.onmousemove = null;
	};
};

// генерация растрового поля
function raster (pa_factor, pa_drawing) {
	var pa_block_size,
		pa_block_counter;

	// определение параметров нового поля
	pa_block_size = 480 / pa_factor;
	pa_block_counter = pa_factor * pa_factor;

	// генерация
	for ( var i = 0; i < pa_block_counter; i++ ) {
		var pa_dblock = document.createElement('div');
		pa_dblock.className = 'pa-db';
		pa_dblock.style.width = pa_block_size + 'px';
		pa_dblock.style.height = pa_block_size + 'px';
		pa_drawing.appendChild(pa_dblock);
	}
};

// запуск приложения
pixelapp();