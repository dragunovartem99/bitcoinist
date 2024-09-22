export default {
	show({ text, type, ...rest }) {
		const className = {
			error: "toastify--error",
		}[type];

		Toastify({
			duration: 3000,
			gravity: "bottom",
			position: "right",
			stopOnFocus: true,
			className,
			text,
			...rest,
		}).showToast();
	},
};
