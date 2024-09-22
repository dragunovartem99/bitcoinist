import { domElements } from "./domElements.js";
import { getHtmlTemplate } from "./getHtmlTemplate.js";
import { formatBTC } from "./format.js";

export const render = {
	removeInnerHtml(htmlElement) {
		htmlElement.innerHTML = "";
	},
	totalBalance(amount) {
		const $balance = domElements.labels.balance;
		$balance.innerHTML = formatBTC(amount);
	},
	history(history) {
		const $container = domElements.containers.movements;

		this.removeInnerHtml($container);

		history.forEach((movement) => {
			const movementHTML = getHtmlTemplate.movement(movement);
			$container.insertAdjacentHTML("beforeend", movementHTML);
		});
	},
	ui(user) {
		const totalBalance = user.history.reduce(
			(sum, cur) => sum + cur.movement,
			0
		);

		this.totalBalance(totalBalance);
		this.history(user.history);
	},
};
