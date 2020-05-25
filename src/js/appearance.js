let block = document.querySelector('#video');

function moveDown() {
	let coordX = -1000;
	let time = setInterval(frame, 1);

	function frame() {
		if (coordX == 2300) {
			clearInterval(time);
		} else {
			coordX++;
			block.style.right = coordX + 'px';
		}
	}
}

window.onwheel = function () {
	let contains = document.querySelector('.screen--active ').classList.contains("pusk");
	if (contains) moveDown();
};

// // определение нахождение эл-та в области видимости браузера
// function isOnVisibleSpace(element) {
// 	let bodyHeight = window.innerHeight;
// 	let elemRect = element.getBoundingClientRect();
// 	let offset = elemRect.top;// - bodyRect.top;
// 	if (offset < 0) return false;
// 	if (offset > bodyHeight) return false;
// 	return true;
// }

// // глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
// let listenedElements = [];
// // обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements 
// // на предмет попадания(выпадения) в зону видимости
// window.onwheel = function () {
// 	listenedElements.forEach(item => {
// 		// проверяем находится ли элемент в зоне видимости
// 		let result = isOnVisibleSpace(item.el);

// 		// если элемент находился в зоне видимости и вышел из нее
// 		// вызываем обработчик выпадения из зоны видимости
// 		if (item.el.isOnVisibleSpace && !result) {
// 			item.el.isOnVisibleSpace = false;
// 			item.outVisibleSpace(item.el);
// 			return;
// 		}
// 		// если элемент находился вне зоны видимости и вошел в нее
// 		// вызываем обработчик попадания в зону видимости
// 		if (!item.el.isOnVisibleSpace && result) {
// 			item.el.isOnVisibleSpace = true;
// 			item.inVisibleSpace(item.el);
// 			return;
// 		}
// 	});
// };

// // функция устанавливает обработчики событий 
// // появления элемента в зоне видимости и
// // выхода из нее
// function onVisibleSpaceListener(elementId, cbIn, cbOut) {
// 	// получаем ссылку на объект элемента
// 	let el = document.getElementById(elementId);
// 	// добавляем элемент и обработчики событий 
// 	// в массив отслеживаемых элементов
// 	listenedElements.push({
// 		el: el,
// 		inVisibleSpace: cbIn,
// 		outVisibleSpace: cbOut
// 	});
// }

// // функция движения 
// let block = document.querySelector('#video');

// function moveDown() {
// 	let coordX = -1000;
// 	let time = setInterval(frame, 1);
// 	function frame() {
// 		if (coordX == 2300) {
// 			clearInterval(time);
// 		} else {
// 			coordX++;
// 			block.style.right = coordX + 'px';
// 		}
// 	}
// }

// // устанавливаем обработчики для элемента "video"
// onVisibleSpaceListener("video",
// 	el => {
// 		// функция вызываемая при попадании элемента в зону видимости
// 		// тут вставляем код запуска анимации

// 		// window.alert("элемент в зоне видимости");
// 		moveDown();

// 		el => {
// 			// функция вызываемая при выпадении элемента из зоны видимости
// 			// тут вставляем код остановки анимации
// 			// el.innerHTML = "000000000000000000000000";
// 			window.alert("элемент вне зоны видимости");
// 		};
// 	});
