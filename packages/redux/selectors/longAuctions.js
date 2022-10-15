import { createSelector } from 'reselect';

const getLongAuction = state => state.longAuction;

export const makeRegisterNumberAndMillageSelector = () =>
  createSelector(
    getLongAuction,
    ({ registerNumber, millage }) => ({ registerNumber, millage }),
  );

export const makeVehicleState = () =>
  createSelector(
    makeRegisterNumberAndMillageSelector(),
    getLongAuction,
    ({ registerNumber, millage }, longAuction) => {
      const {
        auction: { vehicle },
        vehicleMakes,
        selectedIds,
      } = longAuction;
      const isDetailsHidden = !vehicle;

      return {
        registerNumber,
        millage,
        vehicle,
        vehicleMakes,
        selectedIds,
        isDetailsHidden,
      };
    },
  );
