// НА ЭКРАНЕ

var numberOfNotes = document.querySelectorAll('.note').length;

for (var i = 0; i < numberOfNotes; i++) {

	document.querySelectorAll('.note')[i].addEventListener('click', function () {

		var buttonChoice = this.innerHTML;

		makeSound(buttonChoice);

		buttonAnimation(buttonChoice);

	});

}

// НА КЛАВИАТУРЕ

document.addEventListener('keydown', function (event) {
	makeSound(event.key);

	buttonAnimation(event.key);
});

function makeSound(key) {
	switch (key) {
		case 'a':
			var dor = new Audio('sounds/do.mp3');
			dor.play();
			break;
		case 's':
			var re = new Audio('sounds/re.mp3');
			re.play();
			break;
		case 'd':
			var mi = new Audio('sounds/mi.mp3');
			mi.play();
			break;
		case 'f':
			var fa = new Audio('sounds/fa.mp3');
			fa.play();
			break;
		case 'j':
			var sol = new Audio('sounds/sol.mp3');
			sol.play();
			break;
		case 'k':
			var lja = new Audio('sounds/lja.mp3');
			lja.play();
			break;
		case 'l':
			var si = new Audio('sounds/si.mp3');
			si.play();
			break;
		default: none;
	}
}

function buttonAnimation(currentKey) {
	var activeButton = document.querySelector('.' + currentKey);

	setTimeout(function () {
		activeButton.classList.remove('pressed');
	}, 100);

	activeButton.classList.add('pressed');
}






























































































// var numberOfNotes = document.querySelectorAll('.note').length;

// for (var i = 0; i < numberOfNotes; i++) {

// 	document.querySelectorAll('.note')[i].addEventListener('click', function () {

// 		var buttonChoice = this.innerHTML;

// 		makeSound(buttonChoice);

// 		buttonAnimation(buttonChoice);

// 	});

// }

// document.addEventListener('keydown', function (event) {
// 	makeSound(event.key);

// 	buttonAnimation(event.key);
// });

// function makeSound(key) {
// 	switch (key) {
// 		case 'a':
// 			var dor = new Audio('sounds/do.mp3');
// 			dor.play();
// 			break;
// 		case 's':
// 			var re = new Audio('sounds/re.mp3');
// 			re.play();
// 			break;
// 		case 'd':
// 			var mi = new Audio('sounds/mi.mp3');
// 			mi.play();
// 			break;
// 		case 'f':
// 			var fa = new Audio('sounds/fa.mp3');
// 			fa.play();
// 			break;
// 		case 'j':
// 			var sol = new Audio('sounds/sol.mp3');
// 			sol.play();
// 			break;
// 		case 'k':
// 			var lja = new Audio('sounds/lja.mp3');
// 			lja.play();
// 			break;
// 		case 'l':
// 			var si = new Audio('sounds/si.mp3');
// 			si.play();
// 			break;
// 		// default: none;
// 	}
// }

// function buttonAnimation(currentKey) {
// 	var activeButton = document.querySelector('.' + currentKey);

// 	setTimeout(function () {
// 		activeButton.classList.remove('pressed');
// 	}, 100);

// 	activeButton.classList.add('pressed');
// }