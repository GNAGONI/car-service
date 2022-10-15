import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { Container, Row, Col } from 'react-bootstrap';

import { isUserAuthenticatedSelector } from '@car-service/redux/selectors/userAuth';
import { img404 } from 'static/images/icons';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';

const Error = ({ title, statusCode, errorMessage, errorDescription }) => {
  const isUserAuthenticated = useSelector(isUserAuthenticatedSelector);

  const redirectToMyAccountLink = isUserAuthenticated ? '/my-account' : '/sign-in';

  return (
    <Page title={title}>
      <DefaultHeader />
      <section className="section-404 content bg-before-default">
        <Container>
          <Row>
            <Col lg={12} md={6}>
              <div className="content-area">
                <header className="section-head">
                  <h1>
                    <strong>{statusCode} Error</strong>
                    <br />
                    {errorDescription[statusCode]}
                  </h1>
                </header>
                <h3>{errorMessage}</h3>
                <ul className="item-links">
                  <li>
                    <Link route="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link route={redirectToMyAccountLink}>
                      <a>My Account</a>
                    </Link>
                  </li>
                  <li>
                    <Link route="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="img-area same-height-left same-height-right">
          <img src={img404} alt={`${statusCode} Error ${errorDescription[statusCode]}`} />
        </div>
      </section>
      <Footer />
    </Page>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const pageProps = {
    errorDescription: {
      '404': 'Page not found',
      '500': 'Something went wrong',
    },
    errorMessage: 'Please try the following options instead:',
  };

  const setPageProps = statusCodeObject => ({ ...pageProps, statusCode: statusCodeObject.statusCode });

  if (res) {
    return setPageProps(res);
  }

  if (err) {
    return setPageProps(err);
  }

  return { ...pageProps, statusCode: 404 };
};

Error.propTypes = {
  title: PropTypes.string,
  statusCode: PropTypes.number,
  errorMessage: PropTypes.string,
  errorDescription: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      '404': PropTypes.string,
      '500': PropTypes.string,
    }),
  ]),
};

Error.defaultProps = {
  title: '404 error',
  statusCode: 404,
};

export default Error;
