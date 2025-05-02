import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layout/landing/landing.component';
import { BudgetAllocatedComponent } from './budget-allocated/budget-allocated.component';
import { BudgetUtilisedComponent } from './budget-utilised/budget-utilised.component';

const routes: Routes = [
  {
    path:'',
    component: LandingComponent,
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then((m)=>m.AuthModule),
  },
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m)=>m.DashboardModule),
  },
  {
    path:'budeget_allocated',
    component: BudgetAllocatedComponent,
  },
  {
    path:'budeget_utilised',
    component: BudgetUtilisedComponent,
  },
  {
    path:'clubs',
    loadChildren: () => import('./dashboard/dashboard.module').then((m)=>m.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
