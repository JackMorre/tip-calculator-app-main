// get all elements

//create function to be used with event listener

// make it so that nothing happens until all three fields are field up

// make is so either you have a pre selected percentage or customer

const reset = document.querySelector(".reset");

let tipAmount = document.querySelector(".tip-price");
let total = document.querySelector(".total");

const bill = document.querySelector(".bill");
const people = document.querySelector(".number-people");

const radioBtn = document.querySelectorAll('input[type="radio"]');
let percentCustom = document.querySelector(".custom");

let selectedValue = "";
let selectedElement = "";
letpeopleValue = "";

const checkEverything = () => {
	if (percentCustom.value > 0) {
		selectedValue = percentCustom.value;
	}
	peopleValue = Number(people.value);
	if (bill.value > 0 && people.value > 0 && selectedValue > 0) {
		//create tip for bill
		const fullTip = (bill.value / 100) * selectedValue;
		const personTip = fullTip / peopleValue;
		console.log(bill.value, people.value, selectedValue);
		const personBill = bill.value / peopleValue;
		const personTotal = personBill + personTip;
		const pTipTwoDec = (Math.round(personTip * 100) / 100).toFixed(2);
		const pTTwoDec = (Math.round(personTotal * 100) / 100).toFixed(2);
		tipAmount.textContent = pTipTwoDec;
		total.textContent = pTTwoDec;
	}
};

bill.addEventListener("input", () => {
	console.log("hello");
	setInterval(checkEverything(), 1000);
});
people.addEventListener("input", () => {
	setInterval(checkEverything(), 100);
});

percentCustom.addEventListener("input", () => {
	selectedElement.checked = false;
	setInterval(checkEverything(), 100);
});

radioBtn.forEach((el) => {
	el.addEventListener("click", () => {
		if (el.checked === true) {
			selectedElement = el;
			selectedValue = el.value;
			console.log(selectedElement);
			percentCustom.value = "";
		}
		setInterval(checkEverything(), 100);
	});
});
reset.addEventListener("click", () => {
	tipAmount.textContent = `0.00`;
	total.textContent = `0.00`;
	people.value = "";
	percentCustom.value = "";
	selectedElement.checked = false;
	bill.value = "";
});
