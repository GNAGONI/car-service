import React from 'react';
import { Toast } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { iosClose } from 'react-icons-kit/ionicons/iosClose';

import { hideToast } from '@car-service/redux/actions/toasts';
import { getToastIsOpen, getToastMessage, getToastKind } from '@car-service/redux/selectors/toasts';

import './styles.scss';

const Toasts = () => {
  const dispath = useDispatch();
  const toastOpen = useSelector(getToastIsOpen);
  const message = useSelector(getToastMessage);
  const kind = useSelector(getToastKind);

  const handleClose = () => {
    dispath(hideToast());
  };

  return (
    toastOpen && (
      <Toast animation={false} className={kind}>
        <Icon className="toast-close" icon={iosClose} size={32} onClick={handleClose} />
        <Toast.Body>
          <p className="toast-text">{message}</p>
        </Toast.Body>
      </Toast>
    )
  );
};

export default Toasts;
