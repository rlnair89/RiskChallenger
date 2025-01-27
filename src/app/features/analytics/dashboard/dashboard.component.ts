import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadParcelData } from 'src/app/store/analytics.actions';
import { selectDeliveryTimes, selectWeightDistribution } from 'src/app/store/analytics.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  weightDistribution$: Observable<any>;
  deliveryTimes$: Observable<any>;
  chartData: any;

  constructor(private store: Store) {
    this.weightDistribution$ = this.store.select(selectWeightDistribution);
    this.deliveryTimes$ = this.store.select(selectDeliveryTimes);
  }

  ngOnInit(): void {
    this.store.dispatch(loadParcelData());
  }
}
