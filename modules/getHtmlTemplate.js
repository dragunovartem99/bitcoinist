export const getHtmlTemplate = {
	movement({ movement, index }) {
		const isDeposit = movement > 0;
		const movementType = isDeposit ? "deposit" : "withdrawal";

		return `
			<div class="movements__row">
				<div class="movements__type movements__type--${movementType}">
					${index + 1} ${movementType}
				</div>
				<div class="movements__date">24/01/2037</div>
				<div class="movements__value">${movement}₿</div>
			</div>;
		`;
	},
};
