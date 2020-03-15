const DECIMAL_ORDER = [10, 100, 1000, 10000, 100000, 1000000];

const getRandomIndexToLimit = (limit) => Math.floor(Math.random() * limit);

// Return random number
const generateNumberOfRange = (
  min = 0,
  max = DECIMAL_ORDER[getRandomIndexToLimit(DECIMAL_ORDER.length)],
) => Math.floor(min + Math.random() * (max + 1 - min));

export {
  generateNumberOfRange,
  getRandomIndexToLimit,
};
