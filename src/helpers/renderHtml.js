import Handlebars from 'handlebars'

export const renderHtml = html => {
	const compile = Handlebars.compile(html)

	const resultPage = compile()
	return resultPage
}
