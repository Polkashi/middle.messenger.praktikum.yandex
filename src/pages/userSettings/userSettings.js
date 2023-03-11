import Handlebars from 'handlebars'
import html from 'bundle-text:./userSettings.hbs'
import { links } from '/src/consts/global.js'

export const UserSettingsPage = () => {
	const context = {
		links,
	}
	return Handlebars.compile(html)(context)
}
