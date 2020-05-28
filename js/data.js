let data = {
  days: ['Dia'],
  months: [
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
  ],
  years: ['Ano'],
  setYears: () => {
    for (let i = currentYear; i >= currentYear - 100; i--) {
      const newYear = i;
      this.years = [...this.years, newYear];
    }
    return this.years;
  },
};
