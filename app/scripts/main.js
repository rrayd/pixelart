'use strict';

// pixelapp
function pixelapp () {

	// запрет выделения текста
	document.ondragstart = function() { return false };
	document.body.onselectstart = function() { return false };

	// основные переменные
	var pa_factor = 32,
		brush_color = '#ffffff',
		bg_color = '#8edebe';

	// объекты
	var pa_drawing = document.getElementById('pa-drawing'), // область рисования
		pa_new = document.getElementById('pa-new'), // новый документ
		pa_factor_down = document.getElementById('pa-size-down'), // уменьшатель
		pa_factor_up = document.getElementById('pa-size-up'), // увеличитель
		pa_brush_picker = document.getElementById('pa-color-painting'), // селектор цвета
		pa_bg_picker = document.getElementById('pa-color-backgound'); // селектор фона

	// рисование
	pa_drawing.onmousedown = function (e) {
		e.target.style.background = brush_color;
		// e.target.className = 'pa-db';
		pa_drawing.onmousemove = function (e) {
			e.target.style.background = brush_color;
			// e.target.className = 'pa-db';
		};
	};
	document.onmouseup = function () {
		pa_drawing.onmousemove = null;
	};

	// работа с панелью управления
	// новый документ
	pa_new.onmousedown = function () {
		raster(pa_factor, pa_drawing, bg_color);
	}
	// изменение размера
	pa_factor_down.onmousedown = function () {
		if (pa_factor > 1) {
			--pa_factor;
			raster(pa_factor, pa_drawing, bg_color);
		}
	};
	pa_factor_up.onmousedown = function () {
		if (pa_factor < 32) {
			++pa_factor;
			raster(pa_factor, pa_drawing, bg_color);
		}
	};
	// установка цветовых селекторов
	pa_brush_picker.style.backgroundColor = brush_color;
	pa_bg_picker.style.backgroundColor = bg_color;

	// генерация растрового поля
	raster(pa_factor, pa_drawing, bg_color);
};

// генерация растрового поля
function raster (pa_factor, pa_drawing, bg_color) {
	var pa_block_size,
		pa_block_counter;

	// очистка поля
	pa_drawing.innerHTML = '';

	// определение параметров нового поля
	pa_block_size = 480 / pa_factor;
	pa_block_counter = pa_factor * pa_factor;

	// установка значения в панель
	document.getElementById('pa-ui-factor').innerHTML = pa_factor + ' x ' + pa_factor + ' px';

	// генерация
	for ( var i = 0; i < pa_block_counter; i++ ) {
		var pa_dblock = document.createElement('div');
		pa_dblock.className = 'pa-db pa-db-bg';
		pa_dblock.style.width = pa_block_size + 'px';
		pa_dblock.style.height = pa_block_size + 'px';
		// pa_dblock.style.backgroundColor = bg_color;
		pa_drawing.appendChild(pa_dblock);
	}
};

// запуск приложения
pixelapp();