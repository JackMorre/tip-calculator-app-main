const reset = document.querySelector(".reset");
const tipAmount = document.querySelector(".tip-price");
let total = document.querySelector(".total");
const bill = document.querySelector(".bill");
const people = document.querySelector(".number-people");
const radioBtn = document.querySelectorAll('input[type="radio"]');
const percentCustom = document.querySelector(".custom");

let selectedValue = "";
let selectedElement = "";
let peopleValue = "";

const peopleCheck = () => {
	if (people.value == 0 || people.value == "") {
		people.parentElement.classList.add("no-input");
	} else if (people.value > 0) {
		people.parentElement.classList.remove("no-input");
		peopleValue = Number(people.value);
	}
};

const customValue = () => {
	if (percentCustom.value > 0) {
		selectedValue = percentCustom.value;
	}
};

const checkEverything = () => {
	const fullTip = (bill.value / 100) * selectedValue;
	const personTip = fullTip / peopleValue;
	const personBill = bill.value / peopleValue;
	const personTotal = personBill + personTip;
	const pTipTwoDec = (Math.round(personTip * 100) / 100).toFixed(2);
	const pTTwoDec = (Math.round(personTotal * 100) / 100).toFixed(2);
	tipAmount.textContent = pTipTwoDec;
	total.textContent = pTTwoDec;
};

const allChecked = () => {
	if (bill.value > 0 && people.value > 0 && selectedValue > 0) {
		checkEverything();
	}
};

const resetfunction = () => {
	tipAmount.textContent = `0.00`;
	total.textContent = `0.00`;
	people.value = "";
	percentCustom.value = "";
	selectedElement.checked = false;
	bill.value = "";
};

bill.addEventListener("input", () => {
	allChecked();
});

people.addEventListener("input", () => {
	peopleCheck();
	allChecked();
});

people.addEventListener("blur", () => {
	peopleCheck();
});

percentCustom.addEventListener("click", () => {
	selectedElement.checked = false;
});

percentCustom.addEventListener("input", () => {
	customValue();
	allChecked();
});

radioBtn.forEach((el) => {
	el.addEventListener("click", () => {
		if (el.checked === true) {
			selectedElement = el;
			selectedValue = el.value;
			percentCustom.value = "";
		}
		allChecked();
	});
});

reset.addEventListener("click", resetfunction);
