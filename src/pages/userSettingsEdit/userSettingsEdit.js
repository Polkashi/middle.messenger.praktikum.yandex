import Handlebars from 'handlebars'
import html from 'bundle-text:./UserSettingsEdit.hbs'
import { links } from '/src/consts/global.js'
import avatarBg from '/src/images/avatar-bg.jpg'

document.addEventListener('DOMContentLoaded', e => {
	if (window.location.pathname === '/userSettingsEdit') {
		const changeUserInfoBtn = document.getElementById('changeUserInfoBtnEdit')

		changeUserInfoBtn.addEventListener('click', e => {
			e.stopPropagation()
			window.location.pathname = 'userSettings'
		})
	}
})

export const UserSettingsEditPage = () => {
	const context = {
		links,
		avatarBg,
	}
	return Handlebars.compile(html)(context)
}
