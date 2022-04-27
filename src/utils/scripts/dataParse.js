export const dataParse = (date) => {
  const list = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  let [year, month, day, hours, minutes] = date.split('.');
  month = list[Number(month) - 1];

  return `${day} ${month} ${year} в ${hours}:${minutes}`;
};
