import Handlebars from 'handlebars'
import html from 'bundle-text:./DropDown.hbs'

// Handlebars.registerPartial('DropDown', html)

Handlebars.registerHelper('DropDown', function (options) {
	let id = ''
	if (options.hash.id) {
		id = options.hash.id
	}
	return `<div class="dropDown" id=${id}>${options.fn(this)}</div>`
})

export const showDropDown = (e, ModalNode, positionX, positionY) => {
	const widthCard = ModalNode.offsetWidth
	const heightCard = ModalNode.clientHeight
	const btnWidth = e.target.clientHeight
	const shiftLeft = positionX === 'left' ? e.x - widthCard : e.x
	const shiftRight =
		positionY === 'top' ? e.y - heightCard - btnWidth : e.y + btnWidth

	ModalNode.classList.toggle('active')
	ModalNode.style.cssText = `top: ${shiftRight}px; left: ${shiftLeft}px`
}
