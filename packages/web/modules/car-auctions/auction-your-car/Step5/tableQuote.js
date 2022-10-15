import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';

import ErrorAlert from 'components/errorAlert';
import { getFeatures, formatFeatures } from 'modules/car-auctions/auction-your-car/Step5/helpers';

const TableQuote = ({
  packages,
  setFieldValue,
  errors,
  values: { confirmationOfTermsAndConditions },
  handleFeaturedPopupOpen,
  touched,
}) => {
  const selectPackage = id => {
    setFieldValue('packageId', id);
    handleFeaturedPopupOpen();
  };

  const renderTableHeaders = () => (
    <thead>
      <tr>
        <th>
          <span className="text">What’s included:</span>
        </th>
        {packages.map(({ title, price }) => (
          <th key={`${title}${price}`}>
            <strong className="title">{title}</strong>
            <span className="sub-title">starting from</span>
            <strong className="amount">£{price}</strong>
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderFeatureInPackages = feature =>
    packages.map(item => {
      const formattedFeatures = formatFeatures(item.features);
      const packageHasFeature = formattedFeatures.includes(feature);

      return (
        <td key={item.id}>
          {packageHasFeature ? (
            <span>
              <i className="icon-tick-circle" />
            </span>
          ) : (
            <span>&nbsp;</span>
          )}
        </td>
      );
    });

  const renderFeatures = () => {
    const features = getFeatures(packages);

    return features.map(feature => (
      <tr key={feature}>
        <td>
          <span>{feature}</span>
        </td>
        {renderFeatureInPackages(feature)}
      </tr>
    ));
  };

  const renderPackagesButtons = () => (
    <tr>
      <td>
        <span>&nbsp;</span>
      </td>
      {packages.map(({ id }) => (
        <td key={id}>
          <span>
            <Button
              className="btn-primary btn-lg"
              onClick={() => selectPackage(id)}
              disabled={!confirmationOfTermsAndConditions}
            >
              Select Package
            </Button>
          </span>
        </td>
      ))}
    </tr>
  );

  const renderTableBody = () => (
    <tbody>
      {renderFeatures()}
      {renderPackagesButtons()}
    </tbody>
  );

  return (
    <div className="table-quote">
      <Table>
        {renderTableHeaders()}
        {renderTableBody()}
      </Table>
      {touched.packageId && errors.packageId && <ErrorAlert message={errors.packageId} />}
    </div>
  );
};

TableQuote.propTypes = {
  packages: PropTypes.array,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleFeaturedPopupOpen: PropTypes.func.isRequired,
};

TableQuote.defaultProps = {
  packages: [],
};

export default TableQuote;
