const get = document.getElementById.bind(document);

export default {
	$formLogin: get("form-login"),

	$labelWelcome: get("label-welcome"),
	$labelIncoming: get("label-incoming"),
	$labelOutgoing: get("label-outgoing"),
	$labelTotalBalance: get("label-total-balance"),

	$containerMain: get("container-main"),
	$containerHistory: get("container-history"),

	$buttonSort: get("button-sort"),

	// date: get(".date"),
	// interest: get(".summary__value--interest"),
	// timer: get(".timer"),
};
