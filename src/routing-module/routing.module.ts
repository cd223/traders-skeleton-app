import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TraderRegistrationComponent } from 'src/trader-module/trader-registration/trader-registration.component';
import { HomeComponent } from 'src/app/home/home.component';
import { TraderListComponent } from 'src/trader-module/trader-list/trader-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'trader-list', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trader-list', component: TraderListComponent },
  { path: 'add-trader', component: TraderRegistrationComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
