export const formatFeatures = features => features.map(({ name }) => name);

export const getFeatures = packages => {
  const featuresList = packages.reduce((featuresAccumulator, item) => [...featuresAccumulator, ...item.features], []);
  const formattedFeaturesList = formatFeatures(featuresList);
  const uniqueFeaturesList = [...new Set(formattedFeaturesList)];

  return uniqueFeaturesList;
};

export const transferDataFromServer = data => {
  const transferredData = {};

  if (data?.packageDetail?.id) {
    transferredData.packageId = data.packageDetail.id;
    transferredData.confirmationOfTermsAndConditions = true;
  }

  return transferredData;
};
