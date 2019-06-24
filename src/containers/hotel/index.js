import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import BookForm from '../../components/forms/book-form';
import HotelInfo from '../hotel-info';
import { HotelsContext } from '../../contexts/hotels-context';

import style from './style.scss';

const Hotel = props => {
  const {
    match: {
      params: { hotelId },
    },
  } = props;
  const [state] = useContext(HotelsContext);
  const currentHotel = state.hotels.find(hotel => hotel.id === hotelId);

  return (
    <>
      <div className={style.Breadcrumbs}>
        <Link to="/">
          <Icon className={style.Breadcrumbs__icon}>arrow_left</Icon>
          <span>Вернуться на главную</span>
        </Link>
      </div>
      <div className={style.Hotel}>
        <Paper className={style.Hotel__form}>
          <BookForm />
        </Paper>
        <div className={style.Hotel__info}>
          <HotelInfo hotel={currentHotel} />
        </div>
      </div>
    </>
  );
};

Hotel.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Hotel);
