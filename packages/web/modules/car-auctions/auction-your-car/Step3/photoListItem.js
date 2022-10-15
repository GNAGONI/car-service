import React from 'react';
import PropTypes from 'prop-types';

const PhotoListItem = ({ id, isDefault, src, text, isSaved, removeImage, updatePhoto, index }) => {
  const fileInput = React.createRef();
  return (
    <li onClick={() => isDefault && fileInput.current.click()} role="presentation">
      {!isDefault && (
        <button type="button" className="btn-delete" onClick={e => e.stopPropagation() || removeImage(id)} />
      )}
      {src && (
        <div className="ico">
          <img
            className={isDefault ? '' : 'thumb'}
            src={isDefault || isSaved ? src : URL.createObjectURL(src)}
            alt={text}
            width="49"
            height="59"
          />
        </div>
      )}
      {text && <strong className={src ? 'text' : 'text-plus'}>{text}</strong>}
      <input type="file" id="file" ref={fileInput} style={{ display: 'none' }} onChange={e => updatePhoto(e, index)} />
    </li>
  );
};

PhotoListItem.propTypes = {
  removeImage: PropTypes.func.isRequired,
  updatePhoto: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  src: PropTypes.string,
  text: PropTypes.string,
  isDefault: PropTypes.bool,
  isSaved: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

PhotoListItem.defaultProps = {
  src: '',
  text: '',
  isDefault: false,
  isSaved: false,
};

export default PhotoListItem;
