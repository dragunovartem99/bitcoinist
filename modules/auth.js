import { cookie } from "./cookie.js";
import makeRequest from "./makeRequest.js";

export default {
	async login({ username, password }) {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, password, expiresInMins: 30 }),
		};

		const user = await makeRequest("/user/login", options).catch(() => {
			throw new Error("Wrong credentials");
		});

		cookie.set("jwt", user.accessToken);

		return user;
	},
};
