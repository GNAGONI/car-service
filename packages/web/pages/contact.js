import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import ContactUsMap from 'modules/contact/ContactUsMap';
import ContactUsForm from 'modules/contact/ContactUsForm';
import ContactUsInfo from 'modules/contact/ContactUsInfo';

const ContactUs = () => (
  <Page title="Contact">
    <DefaultHeader />
    <main>
      <div>
        <Container fluid className="layout-p-0">
          <Row>
            <Col lg={7} xs={12} className="layout-p-0">
              <ContactUsForm />
            </Col>
            <Col lg={5} xs={12} className="layout-p-0">
              <Container fluid className="layout-p-0">
                <ContactUsInfo />
              </Container>
            </Col>
          </Row>
          <Row>
            <ContactUsMap>{props => <ContactUsMap.Marker {...props} />}</ContactUsMap>
          </Row>
        </Container>
      </div>
    </main>
    <Footer />
  </Page>
);

export default ContactUs;
