let block = document.querySelector('#move');

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

