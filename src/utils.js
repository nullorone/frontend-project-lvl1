// Return random number of limit
const generateNumberOfRange = (
  min,
  max,
) => Math.floor(min + Math.random() * (max + 1 - min));

export default generateNumberOfRange;
