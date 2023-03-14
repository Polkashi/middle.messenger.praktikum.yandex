import Handlebars from 'handlebars'
import html from 'bundle-text:./ChatItem.hbs'
import '/src/components/Avatar/avatar'

Handlebars.registerPartial('ChatItem', html)
