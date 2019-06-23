import * as JsSearch from 'js-search';
import * as mockData from './mock-data.json';
import { getShuffledArray } from '../helpers';

export const searchHotels = params => {
  const search = new JsSearch.Search('id');
  search.addIndex('name');
  search.addIndex('city');
  // search.addIndex('description');
  search.addDocuments(mockData.data);

  return search.search(params);
};

export const getBestHotels = number => getShuffledArray(number, mockData.data);
