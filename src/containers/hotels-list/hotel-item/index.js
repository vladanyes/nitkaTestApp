import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import style from './style.scss';

const HotelItem = props => {
  const {
    history,
    hotel: { images, description, name, id },
  } = props;
  console.warn('hotel', props.hotel);

  const handleClick = () => {
    history.push(`/${id}`);
  };

  return (
    <Card className={style.HotelItem}>
      <CardActionArea onClick={handleClick}>
        <CardMedia className={style.HotelItem__image} image={images[0]} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            className={style.HotelItem__description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions onClick={handleClick}>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
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
