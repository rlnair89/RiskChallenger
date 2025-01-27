import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnalyticsState } from './analytics.state';

export const selectAnalyticsState = createFeatureSelector<AnalyticsState>('analytics');

export const selectParcelData = createSelector(
  selectAnalyticsState,
  (state) => state.parcelData
);


export const selectWeightDistribution = createSelector(selectParcelData, (parcelData) =>
  parcelData.reduce((acc, parcel) => {
    const weightRange = parcel.weight < 5 ? '<5kg' : parcel.weight < 10 ? '5-10kg' : '>10kg';
    return acc;
  }, {})
);

export const selectDeliveryTimes = createSelector(selectParcelData, (parcelData) =>
  // parcelData.map((parcel) => parcel.deliveryTime)
  parcelData.map(item => ({
    name: item.weight,
    value: item.deliveryTime
  }))
);
