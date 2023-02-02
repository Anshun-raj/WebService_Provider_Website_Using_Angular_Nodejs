import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Routes/about/about.component';
import { HomeComponent } from './Routes/home/home.component';
import { ServiceComponent } from './Routes/service/service.component';
import { TeamComponent } from './Routes/team/team.component';
import { ContactComponent } from './Routes/contact/contact.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'team',component:TeamComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
