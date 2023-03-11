import Handlebars from 'handlebars'
import html from 'bundle-text:./registration.hbs'
import { links } from '/src/consts/global.js'

export const RegistrationPage = () => {
	const context = {
		links,
	}
	return Handlebars.compile(html)(context)
}
