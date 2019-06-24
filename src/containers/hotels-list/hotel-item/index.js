import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import style from './style.scss';

const HotelItem = props => {
  const {
    history,
    hotel: { images, city, name, id, stars },
  } = props;

  const renderStars = length => {
    return Array.from({ length }, (value, index) => (
      <Icon key={index} className={style.HotelItem__star}>
        star_rate
      </Icon>
    ));
  };

  const handleClick = () => history.push(`/${id}`);

  return (
    <Card className={style.HotelItem}>
      <CardActionArea onClick={handleClick}>
        <CardMedia className={style.HotelItem__image} image={images[0]} title={name} />
        <CardContent>
          <Typography className={style.HotelItem__name} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            className={style.HotelItem__description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {city}
          </Typography>
          <Typography>{renderStars(stars)}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

HotelItem.propTypes = {
  hotel: PropTypes.object,
  history: PropTypes.object.isRequired,
};
HotelItem.defaultProps = {
  hotel: {},
};

export default withRouter(HotelItem);
