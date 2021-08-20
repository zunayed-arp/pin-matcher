/* function getPin() {
	const pin = Math.round(Math.random() * 10000);
	const pinString = pin + '';

	if (pinString.length == 4) {
		return pin;
	}
	else {
		// console.log('got 3 digit and calling again',pin);
		return getPin();
	}
}


function generatePin() {
	const pin = getPin();
	document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener('click', function (event) {
	const number = event.target.innerText;
	const calcInput = document.getElementById('typed-numbers');
	if (isNaN(number)) {
		if (number == 'C') {
			calcInput.value = '';
		}
	}
	else {

		const previousNumber = calcInput.value;
		const newNumber = previousNumber + number;
		calcInput.value = newNumber;
	}

});


function verifyPin() {
	const pin = document.getElementById('display-pin').value;
	const typedNumbers = document.getElementById('typed-numbers').value;
	const failError = document.getElementById('notify-fail');
	const successMessage = document.getElementById('notify-success');

	if (pin == typedNumbers) {

		successMessage.style.display = 'block';
		failError.style.display = 'none';
	}
	else {

		failError.style.display = 'block';
		successMessage.style.display='none';

	}
};
 */

/*  let count = 0;

console.log(parseInt("count"+1));

console.log(Math.pow(4,0.5)+"spiderman"+"987"+Math.sqrt(9))

function generatePin(){
	console.log( Math.floor(Math.random()*90000)+10000)
} */


// console.log(!isNaN('10X'));

const product = "5";
const price = 7;
console.log(product+price)
console.log(typeof price)

const subTotal = product * price;
console.log(typeof subTotal)
const tax = subTotal/10;
const total = subTotal+tax;
console.log(total)
console.log(subTotal)

// const category = 'pen';
// const performer = category + '-teller';
// console.log(performer)