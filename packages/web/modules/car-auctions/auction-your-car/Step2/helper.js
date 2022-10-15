import { serviceHistoryOptions } from './historyMaintenance';

export const transferDataFromServe = data => {
  const transferedData = {};

  if (data.postcode) {
    transferedData.postcode = data.postcode;
  }

  if (data.contacts?.contactEmail) {
    transferedData.contactEmail = data.contacts.contactEmail;
  }

  if (data.contacts?.phoneNumber) {
    transferedData.phoneNumber = data.contacts.phoneNumber;
  }

  if (data.address) {
    if (data.address.title) {
      transferedData.title = data.address.title;
    }

    if (data.address.subtitle) {
      transferedData.subtitle = data.address.subtitle;
    }

    if (data.address.fullAddress) {
      transferedData.fullAddress = { value: data.address.fullAddress, label: data.address.fullAddress };
    }

    if (data.address.addressLine1) {
      transferedData.addressLine1 = data.address.addressLine1;
    }

    if (data.address.addressLine2) {
      transferedData.addressLine2 = data.address.addressLine2;
    }

    if (data.address.townCity) {
      transferedData.townCity = data.address.townCity;
    }

    if (data.address.county) {
      transferedData.county = data.address.county;
    }

    if (data.address.houseNameOrNumber) {
      transferedData.houseNameOrNumber = data.address.houseNameOrNumber;
    }
  }

  if (data.vehicle) {
    if (data.vehicle.carFeatures?.length) {
      transferedData.carFeatures = data.vehicle.carFeatures.map(feature => feature.id);
    }

    if (data.vehicle.owners) {
      transferedData.owners = data.vehicle.owners;
    }

    if (data.vehicle.hasOwnProperty('serviceHistory') && data.vehicle.serviceHistory !== null) {
      transferedData.serviceHistory = serviceHistoryOptions.find(
        option => +option.value === +data.vehicle.serviceHistory,
      );
    }

    if (data.vehicle.motDue) {
      transferedData.motDue = new Date(data.vehicle.motDue);
    }

    if (data.vehicle.hasOwnProperty('hasKeys') && data.vehicle.hasKeys !== null) {
      transferedData.hasKeys = !!data.vehicle.hasKeys;
    }

    if (data.vehicle.hasOwnProperty('isValidV5CLogbook') && data.vehicle.isValidV5CLogbook !== null) {
      transferedData.isValidV5CLogbook = !!data.vehicle.isValidV5CLogbook;
    }

    if (data.vehicle.hasOwnProperty('isVehicleStart') && data.vehicle.isVehicleStart !== null) {
      transferedData.isVehicleStart = !!data.vehicle.isVehicleStart;
    }

    if (data.vehicle.hasOwnProperty('hasValidMOT') && data.vehicle.hasValidMOT !== null) {
      transferedData.hasValidMOT = !!data.vehicle.hasValidMOT;
    }

    if (data.vehicle.hasOwnProperty('hasMechanicalIssues') && data.vehicle.hasMechanicalIssues !== null) {
      transferedData.hasMechanicalIssues = !!data.vehicle.hasMechanicalIssues;
    }

    if (data.vehicle.hasOwnProperty('hasFinanceRemaining') && data.vehicle.hasFinanceRemaining !== null) {
      transferedData.hasFinanceRemaining = !!data.vehicle.hasFinanceRemaining;
    }

    if (data.vehicle.mileage) {
      transferedData.mileage = data.vehicle.mileage;
    }

    if (data.vehicle.mechanicalIssuesDescription) {
      transferedData.mechanicalIssuesDescription = data.vehicle.mechanicalIssuesDescription;
    }

    if (data.vehicle.bodyCondition) {
      transferedData.bodyCondition = data.vehicle.bodyCondition;
    }

    if (data.vehicle.interiorCondition) {
      transferedData.interiorCondition = data.vehicle.interiorCondition;
    }
  }

  return transferedData;
};
