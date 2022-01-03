import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'



const userData: object = getUserData()
const favoriteItemsAmount: object = getFavoritesAmount()

window.addEventListener('DOMContentLoaded', (): void => {
  renderUserBlock(userData.userName, userData.avatarLink, favoriteItemsAmount.favoriteItemsAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: (): void => {console.log('Уведомление закрыто')}}
  )
})
