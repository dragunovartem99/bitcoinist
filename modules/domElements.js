const documentSelect = document.querySelector.bind(document);

export const domElements = {
	labels: {
		welcome: documentSelect(".header__text"),
		date: documentSelect(".date"),
		balance: documentSelect(".balance__value"),
		sumIn: documentSelect(".summary__value--in"),
		sumOut: documentSelect(".summary__value--out"),
		interest: documentSelect(".summary__value--interest"),
		timer: documentSelect(".timer"),
	},
	containers: {
		app: documentSelect(".app"),
		movements: documentSelect(".movements"),
	},
	forms: {
		login: documentSelect("#form-login"),
	},
	buttons: {
		btnTransfer: documentSelect(".form__btn--transfer"),
		btnLoan: documentSelect(".form__btn--loan"),
		btnClose: documentSelect(".form__btn--close"),
		btnSort: documentSelect(".btn--sort"),
	},
	inputs: {
		inputTransferTo: documentSelect(".form__input--to"),
		inputTransferAmount: documentSelect(".form__input--amount"),
		inputLoanAmount: documentSelect(".form__input--loan-amount"),
		inputCloseUsername: documentSelect(".form__input--user"),
		inputClosePin: documentSelect(".form__input--pin"),
	},
};
