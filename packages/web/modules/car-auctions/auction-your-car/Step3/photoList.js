import React from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from './photoListItem';

const PhotoList = ({ imagesArray, removeImage, updatePhoto }) => (
  <ul className="upload-photos">
    {imagesArray.map((item, index) => (
      <PhotoListItem {...item} index={index} key={item.id} removeImage={removeImage} updatePhoto={updatePhoto} />
    ))}
  </ul>
);

PhotoList.propTypes = {
  removeImage: PropTypes.func.isRequired,
  updatePhoto: PropTypes.func.isRequired,
  imagesArray: PropTypes.array.isRequired,
};

export default PhotoList;
