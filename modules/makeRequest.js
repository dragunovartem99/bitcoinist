const API_URL = "https://dummyjson.com";

export default function (resource, options, errorMessage) {
	return fetch(`${API_URL}${resource}`, options).then((response) => {
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return response.json();
	});
}
