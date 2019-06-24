import shuffle from 'lodash/shuffle';

export const getShuffledArray = (length = 0, array = []) => shuffle(array).slice(0, length);
export const scrollToView = ref =>
  ref.current.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
