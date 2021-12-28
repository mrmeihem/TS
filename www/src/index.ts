import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', (): void => {
  renderUserBlock('Ronald Reagan', 'https://thumbs.dfs.ivi.ru/storage39/contents/e/2/a5d71cb7e21f1e32a087f2f4926c78.jpg', 5)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: (): void => {console.log('Уведомление закрыто')}}
  )
})
