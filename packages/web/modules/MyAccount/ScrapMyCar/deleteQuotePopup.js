import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteQuoteRequest } from '@car-service/redux/actions/scrappedCars';
import BaseConfirmationPopup from '../../../components/BaseConfirmationPopup';

const DeleteQuotePopup = () => {
  const dispatch = useDispatch();
  const deleteQuote = () => dispatch(deleteQuoteRequest());

  return (
    <BaseConfirmationPopup
      title={`Are you sure you <strong>want to delete</strong> this scrap car quote?`}
      description="By hitting delete, your scrap car quote will be permanently deleted and can not be recovered"
      confirmAction={deleteQuote}
    />
  );
};

export default DeleteQuotePopup;
