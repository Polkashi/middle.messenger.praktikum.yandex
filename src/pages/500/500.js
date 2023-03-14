import Handlebars from 'handlebars'
import html from 'bundle-text:./500.hbs'
import { links } from '/src/consts/global.js'

export const Error500Page = () => {
	const context = {
		links,
	}
	return Handlebars.compile(html)(context)
}
