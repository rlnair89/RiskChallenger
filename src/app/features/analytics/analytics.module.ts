import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsRoutingModule } from './analytics-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, NgxChartsModule, AnalyticsRoutingModule],
})
export class AnalyticsModule {}
