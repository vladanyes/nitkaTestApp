import React, { useState, useContext } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import { searchHotels } from '../../mock-api/hotels';
import { HotelsContext } from '../../contexts/hotels-context';

import style from './style.scss';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState();
  const [, setState] = useContext(HotelsContext);

  const handleInputChange = ({ target: { value } }) => setSearchValue(value);

  const handleButtonClick = () => setState(() => searchHotels(searchValue));

  const handleButtonKeyPress = ({ key }) => {
    if (key === 'Enter') setState(() => searchHotels(searchValue));
  };

  return (
    <Container maxWidth="sm">
      <Paper className={style.SearchPage}>
        <InputBase
          fullWidth
          value={searchValue || ''}
          className={style.SearchPage__input}
          placeholder="Search Hotels"
          inputProps={{ 'aria-label': 'Search Hotels' }}
          onChange={handleInputChange}
          onKeyPress={handleButtonKeyPress}
        />
        <IconButton
          onClick={handleButtonClick}
          className={style.SearchPage__iconButton}
          aria-label="Search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default SearchInput;
