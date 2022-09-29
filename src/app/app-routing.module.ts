import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardKitComponent } from './dashboard-kit/dashboard-kit.component';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard kit',
    component: DashboardKitComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
