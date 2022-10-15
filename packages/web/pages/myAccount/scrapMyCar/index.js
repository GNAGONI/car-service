import React from 'react';
import Page from 'components/page';
import { CustomerPortalHeader } from 'components/Header';
import Footer from 'components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

import { authentificatedRoute } from 'lib/routes';
import Breadcrumbs from 'components/Breadcrumbs';
import Dashboard from 'components/Dashboard';
import { iconScrapMyCar, iconVehiclesSvg, iconQuotes } from 'static/images/icons';

const title = '<h1>Scrap my car</h1>';
const description =
  '<p>Here you will find all your scrap car quotes and information on any cars you have scrapped with Car.service</p>';

const ScrapMyCar = () => (
  <Page title="Scrap my car">
    <CustomerPortalHeader />
    <main id="main" className="bg-before-white">
      <Container>
        <section className="content section-signup signin extend form-large form-bordered bg-before-default text-center b-validation my-account-dashboard">
          <Row className="mt-3">
            <Col className="my-account-dashboard-welcome-block layout-p-0">
              <Breadcrumbs />
              <Dashboard
                centered={false}
                image={iconScrapMyCar}
                title={title}
                description={description}
                colNum={3}
                imageProps={{
                  width: 120,
                  height: 'auto',
                }}
              >
                <Dashboard.Item link="/my-account/scrap-my-car/quote-history">
                  <div className="icon-wrap">
                    <img src={iconQuotes} width="60" alt="Edit Profile" />
                  </div>
                  <div className="link">Quote history</div>
                </Dashboard.Item>
                <Dashboard.Item link="/my-account/scrap-my-car/scrapped-cars">
                  <div className="icon-wrap">
                    <img src={iconVehiclesSvg} width="100" alt="Change password" />
                  </div>
                  <div className="link">Scrapped cars</div>
                </Dashboard.Item>
              </Dashboard>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
    <Footer />
  </Page>
);

ScrapMyCar.getInitialProps = ctx => {
  authentificatedRoute(ctx);
};

export default ScrapMyCar;
