import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getDefaultHotels } from '../mock-api/hotels';

const HotelsContext = React.createContext({ hotels: [], isDefaultHotels: true, isFetching: false });

const HotelsProvider = props => {
  const defaultHotels = getDefaultHotels(5);
  const [state, setState] = useState({
    hotels: defaultHotels,
    isDefaultHotels: true,
    isFetching: false,
  });

  return (
    <HotelsContext.Provider value={[state, setState]}>{props.children}</HotelsContext.Provider>
  );
};

HotelsProvider.propTypes = {
  children: PropTypes.node,
};
HotelsProvider.defaultProps = {
  children: null,
};

export { HotelsContext, HotelsProvider };
