import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ButtonGroup, Col, Container, Row, Button } from 'react-bootstrap';

import { CustomerPortalHeader } from 'components/Header';
import Breadcrumbs from 'components/Breadcrumbs';
import Footer from 'components/Footer';
import Page from 'components/page';
import { EditProfileHeader, EditProfileForm } from 'modules/User/MyAccount/Settings/EditProfile';
import { MODAL_TYPE } from 'containers/rootModalContainer';
import { authentificatedRoute } from 'lib/routes';
import { modalOpen } from '@car-service/redux/actions/modal';
import { getUserDataRequest } from '@car-service/redux/actions';

const EditProfile = ({ title, description, checkBoxText }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataRequest());
  }, []);

  const showDeleteAccountPasswordPopup = () => dispatch(modalOpen({ modalType: MODAL_TYPE.deleteAccountPopup }));
  const showRequestPersonalDataPopup = () => dispatch(modalOpen({ modalType: MODAL_TYPE.requestPersonalDataPopup }));

  return (
    <Page title="Edit profile">
      <CustomerPortalHeader />
      <main id="main">
        <Container>
          <section className="content extend form-large form-bordered pt-3">
            <Breadcrumbs />
            <Row className="page-form-wrapper">
              <Col xl={7} lg={8} md={9} className="pt-1">
                <EditProfileHeader title={title} description={description} />
                <EditProfileForm checkBoxText={checkBoxText} />
                <ButtonGroup className="page-form__buttons-group">
                  <Button onClick={showDeleteAccountPasswordPopup} className="page-form__button__primary" type="submit">
                    Delete my account
                  </Button>
                  <Button onClick={showRequestPersonalDataPopup} className="page-form__button__primary" type="submit">
                    Request personal data
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </section>
        </Container>
      </main>
      <Footer />
    </Page>
  );
};

EditProfile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  checkBoxText: PropTypes.string.isRequired,
};

EditProfile.getInitialProps = ctx => {
  authentificatedRoute(ctx);

  return {
    title: 'Edit profile',
    description:
      'Edit your profile details that we have saved for you on your Car.service account. Once you have edited your details, click the save changes button.',
    checkBoxText: `I'd like Car.service to contact me about: Vehicle advice, news and reviews, great deals, discounts, and competitions`,
  };
};

export default EditProfile;
