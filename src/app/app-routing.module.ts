import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './component/flight/flight.component';


const routes: Routes = [
  { path: 'flight', component: FlightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
