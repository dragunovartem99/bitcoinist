import { cookie } from "./cookie.js";

export const user = {
	async getUserData() {
		const token = cookie.get("jwt");

		const response = await fetch("https://dummyjson.com/auth/me", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const user = await response.json();
		return user;
	},
};
