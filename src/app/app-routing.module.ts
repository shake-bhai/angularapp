import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineBookingRequest } from './onlineBookingDetail';


const routes: Routes = [
  {path: 'bookingForm', component:OnlineBookingRequest}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
