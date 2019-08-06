import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { AnimationsComponent } from './utilities/animations/animations.component';
import { ColorsComponent } from './utilities/colors/colors.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { OtherComponent } from './utilities/other/other.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
        // loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'page1',
        component: Page1Component
      },
      {
        path: 'page2',
        component: Page2Component
      },
      {
        path: 'charts',
        component: ChartsComponent
      },
      {
        path: 'tables',
        component: TablesComponent
      },
      {
        path: 'utilities',
        children: [
          {
            path: '',
            redirectTo: 'other',
            pathMatch: 'full'
          },
          {
            path: 'colors',
            component: ColorsComponent
          },
          {
            path: 'colors/:type',
            component: ColorsComponent
          },
          {
            path: 'borders',
            component: BordersComponent
          },
          {
            path: 'animations',
            component: AnimationsComponent
          },
          {
            path: 'other',
            component: OtherComponent
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
