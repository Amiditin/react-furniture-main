export const getCurrentDate = () => {
  const newDate = new Date();
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  return `${year}\
.${month < 10 ? '0' + String(month) : month}\
.${day < 10 ? '0' + String(day) : day}\
.${hours < 10 ? '0' + String(hours) : hours}\
.${minutes < 10 ? '0' + String(minutes) : minutes}`;
};
