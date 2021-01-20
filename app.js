// EXO 1
let $btn = document.querySelector('#btn-flip');
let temp = document.querySelector('.color-flip');

$btn.addEventListener('click', () => {
	let red = Math.floor(Math.random() * 255);
	let green = Math.floor(Math.random() * 255);
	let blue = Math.floor(Math.random() * 255);

	temp.style.background = `rgb(${red},${green},${blue})`;
});

// EXO 2
const counter = document.querySelector('#counter');
const incrementBtn = document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');
const decrementBtn = document.querySelector('#decrement');

let counterVelue = 0;
incrementBtn.addEventListener('click', (event) => {
	counterVelue += 1;
	counter.innerHTML = counterVelue;
});
decrementBtn.addEventListener('click', (event) => {
	counterVelue -= 1;
	counter.innerHTML = counterVelue;
});
resetBtn.addEventListener('click', (event) => {
	counterVelue = 0;
	counter.innerHTML = counterVelue;
});

// EXO 3
let countDate = new Date('Jan 1, 2022 00:00:00').getTime();
function newYear() {
	let now = new Date().getTime();
	gap = countDate - now;

	let second = 1000;
	let minute = second * 60;
	let hour = minute * 60;
	let day = hour * 24;

	let d = Math.floor(gap / day);
	let h = Math.floor((gap % day) / hour);
	let m = Math.floor((gap % hour) / minute);
	let s = Math.floor((gap % minute) / second);

	document.querySelector('#day').innerText = d;
	document.querySelector('#hour').innerText = h;
	document.querySelector('#minute').innerText = m;
	document.querySelector('#second').innerText = s;
}

setInterval(() => {
	newYear();
}, 1000);

// EXO 4
let addToDoButton = document.querySelector('#addToDo');
let toDoContainer = document.querySelector('#toDoContainer');
let inputField = document.querySelector('#inputField');

addToDoButton.addEventListener('click', () => {
	let paragraph = document.createElement('p');
	paragraph.classList.add('paragraph-styling');
	paragraph.innerText = inputField.value;
	toDoContainer.appendChild(paragraph);
	inputField.value = '';
	paragraph.addEventListener('click', () => {
		paragraph.style.textDecoration = 'line-through';
	});
	paragraph.addEventListener('dblclick', () => {
		toDoContainer.removeChild(paragraph);
	});
});
