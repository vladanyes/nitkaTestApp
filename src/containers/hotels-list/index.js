import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { HotelsContext } from '../../contexts/hotels-context';

const HotelsList = () => {
  const [state] = useContext(HotelsContext);
  console.warn('context state from HotelsList', state);

  return (
    <Container maxWidth="sm">
      <Paper>Hotels List</Paper>
    </Container>
  );
};

export default HotelsList;
