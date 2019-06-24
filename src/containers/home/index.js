import React from 'react';
import SearchInput from '../search-input';
import { HotelsProvider } from '../../contexts/hotels-context';
import HotelsList from '../hotels-list';

import style from './style.scss';

const Home = () => {
  return (
    <div className={style.Home}>
      <HotelsProvider>
        <div className={style.Home__searchBlock}>
          <SearchInput />
        </div>
        <div className={style.Home__hotelsList}>
          <HotelsList />
        </div>
      </HotelsProvider>
    </div>
  );
};

export default Home;
