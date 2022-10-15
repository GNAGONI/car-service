import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import client from '@car-service/api-client';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Intro from 'containers/intro';
import Footer from 'components/Footer';
import BrowseByMakeContent from 'containers/browseByMake/browseByMakeContentContainer';
import BrowseByMakeHeader from 'components/browseByMake/browseByMakeHeader';

const BrowseByMakePage = ({ fields }) => (
  <Page title="Browse by make">
    <DefaultHeader />
    <Intro />
    <main id="main">
      <BrowseByMakeHeader fields={fields} />
      <Container>
        <Row>
          <Col>
            <BrowseByMakeContent />
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </Page>
);

BrowseByMakePage.propTypes = {
  fields: PropTypes.shape({
    top_block_title: PropTypes.string,
    top_block_description: PropTypes.string,
  }),
};

BrowseByMakePage.defaultProps = {
  fields: {},
};

BrowseByMakePage.getInitialProps = async () => {
  try {
    return await client.pageData.getBrowseByMakePageData();
  } catch (e) {
    return {};
  }
};

export default BrowseByMakePage;
