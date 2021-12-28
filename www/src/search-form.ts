import { renderBlock } from './lib.js'

// Функция должна принимать дату въезда и дату выезда. 
// При этом минимальная дата, которую можно выбрать это дата сегодняшнего дня, а максимальная дата - последний день следующего месяца. Будем считать это ограничениями сервиса. По умолчанию поля заполняются следующим образом. Дата въезда это следующий день от текущей даты. Дата выезда - плюс два дня от даты въезда.

function tomorrow(): Date {
  const tomorrow: Date = new Date;
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}

function monthLater(): Date {
  const monthLaterDate: Date = new Date();
  monthLaterDate.setMonth(monthLaterDate.getMonth() + 1);
  return monthLaterDate
}

function lastDayOfTheMonth(currentDate:Date): number {
  return (new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)).getDate();
}

function addZero(date:number):string {
  let dateWithZero: string
  if (date < 10) {
    dateWithZero = `0${date}`;
  } else {
    dateWithZero = `${date}`;
  }
  return dateWithZero
}

function threeDaysLater(arrivalDate: Date): Date {
  const threeDaysLater: Date = new Date;
  threeDaysLater.setDate(arrivalDate.getDate() + 3);
  return threeDaysLater;
}

const currentDate: Date = new Date();
const tomorrowDate: Date = tomorrow();
const monthLaterDate: Date = monthLater();

export function renderSearchFormBlock (arrivalDateInput: Date = tomorrowDate, departureDateInput: Date = threeDaysLater(currentDate)): void {

  const arrivalDate = `${arrivalDateInput.getFullYear()}-${addZero(arrivalDateInput.getMonth() + 1)}-${addZero(arrivalDateInput.getDate())}`;
  const arrivalDateMin = `${currentDate.getFullYear()}-${addZero(currentDate.getMonth() + 1)}-${addZero(currentDate.getDate())}`;
  const arrivalDateMax = `${monthLaterDate.getFullYear()}-${addZero(monthLaterDate.getMonth() + 1)}-${lastDayOfTheMonth(monthLaterDate)}`;

  const departureDate = `${departureDateInput.getFullYear()}-${addZero(departureDateInput.getMonth() + 1)}-${addZero(departureDateInput.getDate())}`;
  const departureDateMin = arrivalDate;
  const departureDateMax = arrivalDateMax;

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город ${arrivalDate}</label>
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
            <input id="check-in-date" type="date" value="${arrivalDate}" min="${arrivalDateMin}" max="${arrivalDateMax}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departureDate}" min="${departureDateMin}" max="${departureDateMax}" name="checkout" />
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
  )

  const checkInInput = document.getElementById('check-in-date') as HTMLInputElement;
  const checkOutInput = document.getElementById('check-out-date') as HTMLInputElement;
  const maxPriceInput = document.getElementById('max-price') as HTMLInputElement;
  const button = document.getElementById('findButton') as HTMLElement;

  button.onclick = (ev:MouseEvent):void => {
    ev.preventDefault();
    console.log(checkInInput.value);
    console.log(checkOutInput.value);
    console.log(maxPriceInput.value)
  }
}
