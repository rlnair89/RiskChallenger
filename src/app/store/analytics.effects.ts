import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadParcelData, loadParcelDataSuccess, loadParcelDataFailure } from './analytics.actions';
import { ParcelService } from '../services/parcel.service';

@Injectable()
export class AnalyticsEffects {
  constructor(private actions$: Actions, private parcelService: ParcelService) {}

  loadParcelData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadParcelData),
      mergeMap(() =>
        this.parcelService.getParcelData().pipe(
          map((data) => loadParcelDataSuccess({ parcelData: data })),
          catchError((error) => of(loadParcelDataFailure({ error })))
        )
      )
    )
  );
}
