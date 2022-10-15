import React, { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';

import DownloadAppCard from 'components/widgets/downloadAppWidget';
import InviteCustomerWidget from 'components/widgets/inviteCustometWidget';
import NewsWidget from 'components/widgets/newsWidget';

export default class PartnerPortalAside extends PureComponent {
  render() {
    return (
      <aside className="aside">
        <Row>
          <Col xs={6} lg={12} className="mb-4">
            <DownloadAppCard />
          </Col>
          <Col xs={6} lg={12} className="mb-4 d-none d-lg-block">
            <InviteCustomerWidget />
          </Col>
          <Col xs={6} lg={12}>
            <NewsWidget />
          </Col>
        </Row>
      </aside>
    );
  }
}
