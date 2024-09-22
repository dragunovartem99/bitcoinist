"use strict";

import { domElements } from "./modules/domElements.js";
import { auth } from "./modules/auth.js";
import { user } from "./modules/user.js";
import { ui } from "./modules/ui.js";

domElements.forms.login.addEventListener("submit", function (event) {
	event.preventDefault();

	const username = this["login-username"].value;
	const password = this["login-password"].value;

	auth.login({ username, password })
		.then(user.getUserData)
		.then(ui.renderUserData.bind(ui))
		.catch((error) => {
			console.warn(error);
			alert(error.message);
		})
		.finally(() => this.reset());
});
