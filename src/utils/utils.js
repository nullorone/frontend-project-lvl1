const numberLimit = 100;

// Return random number of limit
const generateNumberOfRange = (
  min = 0,
  max = numberLimit,
) => Math.floor(min + Math.random() * (max + 1 - min));

export default generateNumberOfRange;
