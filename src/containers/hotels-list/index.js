import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { HotelsContext } from '../../contexts/hotels-context';
import HotelItem from './hotel-item';

import style from './style.scss';

const HotelsList = () => {
  const [state] = useContext(HotelsContext);
  const { hotels, isDefaultHotels } = state;

  const renderHotels = hotel => {
    return <HotelItem key={hotel.id} hotel={hotel} />;
  };

  return (
    <div className={style.HotelsList}>
      <Typography variant="h2" gutterBottom className={style.HotelsList__title}>
        {isDefaultHotels ? 'Лучшие предложения на сегодня:' : 'По вашему запросу найдено:'}
      </Typography>
      {hotels.map(renderHotels)}
    </div>
  );
};

export default HotelsList;
