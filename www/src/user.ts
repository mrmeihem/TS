import { renderBlock } from './lib.js'


// getUserData, которая читает из localStorage ключ user. Подразумевается, что ключ содержит объект с полями username и avatarUrl.


export function getUserData (): object {
  // *** Вроде ж ключ в localstorage может содержать только строку? Рискну предположить, что объект храниться в виде JSON
  const userData: unknown = JSON.parse(localStorage.getItem('user'))
  if (typeof userData === 'object' && userData !== null) {
    return userData as object
  } else {
    console.log('Error reading data from LocalStorage')
    return {userName: 'Ronald Reagan', avatarLink: 'https://thumbs.dfs.ivi.ru/storage39/contents/e/2/a5d71cb7e21f1e32a087f2f4926c78.jpg'}
  }
}

// getFavoritesAmount, которая читает из lacalStorage ключ favoritesAmount. Ключ должен содержать количество предметов, добавленных пользователем в избранное. Для обеих функций применить подход с unknown, чтобы валидировать содержимое localStorage.

export function getFavoritesAmount (): object {
  const favoritesAmmount: unknown = JSON.parse(localStorage.getItem('favoritesAmount'))
  if (typeof favoritesAmmount === 'object' && favoritesAmmount !== null) {
    return favoritesAmmount as object
  } else {
    console.log('Error reading favorites from LocalStorage')
    return {favoriteItemsAmount: 5}
  }
}

// Написать функцию renderUserBlock, которая принимает имя пользователя, ссылку на аватар и количество избранных. Последнее поле является необязательным. Использовать эти данные для вывода блока пользователя.

// Функция должна принимать три аргумента: имя пользователя, ссылка на его аватар и количество элементов в избранном. Аргументы должны иметь подходящие для них типы. Аргументы должны использоваться для соответствующих целей. Убедиться, что следующая логика работает верно, а если нет, то внести правки. 
//Если количество избранных объектов меньше одного, то нужно выводить сообщение “ничего нет” и иконка сердечка должны быть не закрашена. Иначе иконка сердечка закрашена и рядом просто выводится количество избранных объектов. Все стили уже присутствуют, необходима только логика.

// export function renderUserBlock (userName: string, avatarLink: string, favoriteItemsAmount?: number) {

export function renderUserBlock (userName, avatarLink, favoriteItemsAmount) {
  const favoritesCaption: number | string = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems: boolean = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarLink}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
