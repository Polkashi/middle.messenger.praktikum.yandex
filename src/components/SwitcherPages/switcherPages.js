import Handlebars from 'handlebars'
import html from 'bundle-text:./SwitcherPages.hbs'

Handlebars.registerPartial('SwitcherPages', html)

document.addEventListener('DOMContentLoaded', e => {
	const switcherPagesBtn = document.querySelector('.switcherPages')

	if (switcherPagesBtn) {
		switcherPagesBtn.addEventListener('click', e => {
			switcherPagesBtn.classList.toggle('showLinks')
		})
	}
})
