/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { TechnicienGuard } from './core/guards/technicien.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/public/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/public/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'client',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./layouts/client-layout/client-layout.module').then(m => m.ClientLayoutModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () =>
      import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  },
  {
    path: 'technicien',
    canActivate: [AuthGuard, TechnicienGuard],
    loadChildren: () =>
      import('./layouts/technicien-layout/technicien-layout.module').then(m => m.TechnicienLayoutModule)
  },

  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
