export default {
	set(key, value) {
		document.cookie = `${key}=${value}`;
	},
	get(key) {
		const pair = `; ${document.cookie}`.match(`;\\s*${key}=([^;]+)`);
		return pair ? pair[1] : null;
	},
};
