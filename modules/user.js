import cookie from "./cookie.js";
import makeRequest from "./makeRequest.js";
import { getWalletHistory } from "./getWalletHistory.js";

export default {
	async getUserData() {
		const token = cookie.get("jwt");
		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		};

		const user = await makeRequest("/auth/me", options);
		user.history = getWalletHistory({ userID: user.id });

		return user;
	},
};
