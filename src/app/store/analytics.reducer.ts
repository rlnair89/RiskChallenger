import { createReducer, on } from '@ngrx/store';
import { AnalyticsState, initialState } from './analytics.state';
import { loadParcelData, loadParcelDataSuccess } from './analytics.actions';

export const analyticsReducer = createReducer(
  initialState,
  on(loadParcelData, (state) => ({ ...state, isLoading: true })),
  on(loadParcelDataSuccess, (state, { parcelData }) => ({
    ...state,
    parcelData,
    isLoading: false,
  }))
);
