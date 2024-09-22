import { domElements } from "./domElements.js";
import { getHtmlTemplate } from "./getHtmlTemplate.js";

export const render = {
	removeInnerHtml(htmlElement) {
		htmlElement.innerHTML = "";
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
		this.history(user.history);
	},
};
