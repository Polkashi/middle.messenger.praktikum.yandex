import html from 'bundle-text:./404.hbs'
import { renderHtml } from '/src/helpers/renderHtml'

export const Error404Page = renderHtml(html)
