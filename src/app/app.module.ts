import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { AnimationsComponent } from './utilities/animations/animations.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { ColorsComponent } from './utilities/colors/colors.component';
import { OtherComponent } from './utilities/other/other.component';

import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    LayoutComponent,
    DashboardComponent,
    NotFoundComponent,
    ChartsComponent,
    TablesComponent,
    AnimationsComponent,
    BordersComponent,
    ColorsComponent,
    OtherComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
