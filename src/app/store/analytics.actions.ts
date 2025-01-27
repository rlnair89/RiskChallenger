import { createAction, props } from '@ngrx/store';

export const loadParcelData = createAction('[Analytics] Load Parcel Data');
export const loadParcelDataSuccess = createAction(
  '[Analytics] Load Parcel Data Success',
  props<{ parcelData: Array<{ weight: number; deliveryTime: number; status: string }> }>()
);
export const loadParcelDataFailure = createAction(
  '[Analytics] Load Parcel Data Failure',
  props<{ error: any }>()
);
