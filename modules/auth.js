import { cookie } from "./cookie.js";

export const auth = {
	async login({ username, password }) {
		const response = await fetch("https://dummyjson.com/user/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username,
				password,
				expiresInMins: 30,
			}),
		});

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const user = await response.json();
		cookie.set("jwt", user.accessToken);

		return user;
	},
};
