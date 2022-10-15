import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import ErrorAlert from 'components/errorAlert';
import PhotoList from 'modules/car-auctions/auction-your-car/Step3/photoList';

const PhotoLoader = ({
  maxFilesNumber,
  photos,
  setFieldValue,
  defaultImages,
  errors,
  imagesToRemove,
  setImagesToRemove,
}) => {
  /**
   * Upload photos
   *
   * @param {object} e - event with uploaded files
   */
  const onDrop = useCallback(
    acceptedFiles => {
      let files = acceptedFiles;
      if (photos.length + files.length > maxFilesNumber) {
        const allowedPhotosNumber = maxFilesNumber - photos.length;
        files = files.slice(0, allowedPhotosNumber);
      }

      if (files.length) {
        const newLoadedPhotos = files.map(file => ({
          src: file,
          text: '',
          isDefault: false,
          isSaved: false,
          id: `${file.lastModified}${file.name}${Date.now()}`,
        }));

        setFieldValue('photos', [...photos, ...newLoadedPhotos]);
      }
    },
    [photos],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  /**
   * Update photo
   *
   * @param {object} e - event with uploaded files
   */
  const updatePhoto = (e, index) => {
    if (e && e.target && e.target.files) {
      const file = Object.values(e.target.files)[0];
      const photosArray = [...photos];

      const newLoadedPhoto = {
        src: file,
        text: '',
        isDefault: false,
        isSaved: false,
        id: `${file.lastModified}${file.name}${Date.now()}`,
      };

      if (photosArray[index]) {
        photosArray.splice(index, 1, newLoadedPhoto);
      } else {
        photosArray[index] = newLoadedPhoto;
      }
      setFieldValue('photos', photosArray);
    }
  };

  /**
   * Remove selected Image
   *
   * @param {string} imageId - Id of the deleting image
   */
  const removeImage = imageId => {
    if (photos.find(photo => photo.id === imageId).isSaved) {
      setImagesToRemove([...imagesToRemove, imageId]);
    }
    setFieldValue('photos', photos.filter(({ id }) => id !== imageId));
  };

  const imagesArray = defaultImages.map((defaultImage, index) =>
    photos && photos[index] ? photos[index] : defaultImage,
  );

  return (
    <div className="form-block js-upload">
      <div className="form-row">
        <div className="col-12 form-group upload-group">
          <div {...getRootProps({ className: 'dropzone input-group' })}>
            <label htmlFor="file" className="input-file--label jcf-file ">
              <input
                type="file"
                multiple
                className="input-file"
                id="file"
                {...getInputProps()}
                accept="image/x-png,image/gif,image/jpeg"
              />
              <span className="fake-text">Drag and drop your photos</span>
              <div className="btn btn-primary btn-ml">Add photos</div>
            </label>
          </div>
          <PhotoList imagesArray={imagesArray} removeImage={removeImage} updatePhoto={updatePhoto} />
        </div>
      </div>
      {errors.photos && <ErrorAlert message={errors.photos} />}
    </div>
  );
};

PhotoLoader.propTypes = {
  maxFilesNumber: PropTypes.number,
  photos: PropTypes.array.isRequired,
  imagesToRemove: PropTypes.array.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setImagesToRemove: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  defaultImages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      text: PropTypes.string.isRequire,
      isDefault: PropTypes.bool.isRequired,
      isSaved: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

PhotoLoader.defaultProps = {
  maxFilesNumber: 0,
  defaultImages: [],
};

export default PhotoLoader;
