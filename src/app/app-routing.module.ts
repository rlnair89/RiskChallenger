import { AnalyticsModule } from './features/analytics/analytics.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentManagerComponent } from './department-manager/department-manager.component';
import { ParcelListComponent } from './parcel-list/parcel-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'parcel', component: ParcelListComponent },
  { path: 'departments', component: DepartmentManagerComponent },  
  {
    path: 'dashboard',
    loadChildren: () => import('./features/analytics/analytics.module').then(m => m.AnalyticsModule)
  },
  { path: '', component: HomeComponent  }, 
  { path: '**', redirectTo: '/departments' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
