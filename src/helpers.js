export const getShuffledArray = (length = 0, array = []) => {
  return Array.from({ length }, (el, i) => array[i + Math.floor(Math.random() * length)]);
};
