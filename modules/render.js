import { domElements } from "./domElements.js";
import { getHtmlTemplate } from "./getHtmlTemplate.js";

export const render = {
	removeInnerHtml(htmlElement) {
		htmlElement.innerHTML = "";
	},
	totalBalance(amount) {
		const $balance = domElements.labels.balance;

		$balance.innerHTML = `${amount}₿`;
	},
	history(history) {
		const $container = domElements.containers.movements;

		this.removeInnerHtml($container);

		history.forEach(({ movement, id }) => {
			const movementHTML = getHtmlTemplate.movement({ movement, id });
			$container.insertAdjacentHTML("afterbegin", movementHTML);
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
