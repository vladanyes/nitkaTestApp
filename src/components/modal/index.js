import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import style from './style.scss';

const SimpleModal = props => {
  const { text, onClose, open } = props;

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={onClose}
    >
      <div className={style.SimpleModal}>
        <Typography variant="h6" id="modal-title">
          {text}
        </Typography>
      </div>
    </Modal>
  );
};

SimpleModal.propTypes = {
  text: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.boolean,
};

SimpleModal.defaultProps = {
  text: '',
  onClose: () => {},
  open: false,
};

export default SimpleModal;
