import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

// Helpers
import { getDateReadableFormat } from 'lib/formatters';

// Styles
import './styles.scss';

const Note = ({ date, content }) => (
  <Card key={`note-${date.toString()}`} bg="light" className="note">
    <div className="note__close">remove</div>

    <Card.Body>
      <Card.Title className="collection-details-page__description">
        <strong>{getDateReadableFormat(date)}</strong>
      </Card.Title>
      <Card.Text className="collection-details-page__description">{content}</Card.Text>
    </Card.Body>

    <div className="note__edit">edit</div>
  </Card>
);

Note.propTypes = {
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Note;
