"use strict";

import { domElements } from "./modules/domElements.js";
import { auth } from "./modules/auth.js";
import { user } from "./modules/user.js";
import { render } from "./modules/render.js";

domElements.forms.login.addEventListener("submit", function (event) {
	event.preventDefault();

	const username = this["login-username"].value;
	const password = this["login-password"].value;

	auth.login({ username, password })
		.then(user.getUserData)
		.then(render.ui.bind(render))
		.catch(console.warn)
		.finally(() => this.reset());
});
