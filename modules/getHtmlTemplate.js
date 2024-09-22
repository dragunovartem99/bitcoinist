import { formatBTC } from "./format.js";

export default {
	movement({ movement, id, timestamp }) {
		const isDeposit = movement > 0;
		const movementType = isDeposit ? "deposit" : "withdrawal";
		const date = new Date(timestamp).toLocaleString();

		return `
			<div class="movements__row">
				<div class="movements__type movements__type--${movementType}">
					${id} ${movementType}
				</div>
				<div class="movements__date">${date}</div>
				<div class="movements__value">${formatBTC(movement)}</div>
			</div>;
		`;
	},
};
