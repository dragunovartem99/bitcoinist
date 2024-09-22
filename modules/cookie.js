export default {
	extractValue(chunks) {
		return chunks.pop().split(";").shift();
	},
	set(key, value) {
		document.cookie = `${key}=${value}`;
	},
	get(key) {
		// Insert ; to make it work when desired cookie is first
		const browserCookies = `; ${document.cookie}`;

		const chunks = browserCookies.split(`; ${key}=`);
		const hasKey = chunks.length === 2;

		if (hasKey) {
			return this.extractValue(chunks);
		}
	},
};
