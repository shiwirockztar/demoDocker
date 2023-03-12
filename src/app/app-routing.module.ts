import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { Lobby3Component } from './pages/lobby3/lobby3.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Signupv2Component } from './pages/signupv2/signupv2.component';

const routes: Routes = [
  {
    path: '1',
    component: LobbyComponent,
    pathMatch: 'full',
  },
  {
    path: 'lobby',
    component: Lobby3Component,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: Signupv2Component,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
