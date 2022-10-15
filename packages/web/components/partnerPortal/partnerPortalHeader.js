import React, { PureComponent } from 'react';
import { Link } from 'server/pages';
import { Row, Col, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import SubHeader from 'components/subHeader';

export default class PartnerPortalHeader extends PureComponent {
  static propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
  };

  static defaultProps = {
    content: null,
    title: '',
    icon: '',
  };

  render() {
    const { content, title, icon } = this.props;

    return (
      <Container className="main-header">
        <Row className="flex-row align-items-md-center">
          <Col md={8} lg={7}>
            <SubHeader title={title} icon={icon}>
              {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
            </SubHeader>
          </Col>
          <Col md={4} lg={3} className="">
            <div className="btn-block">
              <Link route="/car-auctions">
                <Button variant="success" className="btn-new">
                  View all auctions
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
