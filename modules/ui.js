import elementsDOM from "./elementsDOM.js";
import { getHtmlTemplate } from "./getHtmlTemplate.js";
import { formatBTC } from "./format.js";

export default {
	removeInnerHtml(htmlElement) {
		htmlElement.innerHTML = "";
	},

	setAppVisibility(value) {
		const { $containerMain } = elementsDOM;

		$containerMain.style.opacity = value;
	},

	renderWelcome(firstName) {
		const { $labelWelcome } = elementsDOM;

		$labelWelcome.textContent = `Welcome back, ${firstName}!`;
	},

	renderHistory(history) {
		const { $containerHistory } = elementsDOM;

		this.removeInnerHtml($containerHistory);

		history.forEach((entry) => {
			const entryTemplate = getHtmlTemplate.movement(entry);
			$containerHistory.insertAdjacentHTML("beforeend", entryTemplate);
		});
	},

	renderTotal(totalBalance) {
		const { $labelTotalBalance } = elementsDOM;

		$labelTotalBalance.innerHTML = formatBTC(totalBalance);
	},

	renderSummary({ incoming, outgoing }) {
		const { $labelIncoming, $labelOutgoing } = elementsDOM;

		$labelIncoming.textContent = formatBTC(incoming);
		$labelOutgoing.textContent = formatBTC(outgoing);
	},

	renderUserData({ firstName, history }) {
		const incoming = history.reduce((sum, cur) => {
			return cur.movement > 0 ? sum + cur.movement : sum;
		}, 0);

		const outgoing = history.reduce((sum, cur) => {
			return cur.movement < 0 ? sum + Math.abs(cur.movement) : sum;
		}, 0);

		const totalBalance = incoming - outgoing;

		this.setAppVisibility(1);
		this.renderWelcome(firstName);

		this.renderHistory(history);

		this.renderTotal(totalBalance);
		this.renderSummary({ incoming, outgoing });
	},
};
