const getRandomIndexToLimit = (limit) => Math.floor(Math.random() * limit);

// Return random number
const generateNumber = () => {
  const decimalOrder = [10, 100, 1000, 10000, 100000, 1000000];
  const indexDecimalOrder = getRandomIndexToLimit(decimalOrder.length);

  return Math.floor(Math.random() * decimalOrder[indexDecimalOrder]);
};

export {
  generateNumber,
  getRandomIndexToLimit,
};
