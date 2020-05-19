window.addEventListener('load', start);

// global variables
var days = ['Dia'];
// prettier-ignore
var months = ['Mês', 'Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
var years = ['Ano'];

generateDates(days, years);

function generateDates(arrayDays, arrayYears) {
  for (let i = 1; i <= 31; i++) {
    arrayDays.push(i);
  }
  for (let i = 2020; i >= 1990; i--) {
    arrayYears.push(i);
  }
}

function start() {
  var selectDay = document.querySelector('#day');
  var selectMonth = document.querySelector('#month');
  var selectYear = document.querySelector('#year');

  insertOptions(selectDay, days);
  insertOptions(selectMonth, months);
  insertOptions(selectYear, years);
}

function insertOptions(element, array) {
  for (var i = 0; i < array.length; i++) {
    var currentDate = array[i];

    var option = document.createElement('option');
    option.textContent = currentDate;

    element.appendChild(option);
  }
}
