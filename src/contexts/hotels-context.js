import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getBestHotels } from '../mock-api/hotels';

const HotelsContext = React.createContext([]);

const HotelsProvider = props => {
  const defaultHotels = getBestHotels(5);
  const [state, setState] = useState(defaultHotels);

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
