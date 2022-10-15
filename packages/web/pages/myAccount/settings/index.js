import React from 'react';
import Page from 'components/page';
import { CustomerPortalHeader } from 'components/Header';
import Footer from 'components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

import { authentificatedRoute } from 'lib/routes';
import Breadcrumbs from 'components/Breadcrumbs';
import Dashboard from 'components/Dashboard';
import { iconCog, iconLockWithKey, userSvg } from 'static/images/icons';

const title = '<h1>Settings</h1>';
const description =
  '<p>Below you will find the different settings you can control within your account on Car.service</p>';

const Settings = () => (
  <Page title="Settings">
    <CustomerPortalHeader />
    <main id="main" className="bg-before-white settings">
      <Container>
        <section className="content section-signup signin extend form-large form-bordered bg-before-default text-center b-validation">
          <Row className="mt-3">
            <Col>
              <Breadcrumbs />
              <Dashboard
                centered={false}
                image={iconCog}
                title={title}
                description={description}
                colNum={3}
                imageProps={{ width: '82' }}
              >
                <Dashboard.Item link="/my-account/settings/edit-profile">
                  <div className="icon-wrap">
                    <img src={userSvg} width="80" alt="Edit profile" />
                  </div>
                  <div className="link">Edit profile</div>
                </Dashboard.Item>
                <Dashboard.Item link="/my-account/settings/change-password">
                  <div className="icon-wrap">
                    <img src={iconLockWithKey} width="80" alt="Change password" />
                  </div>
                  <div className="link">Change password</div>
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

Settings.getInitialProps = ctx => {
  authentificatedRoute(ctx);
};

export default Settings;
