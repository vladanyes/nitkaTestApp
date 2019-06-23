import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';

import style from './style.scss';

const SearchPage = () => {
  return (
    <Container maxWidth="sm" className={style.App}>
      <Paper className={style.App__inner}>
        <InputBase
          className={style.App__input}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'Search Google Maps' }}
        />
        <IconButton className={style.App__iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default SearchPage;
