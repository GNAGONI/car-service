import { createSelector } from 'reselect';

const getUser = state => state.user;

export const getUserFirstNameSelector = createSelector(
  getUser,
  user => user.firstName,
);

export const getUserLastNameSelector = createSelector(
  getUser,
  user => user.lastName,
);

export const getUserEmailSelector = createSelector(
  getUser,
  user => user.email,
);

export const getUserPhoneNumberSelector = createSelector(
  getUser,
  user => user.phoneNumber,
);

export const getUserDateOfBirthSelector = createSelector(
  getUser,
  user => user.dateOfBirth,
);

export const getUserSubscribedStatusSelector = createSelector(
  getUser,
  user => user.subscribed,
);

export const getAllUserData = createSelector(
  getUser,
  user => user,
);

export const getPersonalDataSelector = createSelector(
  [getUserFirstNameSelector, getUserLastNameSelector, getUserEmailSelector],
  (firstName, lastName, email) => ({
    firstName,
    lastName,
    email,
  }),
);
