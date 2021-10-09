import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { AuthGuardGuard } from './AuthGuard/auth-guard.guard';
import { GetAllArchiveComponent } from './Components/get-all-archive/get-all-archive.component';
import { GetAllTrashComponent } from './Components/get-all-trash/get-all-trash.component';


const routes: Routes = [
{ path: 'signup',component: RegisterComponent },
{ path: 'login',component: LoginComponent},
{ path: 'forgot-password',component:ForgotPasswordComponent },
{ path: 'resetpassword/:token',component:ResetPasswordComponent },
{ path: 'dashboard',component:DashboardComponent,canActivate:[AuthGuardGuard],
  children: [
    { path: 'notes', component:GetAllNotesComponent},
    { path: 'archive', component:GetAllArchiveComponent },
    { path: 'trash',component:GetAllTrashComponent }
    ]
  },
{ path:'',redirectTo:'login',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
