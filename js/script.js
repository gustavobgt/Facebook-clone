console.log('Test');
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

  function checkMonth(event) {
    function render() {
      function generateDays(month) {
        var countDays = 0;
        // prettier-ignore
        switch (parseInt(month)) {
          /*Meses com 31 dias: Janeiro(1), Março(3), Maio(5), 
          Julho(7), Agosto(8), Outubro(10) e dezembro(12)*/
          case 1: case 3: case 5: case 7: 
          case 8: case 10: case 12: countDays = 31; break;
          /*Meses com 30 dias: Abril(4), Junho(6), Setembro(9), 
          Novembro(11)*/
          case 4: case 6: case 9: case 11: countDays = 30; break;
          /*Fevereiro: 29 ou 28 dias*/
          default: countDays = 29; break;
        }

        for (let i = 1; i <= countDays; i++) {
          days.push(i);
        }
      }

      selectDay.innerHTML = '';
      days.splice(1, 31);

      var selectedMonth = event.target.value;
      generateDays(selectedMonth);
      insertOptions(selectDay, days);
    }

    render();
  }

  selectMonth.addEventListener('change', checkMonth);
}

function insertOptions(element, array) {
  for (var i = 0; i < array.length; i++) {
    var currentDate = array[i];

    var option = document.createElement('option');
    option.textContent = currentDate;
    option.value = i;
    element.appendChild(option);
  }
}
