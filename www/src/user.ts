import { renderBlock } from './lib.js';
import { UserData } from './interfaces/userData.js';
import { FavoritesAmmount } from './interfaces/favoritesAmmount.js';

export function getUserData(): UserData {
  const userData: unknown = JSON.parse(localStorage.getItem('user') as string);
  if (userData !== null) {
    return userData as UserData;
  } else {
    console.log('Error reading data from LocalStorage');
    return {
      userName: 'Ronald Reagan',
      avatarLink:
        'https://thumbs.dfs.ivi.ru/storage39/contents/e/2/a5d71cb7e21f1e32a087f2f4926c78.jpg',
    };
  }
}

export function getFavoritesAmount(): FavoritesAmmount {
  const favoritesAmmount: unknown = JSON.parse(
    localStorage.getItem('favoritesAmount') as string
  );
  if (typeof favoritesAmmount === 'object' && favoritesAmmount !== null) {
    return favoritesAmmount as FavoritesAmmount;
  } else {
    console.log('Error reading favorites from LocalStorage');
    return { favoriteItemsAmount: 5 };
  }
}

export function renderUserBlock(userName: string, avatarLink: string, favoriteItemsAmount: number) {
  const favoritesCaption: number | string = favoriteItemsAmount
    ? favoriteItemsAmount
    : 'ничего нет';
  const hasFavoriteItems: boolean = favoriteItemsAmount ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarLink}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${
  hasFavoriteItems ? ' active' : ''
}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}
