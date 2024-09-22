import { domElements } from "./domElements.js";
import { getHtmlTemplate } from "./getHtmlTemplate.js";
import { formatBTC } from "./format.js";

export const ui = {
	removeInnerHtml(htmlElement) {
		htmlElement.innerHTML = "";
	},
	setAppVisibility(value) {
		const $app = domElements.containers.app;
		$app.style.opacity = value;
	},
	renderWelcome(firstName) {
		const $welcome = domElements.labels.welcome;
		$welcome.textContent = `Welcome back, ${firstName}!`;
	},
	renderTotal(amount) {
		const $balance = domElements.labels.balance;
		$balance.innerHTML = formatBTC(amount);
	},
	renderHistory(history) {
		const $container = domElements.containers.movements;

		this.removeInnerHtml($container);

		history.forEach((movement) => {
			const movementHTML = getHtmlTemplate.movement(movement);
			$container.insertAdjacentHTML("beforeend", movementHTML);
		});
	},
	renderUserData(user) {
		const totalBalance = user.history.reduce(
			(sum, cur) => sum + cur.movement,
			0
		);

		this.renderWelcome(user.firstName);
		this.renderTotal(totalBalance);
		this.renderHistory(user.history);

		this.setAppVisibility(1);
	},
};
