import authSaga from './authSaga';
import contactRedirectSaga from './contactRedirectSaga';
import scrapMyCarRedirectSaga from './scrapMyCarRedirectSaga';
import userRedirectSaga from './userRedirectSaga';

export default [...authSaga, ...contactRedirectSaga, ...scrapMyCarRedirectSaga, ...userRedirectSaga];
