import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

import style from './style.scss'; // do not remove. contains global styles

const DatePicker = () => {
  const [state, setState] = useState({ date: null, focused: false });

  return (
    <SingleDatePicker
      date={state.date}
      onDateChange={date => setState(state => ({ ...state, date }))}
      focused={state.focused}
      onFocusChange={({ focused }) => setState(state => ({ ...state, focused }))}
      displayFormat="DD MMM YYYY"
      placeholder="выбрать"
      numberOfMonths={1}
      id="from"
    />
  );
};

export default DatePicker;
