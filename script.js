"use strict";

const domElements = {
	labels: {
		welcome: document.querySelector(".welcome"),
		date: document.querySelector(".date"),
		balance: document.querySelector(".balance__value"),
		sumIn: document.querySelector(".summary__value--in"),
		sumOut: document.querySelector(".summary__value--out"),
		interest: document.querySelector(".summary__value--interest"),
		timer: document.querySelector(".timer"),
	},
	containers: {
		app: document.querySelector(".app"),
		movements: document.querySelector(".movements"),
	},
	buttons: {
		btnLogin: document.querySelector(".login__btn"),
		btnTransfer: document.querySelector(".form__btn--transfer"),
		btnLoan: document.querySelector(".form__btn--loan"),
		btnClose: document.querySelector(".form__btn--close"),
		btnSort: document.querySelector(".btn--sort"),
	},
	inputs: {
		inputLoginUsername: document.querySelector(".login__input--user"),
		inputLoginPin: document.querySelector(".login__input--pin"),
		inputTransferTo: document.querySelector(".form__input--to"),
		inputTransferAmount: document.querySelector(".form__input--amount"),
		inputLoanAmount: document.querySelector(".form__input--loan-amount"),
		inputCloseUsername: document.querySelector(".form__input--user"),
		inputClosePin: document.querySelector(".form__input--pin"),
	},
};

const getHtmlTemplate = {
	movement({ movement, index }) {
		const isDeposit = movement > 0;
		const movementType = isDeposit ? "deposit" : "withdrawal";

		return `
			<div class="movements__row">
				<div class="movements__type movements__type--${movementType}">
					${index + 1} ${movementType}
				</div>
				<div class="movements__date">24/01/2037</div>
				<div class="movements__value">${movement}₿</div>
			</div>;
		`;
	},
};

const render = {
	removeInnerHtml(htmlElement) {
		htmlElement.innerHTML = "";
	},
	movements(movements) {
		const {
			containers: { movements: $container },
		} = domElements;

		this.removeInnerHtml($container);

		movements.forEach((movement, index) => {
			const movementHTML = getHtmlTemplate.movement({ movement, index });
			$container.insertAdjacentHTML("afterbegin", movementHTML);
		});
	},
};

const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const currencies = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);

render.movements(account1.movements);
