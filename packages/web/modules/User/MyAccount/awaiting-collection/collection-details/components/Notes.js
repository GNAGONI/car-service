import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row, Container } from 'react-bootstrap';
import Note from 'modules/User/MyAccount/awaiting-collection/collection-details/components/Note';

// Constants
const NOTES_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet.';

const Notes = ({ notesList }) => (
  <Container>
    <Row className="collection-details-page__block">
      <Row>
        <Col md={8}>
          <h1 className="collection-details-page__title">Notes</h1>
          <p className="collection-details-page__description">{NOTES_DESCRIPTION}</p>
        </Col>

        <Col md={4}>
          <Button type="button" size="lg" className="collection-details-page__button">
            Add a new note
          </Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>{notesList.map(Note)}</Col>
      </Row>
    </Row>
  </Container>
);

Notes.propTypes = {
  notesList: PropTypes.array,
};

Notes.defaultProps = {
  notesList: [],
};

export default Notes;
