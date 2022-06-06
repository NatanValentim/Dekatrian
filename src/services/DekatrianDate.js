import { months, specialDays } from '../util/consts';

export const DekatrianDate = () => {
  const date = new Date();
  const daysInMonth = 28;
  const monthsInYear = months.length;
  let dayOfTheYear = 0;
  
  const getDayOfTheYear = (now) => {
    now = now ? now : new Date();

    const start = new Date(now.getFullYear(), 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    return day;
  }

  const isAchronian = () => getDayOfTheYear(date) === 0;
  const isSincronian = () => getDayOfTheYear(date) === 1 && !(date.getFullYear() % 4);
  
  dayOfTheYear = isAchronian() || isSincronian() ? undefined : getDayOfTheYear(date);
  dayOfTheYear = !(date.getFullYear() % 4) ? dayOfTheYear - 1 : dayOfTheYear;

  const getDate = () => dayOfTheYear % daysInMonth;

  const getMonth = () => isAchronian() ? specialDays[0] : // Achronian
    isSincronian() ? specialDays[1] : // Sincronian
    months[Math.floor(dayOfTheYear / daysInMonth)];

  const getYear = () => date.getFullYear() + 10000;

  return {
    isAchronian: isAchronian(),
    isSincronian: isSincronian(),
    date: getDate(),
    month: getMonth(),
    year: getYear()
  };
}

export default DekatrianDate;