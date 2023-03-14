import Handlebars from 'handlebars'
import html from 'bundle-text:./404.hbs'
import { links } from '/src/consts/global.js'

export const Error404Page = () => {
	const context = {
		links,
	}
	return Handlebars.compile(html)(context)
}
