import React, { useContext, useRef, useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import Typography from '@material-ui/core/Typography';
import { HotelsContext } from '../../contexts/hotels-context';
import HotelItem from './hotel-item';
import { scrollToView } from '../../helpers';

import style from './style.scss';

const HotelsList = () => {
  const [state] = useContext(HotelsContext);
  const { hotels, isDefaultHotels } = state;
  const listElem = useRef(null);
  const prevHotels = useRef(hotels);

  const renderHotels = hotel => {
    return <HotelItem key={hotel.id} hotel={hotel} />;
  };

  const getTitle = () => {
    if (isDefaultHotels) return 'Best deals for today:';
    if (!isDefaultHotels) {
      if (hotels.length) return 'Search results:';
    }
    return 'Nothing was found by your request';
  };

  useEffect(() => {
    if (!isEqual(hotels, prevHotels.current)) scrollToView(listElem);
    prevHotels.current = hotels;
  });

  return (
    <div className={style.HotelsList} ref={listElem}>
      <Typography variant="h2" gutterBottom className={style.HotelsList__title}>
        {getTitle()}
      </Typography>
      {hotels.map(renderHotels)}
    </div>
  );
};

export default HotelsList;
