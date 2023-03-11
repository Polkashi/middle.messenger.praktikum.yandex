import Handlebars from 'handlebars'
import html from 'bundle-text:./login.hbs'
import { links } from '/src/consts/global.js'

import '/src/components/TextField/TextField'
import '/src/components/Button/Button'
import '/src/components/SwitcherPages/switcherPages'

export const LoginPage = () => {
	const context = {
		links,
	}
	return Handlebars.compile(html)(context)
}
