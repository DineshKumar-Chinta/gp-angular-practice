import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';
import { SandeepTestComponent } from './g-sandeep/sandeep-test/sandeep-test.component';
import { DLoginComponent } from './dinesh/d-login/d-login.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'yadagiri',
    component: YadagiriTestComponent,
  },
  {
    path: "mahesh", loadChildren: () => import('./maheshreddy/maheshreddy.module').then(m => m.MaheshReddyModule),
  },
  {
    path: 'mohammad',
    loadChildren: () => import('./mohammad-module/mohammad-module.module').then(m => m.MohammadModuleModule)
  },
  { path: 'Sandeep', component: SandeepTestComponent },
  {path:'dinesh',component:DLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
