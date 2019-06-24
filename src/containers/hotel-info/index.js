import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import style from './style.scss';

const HotelInfo = props => {
  const {
    hotel: { name, description, city, stars, images = [] },
  } = props;

  const renderStars = length => {
    return Array.from({ length }, (value, index) => (
      <Icon key={index} className={style.HotelInfo__star}>
        star_rate
      </Icon>
    ));
  };

  return (
    <div className={style.HotelInfo}>
      <Typography variant="h2" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {city}
      </Typography>
      <Typography>{renderStars(stars)}</Typography>
      <div className={style.HotelInfo__image}>
        <img src={images[0]} alt={name} />
      </div>
      <Typography className={style.HotelInfo__description}>{description}</Typography>
    </div>
  );
};

HotelInfo.propTypes = {
  hotel: PropTypes.object,
};
HotelInfo.defaultProps = {
  hotel: {},
};

export default HotelInfo;
