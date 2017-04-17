'use strict';

// pixelapp

function pixelapp () {

	// запрещаем выделение текста
	document.ondragstart = function() { return false };
	document.body.onselectstart = function() { return false };

	// определяем переменные
	var pa_factor = 3;

	// генерируем растровое поле
	raster(pa_factor);
};

// функция генерации растрового поля
function raster (pa_factor) {
	var pa_block_size,
		pa_block_counter,
		pa_drawing = document.getElementById('pa-drawing');

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