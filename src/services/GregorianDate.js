export const GregorianDate = () => {
  const date = new Date(
    // 2022, // Year
    // 0, // Month
    // 28 // Day
  );

  return {
    date: date,
    day: date.getDate(),
  };
}

export default GregorianDate;
