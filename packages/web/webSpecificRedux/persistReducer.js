import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '@car-service/redux/reducers';

const persistConfig = {
  key: 'quote',
  storage,
  whitelist: ['quote', 'user'],
};

export default persistReducer(persistConfig, rootReducer);
