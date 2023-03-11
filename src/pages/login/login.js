import Handlebars from 'handlebars'
import html from 'bundle-text:./login.hbs'
import { links } from '/src/consts/global.js'

import '/src/components/SwitcherPages/switcherPages'
export const LoginPage = () => {
	const context = {
		links,
	}
	return Handlebars.compile(html)(context)
}
