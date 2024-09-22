import { domElements } from "./domElements.js";
import { getHtmlTemplate } from "./getHtmlTemplate.js";

export const render = {
	removeInnerHtml(htmlElement) {
		htmlElement.innerHTML = "";
	},
	totalBalance(amount) {
		const {
			labels: { balance: $balance },
		} = domElements;

		$balance.innerHTML = `${amount}₿`;
	},
	history(history) {
		const {
			containers: { movements: $container },
		} = domElements;

		this.removeInnerHtml($container);

		history.forEach(({ movement, id }) => {
			const movementHTML = getHtmlTemplate.movement({ movement, id });
			$container.insertAdjacentHTML("afterbegin", movementHTML);
		});
	},
	ui(user) {
		console.log(user.history);

		const totalBalance = user.history.reduce(
			(sum, cur) => sum + cur.movement,
			0
		);

		this.totalBalance(totalBalance);
		this.history(user.history);
	},
};
