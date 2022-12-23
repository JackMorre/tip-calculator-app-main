// get elements

let tipAmount = document.querySelector(".tip-price");
let total = document.querySelector(".total");

console.log(tipAmount.textContent, total.textContent);

document.addEventListener("click", function () {
	const bill = document.querySelector(".bill");
	const radioBtn = document.querySelectorAll('input[type="radio"]');
	let percentCustom = document.querySelector(".custom");
	const people = document.querySelector(".number-people");

	const tipInput = document.querySelectorAll(".input-container");
	let checkBtn = "";

	console.log(tipInput);

	const checkFocus = (el) => {
		const inFocus = el === document.activeElement ? true : false;
		return inFocus;
	};

	// if check btn is checked we need to get

	console.log(checkFocus(bill));

	// if ((!bill || !radioBtn || !percentCustom || !people) != null) return;
	// const isDropdownButton = e.target.matches("[data-dropdown-button");
	// if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

	// console.log(percentCustom.hasFocus());

	// console.log(bill, radioBtn, percentCustom, people);

	// const checkPercent = () => {
	// 	for (i = 0; i <= radioBtn.length; i++) {
	// 		if (checkFocus(radioBtn[i]) === true) {
	// 			console.log(radioBtn[i]);
	// 			checkBtn = radioBtn[i];
	// 			console.log(checkBtn);
	// 			break;
	// 		} else if (checkFocus(radioBtn[i]) === false) {
	// 			continue;
	// 		}
	// 	}
	// };

	radioBtn.forEach((el) => {
		el.addEventListener("click", (e) => {
			if (e.checked === true) {
				checkBtn = e;
			}
			return checkBtn;
		});
	});

	console.log(checkBtn);

	// console.log(radioBtn.checked);

	percentCustom.addEventListener("focus", function () {
		checkBtn.checked = false;
		checkBtn = "";
	});

	console.log(bill.value);

	const onePercent = bill.value / 100;

	console.log(onePercent, checkBtn);

	let fulltip = "";

	if (checkBtn.checked === true) {
		fulltip = onePercent * checkBtn.value;
		console.log(fulltip);
	} else if (checkBtn == "") {
		fulltip = onePercent * percentCustom.value;
		console.log(fulltip);
	}

	const personTip = fulltip / people.value;
	const personBill = bill.value / people.value;
	const personTotal = personBill + personTip;
	const totalTwoD = (Math.round(personTotal * 100) / 100).toFixed(2);
	const tipTwoD = (Math.round(personTip * 100) / 100).toFixed(2);

	if ((bill.value > 0, people.value > 0 && fulltip > 0)) {
		tipAmount.textContent = tipTwoD;
		total.textContent = totalTwoD;
	} else return;

	// if ((radioBtn.checked === true) != null) {
	// 	percentCustom.value = "";
	// }

	// console.log(bill, people, radioBtn.checked);

	// if (bill > 0 && people > 0 && radioBtn.checked === true) {
	// 	let fullTip = (bill / 100) * radioBtn.value;
	// 	let tipPerPerson = fullTip / people;
	// 	let billPerPerson = bill / people + tipPerPerson;
	// 	tipAmount.textContent = tipPerPerson;
	// 	total.textContent = billPerPerson;
	// } else if (bill > 0 && people > 0 && percentCustom.value >= 0) {
	// 	let fullTip = (bill / 100) * percentCustom.value;
	// 	let tipPerPerson = fullTip / people;
	// 	let billPerPerson = bill / people;
	// 	tipAmount.textContent = tipPerPerson;
	// 	total.textContent = billPerPerson;
	// }
});
