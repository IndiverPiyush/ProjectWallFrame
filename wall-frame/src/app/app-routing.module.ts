import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule], // Ensure it's RouterModule.forRoot
  exports: [RouterModule],
})
export class AppRoutingModule {}
