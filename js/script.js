// global variables
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

let date = new Date();
const currentYear = date.getFullYear();

/* Funções das variáveis booleanas:
 * isLeapYear -> Lembrar se o ano é ou não bissexto
 * -Caso o usuário escolha o mês de fevereiro apos ter escolhido
 * um ano bissexto
 * isFebruary -> Lembrar se o mês é ou não fevereiro
 * -Caso o usuário escolha um ano bissexto após ter escolhido
 * o mês de fevereiro
 */
let isLeapYear = false;
let isFebruary = false;

generateDates(days, years);

function generateDates(arrayDays, arrayYears) {
  for (let i = 1; i <= 31; i++) {
    arrayDays.push(i);
  }
  for (let i = currentYear; i >= 1990; i--) {
    arrayYears.push(i);
  }
}

window.addEventListener('load', () => {
  let selectDay = document.querySelector('#day');
  let selectMonth = document.querySelector('#month');
  let selectYear = document.querySelector('#year');

  insertOptionsDaysMonths(selectDay, days);
  insertOptionsDaysMonths(selectMonth, months);
  insertOptionsYears(selectYear, years);

  function checkMonth(event) {
    function generateDays(month) {
      let countDays = 0;
      // prettier-ignore
      switch (parseInt(month)) {
        /*Meses com 31 dias: Janeiro(1), Março(3), Maio(5), 
        Julho(7), Agosto(8), Outubro(10) e dezembro(12)*/
        case 1: case 3: case 5: case 7: 
        case 8: case 10: case 12: countDays = 31; 
        isFebruary = false;
        break;

        /*Meses com 30 dias: Abril(4), Junho(6), Setembro(9), 
        Novembro(11)*/
        case 4: case 6: case 9: case 11: countDays = 30; 
        isFebruary = false;
        break;
        
        default: 
        /*
         * Se o ano for bissexto tem 29
         * Se o ano não for bissexto tem 28
         */
        isLeapYear === true ? countDays = 29 : countDays = 28;
        isFebruary = true;
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
    insertOptionsDaysMonths(selectDay, days);
  }

  function checkYear(event) {
    function generateFebruaryDays(februaryDays) {
      selectDay.innerHTML = '';
      days.splice(1, 31);

      for (let i = 1; i <= februaryDays; i++) {
        days.push(i);
      }

      insertOptionsDaysMonths(selectDay, days);
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
});

function insertOptionsDaysMonths(element, array) {
  for (let i = 0; i < array.length; i++) {
    let currentDate = array[i];

    let option = document.createElement('option');
    option.textContent = currentDate;
    option.value = i;
    element.appendChild(option);
  }
}

function insertOptionsYears(element, array) {
  for (let i = 0; i < array.length; i++) {
    let currentDate = array[i];

    let option = document.createElement('option');
    option.textContent = currentDate;
    element.appendChild(option);
  }
}
