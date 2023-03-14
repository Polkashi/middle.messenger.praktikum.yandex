import Handlebars from 'handlebars'
import html from 'bundle-text:./chatsList.hbs'
import { links } from '/src/consts/global.js'
import { showDropDown } from '../../components/DropDown/dropDown'
import avatarBg from '/src/images/avatar-bg.jpg'

import '/src/components/Message/message'
import '/src/components/ChatItem/chatItem'

document.addEventListener('DOMContentLoaded', e => {
	if (window.location.pathname === '/chatsList') {
		const chatsListSelectedChatBtn = document.getElementById(
			'chatsList__selectedChat-btn'
		)
		const chatsListSelectedChatMenu = document.getElementById(
			'chatsList__selectedChat-menu'
		)

		const chatsListSelectedChatAttachFileBtn = document.getElementById(
			'chatsList__selectedChat-attachFileBtn'
		)
		const chatsListSelectedChatAttachFile = document.getElementById(
			'chatsList__selectedChat-attachFile'
		)

		chatsListSelectedChatBtn.addEventListener('click', e => {
			e.stopPropagation()
			showDropDown(e, chatsListSelectedChatMenu, 'left', 'bottom')
		})

		chatsListSelectedChatAttachFileBtn.addEventListener('click', e => {
			e.stopPropagation()
			showDropDown(e, chatsListSelectedChatAttachFile, 'right', 'top')
		})
	}
})

export const ChatsListPage = () => {
	const context = {
		links,
		usersList: [
			{
				name: 'Василий',
				date: '10:52',
				lastMessage: 'Привет, как ты?',
				unreadable: 2,
				url: avatarBg,
			},
			{
				name: 'Полина',
				date: '9:52',
				lastMessage: 'Солнце высоко',
				unreadable: 2,
				url: avatarBg,
			},
			{
				name: 'Сергей',
				date: '18:52',
				lastMessage: 'Луна близко',
				unreadable: 2,
				url: avatarBg,
			},
		],
		currentAvatar: avatarBg,
		selectedChat: false,
	}

	return Handlebars.compile(html)(context)
}
