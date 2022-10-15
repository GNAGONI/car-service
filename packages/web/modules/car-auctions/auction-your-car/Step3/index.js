import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Row, Col } from 'react-bootstrap';
import client from '@car-service/api-client';

import { initialValues, validationSchemaStep3 } from '@car-service/common/auctionCreation/step3';
import PhotoLoaderAlert from 'modules/car-auctions/auction-your-car/Step3/photoLoaderAlert';
import ErrorAlert from 'components/errorAlert';
import { SOME_ERROR_OCCURRED } from 'constants/messages';

import {
  iconCarMain,
  iconCarFront,
  iconCarBack,
  iconCarRight,
  iconCarLeft,
  iconCarEngine,
  iconCarAlloys,
  iconCarInterior,
} from 'static/images/icons';
import PhotoLoader from './photoLoader';
import StepHeader from 'components/PageHeader';
import ControlButtons from '../components/ControlButtons';

const headerText =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euis mod tincidunt ut laoreet dolorea am erat volutpat. Ut wisi enim ad minim veniam,';
const headerTitle = 'Upload photos of your car';

const defaultImages = [
  {
    src: iconCarMain,
    text: 'Main photo',
  },
  {
    src: iconCarFront,
    text: 'Front',
  },
  {
    src: iconCarBack,
    text: 'Back',
  },
  {
    src: iconCarRight,
    text: 'Right side',
  },
  {
    src: iconCarLeft,
    text: 'Left side',
  },
  {
    src: iconCarEngine,
    text: 'Engine',
  },
  {
    src: iconCarAlloys,
    text: 'Alloys',
  },
  {
    src: iconCarInterior,
    text: 'Interior',
  },
  {
    src: '',
    text: 'Add photo',
  },
  {
    src: '',
    text: 'Add photo',
  },
  {
    src: '',
    text: 'Add photo',
  },
  {
    src: '',
    text: 'Add photo',
  },
];

const Step3 = ({ next, nextButtonText, goBack, sharedValues, restart }) => {
  const [responseErrors, setResponseErrors] = useState([]);
  const [formikInitialValues, setFormikInitialValues] = useState(initialValues);
  const [imagesToRemove, setImagesToRemove] = useState([]);

  const getSavedData = async () => {
    try {
      const dataFromStep = await client.longAuctions.getDraftedData(sharedValues.auctionId, {
        stepNumber: 3,
        temporaryToken: sharedValues.token,
      });

      if (dataFromStep?.length) {
        const savedPhotos = dataFromStep.map(photo => ({
          src: photo.url,
          text: '',
          isDefault: false,
          isSaved: true,
          id: photo.id,
        }));
        setFormikInitialValues({ photos: savedPhotos });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSavedData();
  }, []);

  /**
   * Sends data to the API and redirects to the next page
   *
   * @param {object} values - Yup field to compare to
   * @param {function} bag - Formik fields bag
   */
  const handleSubmitButton = async (values, bag) => {
    removeImages(bag);
    const imagesToSave = values.photos.filter(photo => !photo.isSaved);

    if (imagesToSave.length) {
      saveImages(imagesToSave, bag);
    } else {
      next();
    }
  };

  /**
   * Remove images from server
   *
   * @param {function} bag - Formik fields bag
   */
  const removeImages = async bag => {
    if (imagesToRemove.length) {
      try {
        const promisesArray = imagesToRemove.map(imageId =>
          client.longAuctions.removePhotosFromStep(sharedValues.auctionId, imageId, {
            temporaryToken: sharedValues.token,
          }),
        );
        await Promise.all(promisesArray);
      } catch (e) {
        setResponseErrors((e?.error?.messages && Object.values(e.error.messages)) || [SOME_ERROR_OCCURRED]);
        bag.setSubmitting(false);
      }
    }
  };

  /**
   * Save images to server
   * @param {object} images - Values to save
   * @param {function} bag - Formik fields bag
   */
  const saveImages = async (images, bag) => {
    const formData = new FormData();
    images.forEach(photo => formData.append('photos[]', photo.src));
    formData.append('temporaryToken', sharedValues.token);
    try {
      await client.longAuctions.saveDataFromPhotosStep(sharedValues.auctionId, formData);
      next();
    } catch (e) {
      setResponseErrors((e?.error?.messages && Object.values(e.error.messages)) || [SOME_ERROR_OCCURRED]);
      bag.setSubmitting(false);
    }
  };

  return (
    <>
      <StepHeader headerText={headerText} headerTitle={headerTitle} />
      <Formik
        enableReinitialize
        initialValues={formikInitialValues}
        validationSchema={validationSchemaStep3}
        onSubmit={handleSubmitButton}
        render={({ setFieldValue, values, errors, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Row className="content-frame">
              <Col md="10" lg="9" xl="8">
                <PhotoLoaderAlert
                  photoLoaderAlertTitle="Top tips"
                  photoLoaderAlertSubtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam  nonummy nibh euismod tincidunt ut laoreet dolorea am erat  ipsum dolor sit amet, consectetuer adipiscing elitd iam."
                />
                <PhotoLoader
                  maxFilesNumber="12"
                  defaultImages={defaultImages.map((image, index) => ({ ...image, isDefault: true, id: index }))}
                  setFieldValue={setFieldValue}
                  photos={values.photos}
                  errors={errors}
                  imagesToRemove={imagesToRemove}
                  setImagesToRemove={setImagesToRemove}
                />
              </Col>
            </Row>
            {responseErrors && responseErrors.map(error => <ErrorAlert message={error} />)}
            <ControlButtons
              goBack={goBack}
              isNextButtonDisabled={isSubmitting}
              nextButtonText={nextButtonText}
              restart={restart}
            />
          </form>
        )}
      />
    </>
  );
};

Step3.propTypes = {
  nextButtonText: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  sharedValues: PropTypes.object.isRequired,
};

Step3.defaultProps = {
  nextButtonText: '',
};

export default Step3;
