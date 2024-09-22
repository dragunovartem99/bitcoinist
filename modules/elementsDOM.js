const get = document.querySelector.bind(document);

export default {
	$formLogin: get("#form-login"),

	$labelWelcome: get("#header-text"),
	$labelIncoming: get("#incoming"),
	$labelOutgoing: get("#outgoing"),
	$labelTotalBalance: get("#total-balance"),

	$containerMain: get("#app"),
	$containerHistory: get("#history-list"),

	$buttonSort: get(".btn--sort"),

	// date: get(".date"),
	// interest: get(".summary__value--interest"),
	// timer: get(".timer"),
};
