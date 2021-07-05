import store from './store'
import member from './member'

const json = {
	store,
	member,
}

export default (name) => new Promise(resolve => resolve(json[name]), 500)