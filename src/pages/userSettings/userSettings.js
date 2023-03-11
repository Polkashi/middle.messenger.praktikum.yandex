import Handlebars from 'handlebars'
import html from 'bundle-text:./userSettings.hbs'
import { links } from '/src/consts/global.js'
import avatarBg from '/src/images/avatar-bg.jpg'

export const UserSettingsPage = () => {
	console.log(Handlebars.compile(html)())
	const context = {
		links,
		avatarBg,
	}
	return Handlebars.compile(html)(context)
}
