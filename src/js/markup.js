import menuDb from '../menu.json'
import menuMarkup from '../templates/templatearray.hbs'

const menuJs = document.querySelector('.js-menu')

// let result = menuMarkup(menuDb)
// menuJs.insertAdjacentHTML('beforeend',result)
menuJs.innerHTML = menuMarkup(menuDb)