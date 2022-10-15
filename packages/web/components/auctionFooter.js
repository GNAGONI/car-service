import React, { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CommonCollapse from 'components/carAuctionResults/commonCollapse';

export default class AuctionFooter extends PureComponent {
  static propTypes = {
    bottomBlockTitle: PropTypes.string,
    bottomBlockDescriptionLeft: PropTypes.string,
    bottomBlockDescriptionRight: PropTypes.string,
    bottomReadMoreBlockDescriptionLeft: PropTypes.string,
    bottomReadMoreBlockDescriptionRight: PropTypes.string,
  };

  static defaultProps = {
    bottomBlockTitle: '',
    bottomBlockDescriptionLeft: '',
    bottomBlockDescriptionRight: '',
    bottomReadMoreBlockDescriptionLeft: '',
    bottomReadMoreBlockDescriptionRight: '',
  };

  renderAlwaysShowElements = () => {
    const { bottomBlockTitle, bottomBlockDescriptionLeft, bottomBlockDescriptionRight } = this.props;

    return (
      <>
        {bottomBlockTitle && (
          <header className="section-head">{<h1 dangerouslySetInnerHTML={{ __html: bottomBlockTitle }} />}</header>
        )}
        <Row className="mb-3">
          <Col md={6} dangerouslySetInnerHTML={{ __html: bottomBlockDescriptionLeft }} />
          <Col md={6} dangerouslySetInnerHTML={{ __html: bottomBlockDescriptionRight }} />
        </Row>
      </>
    );
  };

  render() {
    const { bottomReadMoreBlockDescriptionLeft, bottomReadMoreBlockDescriptionRight } = this.props;

    return (
      <Row className="mb-3 mb-md-5 mt-3 mt-md-5">
        <Col>
          <CommonCollapse
            renderAlwaysShowElements={this.renderAlwaysShowElements}
            isShowReadMore={bottomReadMoreBlockDescriptionLeft || bottomReadMoreBlockDescriptionRight}
          >
            <Row>
              <Col md={6} dangerouslySetInnerHTML={{ __html: bottomReadMoreBlockDescriptionLeft }} />
              <Col md={6} dangerouslySetInnerHTML={{ __html: bottomReadMoreBlockDescriptionRight }} />
            </Row>
          </CommonCollapse>
        </Col>
      </Row>
    );
  }
}
