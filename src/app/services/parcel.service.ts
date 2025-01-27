import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParcelService {
  getParcelData() {
    return of([
      { weight: 4, deliveryTime: 12, status: 'Delivered' },
      { weight: 5, deliveryTime: 12, status: 'In Transit' },
      { weight: 6, deliveryTime: 12, status: 'Delivered' },
    ]);
  }
}
