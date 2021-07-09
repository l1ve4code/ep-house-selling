/* tslint:disable:no-trailing-whitespace */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { UpNavComponent } from './ui/up-nav/up-nav.component';
import { LowNavComponent } from './ui/low-nav/low-nav.component';
import { MainPageComponent } from './ui/main-page/main-page.component';
import { PageComponent } from './login/page/page.component';
import {UserService} from './services/user/user.service';
import { TestPageComponent } from './ui/test-page/test-page.component';
import { SettingsComponent } from './ui/settings/settings.component';
import { HousesComponent } from './ui/houses/houses.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminComponent } from './ui/admin/admin.component';
import { ConstructorComponent } from './ui/constructor/constructor.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UpNavComponent,
    LowNavComponent,
    MainPageComponent,
    PageComponent,
    TestPageComponent,
    SettingsComponent,
    HousesComponent,
    AdminComponent,
    ConstructorComponent,
    SearchPipe,
    FilterPipe,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
