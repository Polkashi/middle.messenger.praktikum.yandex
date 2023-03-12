// pages
import { LoginPage } from '/src/pages/login/login'
import { RegistrationPage } from '/src/pages/registration/registration'
import { UserSettingsPage } from '/src/pages/userSettings/userSettings'
import { ChatsListPage } from '/src/pages/chatsList/chatsList'
import { Error404Page } from '/src/pages/404/404'
import { Error500Page } from '/src/pages/500/500'

// components
import '/src/components/SwitcherPages/switcherPages'
import '/src/components/TextField/textField'
import '/src/components/Button/button'
import '/src/components/DropDown/dropDown'

const root = document.getElementById('root')
root.innerHTML = ''

switch (window.location.pathname) {
	case '/login':
		root.innerHTML = LoginPage()
		break
	case '/registration':
		root.innerHTML = RegistrationPage()
		break
	case '/chatsList':
		root.innerHTML = ChatsListPage()
		break
	case '/userSettings':
		root.innerHTML = UserSettingsPage()
		break
	case '/404':
		root.innerHTML = Error404Page()
		break
	case '/500':
		root.innerHTML = Error500Page()
		break
	default:
		root.innerHTML = LoginPage()
		break
}
