import { months, specialDays } from '../util/consts';
import GregorianDate from './GregorianDate';

export const DekatrianDate = () => {
  const date = GregorianDate().date;
  const daysInMonth = 28;
  const monthsInYear = 13;
  let dayOfTheYear = 0;
  
  const getDayOfTheYear = (now) => {
    const start = new Date(now.getFullYear(), 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    
    return day;
  }

  const isAchronian = () => getDayOfTheYear(date) === 1;
  const isSincronian = () => getDayOfTheYear(date) === 2 && date.getFullYear() % 4 === 0;
  
  dayOfTheYear = isAchronian() || isSincronian() ? undefined : getDayOfTheYear(date);
  console.log(dayOfTheYear);

  const getDate = () => Math.floor((dayOfTheYear / monthsInYear) + 1);

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