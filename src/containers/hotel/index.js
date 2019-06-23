import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import style from './style.scss';

const Hotel = () => {
  return (
    <Container maxWidth="sm" className={style.App}>
      <Paper className={style.App__inner}>Hotel</Paper>
    </Container>
  );
};

export default Hotel;
