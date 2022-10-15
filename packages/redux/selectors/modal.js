import { createSelector } from 'reselect';

const getModal = state => state.modalState;

export const getRootModalState = () =>
  createSelector(
    getModal,
    ({ isModalOpen, modalType }) => ({ isModalOpen, modalType }),
  );
