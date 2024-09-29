"use strict";

import elementsDOM from "./modules/elementsDOM.js";
import cookie from "./modules/cookie.js";
import auth from "./modules/auth.js";
import user from "./modules/user.js";
import ui from "./modules/ui.js";
import notification from "./modules/notification.js";

const { $formLogin } = elementsDOM;

function showLoginHint() {
	notification.show({
		text: "Click on me to find your\nusername and password",
		duration: 10000,
		destination: "https://dummyjson.com/users?limit=0",
		newWindow: true,
	});
}

document.addEventListener("DOMContentLoaded", function () {
	const token = cookie.get("jwt");

	if (!token) {
		showLoginHint();
	}
});

$formLogin.addEventListener("submit", function (event) {
	event.preventDefault();

	const { value: username } = this["login-username"];
	const { value: password } = this["login-password"];

	auth.login({ username, password })
		.then(user.getUserData)
		.then((user) => ui.renderUserData(user))
		.then(() => this.reset())
		.catch((error) => {
			console.warn(error);
			notification.show({ type: "error", text: error.message });
		});
});
