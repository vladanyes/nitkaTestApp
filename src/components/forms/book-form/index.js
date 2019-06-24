import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DatePicker from '../../elements/date-picker';
import SimpleModal from '../../modal';

import style from './style.scss';

const BookForm = props => {
  const { history } = props;
  const [open, setOpen] = React.useState(false);

  const handleButtonClick = () => setOpen(true);

  const handleCloseModal = () => {
    setOpen(false);
    history.push('/');
  };

  return (
    <div className={style.BookForm}>
      <Typography variant="h5" gutterBottom>
        Забронировать номер:
      </Typography>
      <div className={style.BookForm__label}>Выберите дату заезда</div>
      <DatePicker />
      <div className={style.BookForm__label}>Выберите дату выезда</div>
      <DatePicker />
      <div className={style.BookForm__button}>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Забронировать
        </Button>
      </div>
      <SimpleModal text="Успешно забронировано!" open={open} onClose={handleCloseModal} />
    </div>
  );
};

BookForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(BookForm);
