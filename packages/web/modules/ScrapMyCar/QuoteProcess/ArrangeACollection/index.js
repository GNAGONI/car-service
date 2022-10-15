import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getHasAccount } from '@car-service/redux/selectors/quote';
import { arrangeCollectionRequest } from '@car-service/redux/actions/quote';
import { setFirstName, setLastName } from '@car-service/redux/actions/user';
import { isUserAuthenticatedSelector } from '@car-service/redux/selectors/userAuth';
import ArrangeACollectionNotExistingUser from './ArrangeACollectionNotExistingUser';
import ArrangeACollectionExistingUser from './ArrangeACollectionExistingUser';

const ArrangeACollection = () => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const hasAccount = useSelector(getHasAccount);
  const isAuthenticated = useSelector(isUserAuthenticatedSelector);

  const handleSubmitButton = async (values, formikBag) => {
    const { firstName, lastName, ...restValues } = values;
    setPassword(restValues?.password);
    dispatch(setFirstName(firstName));
    dispatch(setLastName(lastName));
    dispatch(arrangeCollectionRequest({ ...restValues, formikBag }));
  };

  return (
    <>
      {hasAccount && !isAuthenticated && <ArrangeACollectionExistingUser next={handleSubmitButton} />}
      {(!hasAccount || isAuthenticated) && (
        <ArrangeACollectionNotExistingUser
          next={handleSubmitButton}
          hasAccount={hasAccount}
          isAuthenticated={isAuthenticated}
          password={password}
        />
      )}
    </>
  );
};

export default ArrangeACollection;
