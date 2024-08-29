import { Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserComponent } from './user/user.component';
import { StartComponent } from './start/start.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoneComponent } from './done/done.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '/user', pathMatch: 'full' },  // Redirects to /user as the default route
  { path: '', component: StartComponent }, 
  { path: 'user', component: UserComponent },            // Route for the UserComponent
  { path: 'schedule', component: ScheduleComponent },    // Route for the ScheduleComponent
  { path: 'done', component: DoneComponent }, 
];


