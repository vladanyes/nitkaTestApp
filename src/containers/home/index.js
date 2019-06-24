import React from 'react';
import SearchInput from '../search-input';
import HotelsList from '../hotels-list';

import style from './style.scss';

const Home = () => {
  return (
    <div className={style.Home}>
      <div className={style.Home__searchBlock}>
        <SearchInput />
      </div>
      <div className={style.Home__hotelsList}>
        <HotelsList />
      </div>
    </div>
  );
};

export default Home;
