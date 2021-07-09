import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {MainPageComponent} from './ui/main-page/main-page.component';
import {PageComponent} from './login/page/page.component';
import {TestPageComponent} from './ui/test-page/test-page.component';
import {SettingsComponent} from './ui/settings/settings.component';
import {HousesComponent} from './ui/houses/houses.component';
import {AdminComponent} from './ui/admin/admin.component';
import {ConstructorComponent} from './ui/constructor/constructor.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'constructor', component: ConstructorComponent },
  { path: 'login', component: PageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'test', component: TestPageComponent },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:
          './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
