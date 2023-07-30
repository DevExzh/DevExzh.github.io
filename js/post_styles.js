"use strict";
const imgobjw = 411.6865, imgobjy = 402.758;
const contobj = document.querySelector('.bg-container');
const imgobj = document.querySelector('.bg-img');
const boardobj = document.getElementById('board');

function handleResize() {
	let w = (document.documentElement.clientWidth - boardobj.clientWidth) / 2;
	let s = w / imgobjw;
	contobj.style.left = '-' + (imgobjw * s+170) / 2 + 'px';
	contobj.style.bottom = '-' + (imgobjy * s+170) / 2 + 'px';
	imgobj.style.width = (imgobjw * s+170) + 'px';
	imgobj.style.height = (imgobjy * s+170) + 'px';
}
window.addEventListener('resize', handleResize);