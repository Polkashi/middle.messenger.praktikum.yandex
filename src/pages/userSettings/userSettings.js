import Handlebars from 'handlebars'
import html from 'bundle-text:./UserSettings.hbs'
import { links } from '/src/consts/global.js'
import avatarBg from '/src/images/avatar-bg.jpg'

document.addEventListener('DOMContentLoaded', e => {
	if (window.location.pathname === '/userSettings') {
		const changeUserInfoBtn = document.getElementById('changeUserInfoBtn')

		changeUserInfoBtn.addEventListener('click', e => {
			e.stopPropagation()
			window.location.pathname = 'userSettingsEdit'
		})
	}
})

export const UserSettingsPage = () => {
	const context = {
		links,
		avatarBg,
	}
	return Handlebars.compile(html)(context)
}
