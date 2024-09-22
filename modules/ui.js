import domElements from "./elementsDOM.js";
import { getHtmlTemplate } from "./getHtmlTemplate.js";
import { formatBTC } from "./format.js";

export const ui = {
	removeInnerHtml(htmlElement) {
		htmlElement.innerHTML = "";
	},
	setAppVisibility(value) {
		const { $app } = domElements.containers;
		$app.style.opacity = value;
	},
	renderWelcome({ firstName }) {
		const { $welcome } = domElements.labels;
		$welcome.textContent = `Welcome back, ${firstName}!`;
	},
	renderTotal({ history }) {
		const totalBalance = history.reduce(
			(sum, cur) => sum + cur.movement,
			0
		);

		const $balance = domElements.labels.balance;
		$balance.innerHTML = formatBTC(totalBalance);
	},
	renderHistory({ history }) {
		const $container = domElements.containers.movements;

		this.removeInnerHtml($container);

		history.forEach((movement) => {
			const movementHTML = getHtmlTemplate.movement(movement);
			$container.insertAdjacentHTML("beforeend", movementHTML);
		});
	},
	renderSummary({ history }) {
		const { sumIn: $income, sumOut: $withdrawn } = domElements.labels;

		const income = history.reduce((sum, cur) => {
			return cur.movement > 0 ? sum + cur.movement : sum;
		}, 0);

		const spent = history.reduce((sum, cur) => {
			return cur.movement < 0 ? sum + Math.abs(cur.movement) : sum;
		}, 0);

		$income.textContent = formatBTC(income);
		$withdrawn.textContent = formatBTC(spent);
	},
	renderUserData(user) {
		this.renderWelcome(user);
		this.renderTotal(user);
		this.renderHistory(user);
		this.renderSummary(user);

		this.setAppVisibility(1);
	},
};
