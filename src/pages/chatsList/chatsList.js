import Handlebars from 'handlebars'
import html from 'bundle-text:./chatsList.hbs'
import { links } from '/src/consts/global.js'

export const ChatsListPage = () => {
	const context = {
		links,
	}
	return Handlebars.compile(html)(context)
}
