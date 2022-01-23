import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js';
import { renderToast } from './lib.js';
import { UserData } from './interfaces/userData.js';
import { FavoritesAmmount } from './interfaces/favoritesAmmount.js';

const userData: UserData = getUserData(); // добавить интерфейс
const favoriteItemsAmount: FavoritesAmmount = getFavoritesAmount();

window.addEventListener('DOMContentLoaded', (): void => {
  renderUserBlock(
    userData.userName,
    userData.avatarLink,
    favoriteItemsAmount.favoriteItemsAmount
  );
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: (): void => {
        console.log('Уведомление закрыто');
      },
    }
  );
});
