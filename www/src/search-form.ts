import { renderBlock } from './lib.js';
import { SearchFormData } from './interfaces/searchformdata.js';
import { searchFormProcessing } from './search-results.js';

function tomorrow(): Date {
  const tomorrow: Date = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}

function monthLater(): Date {
  const monthLaterDate: Date = new Date();
  monthLaterDate.setMonth(monthLaterDate.getMonth() + 1);
  return monthLaterDate;
}

function lastDayOfTheMonth(currentDate: Date): number {
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
}

function addZero(date: number): string {
  let dateWithZero: string;
  if (date < 10) {
    dateWithZero = `0${date}`;
  } else {
    dateWithZero = `${date}`;
  }
  return dateWithZero;
}

function threeDaysLaterDate(arrivalDate: Date): Date {
  const threeDaysLaterDate: Date = new Date();
  threeDaysLaterDate.setDate(arrivalDate.getDate() + 3);
  return threeDaysLaterDate;
}

const currentDate: Date = new Date();
const tomorrowDate: Date = tomorrow();
const monthLaterDate: Date = monthLater();

export function renderSearchFormBlock(
  arrivalDateInput: Date = tomorrowDate,
  departureDateInput: Date = threeDaysLaterDate(currentDate)
): void {
  const arrivalDateString = `${arrivalDateInput.getFullYear()}-${addZero(
    arrivalDateInput.getMonth() + 1
  )}-${addZero(arrivalDateInput.getDate())}`;
  const arrivalDateStringMin = `${currentDate.getFullYear()}-${addZero(
    currentDate.getMonth() + 1
  )}-${addZero(currentDate.getDate())}`;
  const arrivalDateStringMax = `${monthLaterDate.getFullYear()}-${addZero(
    monthLaterDate.getMonth() + 1
  )}-${lastDayOfTheMonth(monthLaterDate)}`;

  const departureDateString = `${departureDateInput.getFullYear()}-${addZero(
    departureDateInput.getMonth() + 1
  )}-${addZero(departureDateInput.getDate())}`;
  const departureDateStringMin = arrivalDateString;
  const departureDateStringMax = arrivalDateStringMax;

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrivalDateString}" min="${arrivalDateStringMin}" max="${arrivalDateStringMax}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departureDateString}" min="${departureDateStringMin}" max="${departureDateStringMax}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id='findButton'>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );

  const checkInInput = document.getElementById(
    'check-in-date'
  ) as HTMLInputElement;
  const checkOutInput = document.getElementById(
    'check-out-date'
  ) as HTMLInputElement;
  const maxPriceInput = document.getElementById(
    'max-price'
  ) as HTMLInputElement;
  const button = document.getElementById('findButton') as HTMLElement;

  button.onclick = (ev: MouseEvent): void => {
    ev.preventDefault();
    const searchForm: SearchFormData = {
      city: 'Санкт-Петербург',
      checkInDate: checkInInput.value,
      checkOutDate: checkOutInput.value,
      maxPrice: +maxPriceInput.value,
    };
    searchFormProcessing(searchForm);
  };
}
