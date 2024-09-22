import { getHtmlTemplate } from "./getHtmlTemplate.js";

export const render = {
	removeInnerHtml(htmlElement) {
		htmlElement.innerHTML = "";
	},
	movements(movements) {
		const {
			containers: { movements: $container },
		} = domElements;

		this.removeInnerHtml($container);

		movements.forEach((movement, index) => {
			const movementHTML = getHtmlTemplate.movement({ movement, index });
			$container.insertAdjacentHTML("afterbegin", movementHTML);
		});
	},
	user(user) {
		console.log(user);
	},
};
