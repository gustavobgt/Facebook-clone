// global variables
const date = new Date();
const currentYear = date.getFullYear();

let days = ['Dia'];
const months = [
  'Mês',
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Maio',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];
let years = ['Ano'];

let isLeapYear = false;
let isFebruary = false;

let selectDay = null;
let selectMonth = null;
let selectYear = null;

const setDays = (days) => {
  for (let i = 1; i <= 31; i++) {
    let newDay = i;
    days = [...days, newDay];
  }

  return days;
};

const setYears = (years) => {
  for (let i = currentYear; i >= currentYear - 100; i--) {
    let newYear = i;
    years = [...years, newYear];
  }

  return years;
};

days = setDays(days);
years = setYears(years);

window.addEventListener('load', () => {
  selectDay = document.querySelector('#day');
  selectMonth = document.querySelector('#month');
  selectYear = document.querySelector('#year');

  insertDaysMonthsOptions(selectDay, days);
  insertDaysMonthsOptions(selectMonth, months);
  insertYearsOptions(years);

  function checkMonth(event) {
    function generateDays(month) {
      let countDays = 0;
      // prettier-ignore
      switch (parseInt(month)) {
        /*
         * Se o ano for bissexto tem 29 dias
         * Se o ano não for bissexto tem 28 dias
         */
        case 2:
        isLeapYear === true ? countDays = 29 : countDays = 28;
        isFebruary = true;
        break;

        /*Meses com 30 dias: Abril(4), Junho(6), Setembro(9), 
        Novembro(11)*/
        case 4: case 6: case 9: case 11: countDays = 30; 
        isFebruary = false;
        break;

        /*Meses com 31 dias*/
        default:
        countDays = 31; 
        isFebruary = false;
        break; 
      }

      for (let i = 1; i <= countDays; i++) {
        days.push(i);
      }
    }

    function render() {
      selectDay.innerHTML = '';
      days.splice(1, 31);
    }

    let selectedMonth = event.target.value;

    render();
    generateDays(selectedMonth);
    insertDaysMonthsOptions(selectDay, days);
  }

  function checkYear(event) {
    function generateFebruaryDays(februaryDays) {
      selectDay.innerHTML = '';
      days.splice(1, 31);

      for (let i = 1; i <= februaryDays; i++) {
        days.push(i);
      }

      insertDaysMonthsOptions(selectDay, days);
    }

    let currentYear = parseInt(event.target.value);
    // prettier-ignore
    if (currentYear % 4 === 0 && currentYear % 100 !== 0 || 
        currentYear % 400 === 0) {
      isLeapYear = true;

      if (isFebruary) {
        generateFebruaryDays(29);
      }

    } else {
      isLeapYear = false;

      generateFebruaryDays(28);
    }
  }

  selectMonth.addEventListener('change', checkMonth);
  selectYear.addEventListener('change', checkYear);

  // handleYearsOptions();
});

function insertDaysMonthsOptions(element, array) {
  for (let i = 0; i < array.length; i++) {
    let currentDate = array[i];

    let option = document.createElement('option');
    option.textContent = currentDate;
    option.value = i;
    element.appendChild(option);
  }
}

function insertYearsOptions(array) {
  let optionsHTML = '';

  array.forEach((year) => {
    const optionHTML = `
    <option>${year}</option>
    `;

    optionsHTML += optionHTML;
  });

  selectYear.innerHTML = optionsHTML;
}
