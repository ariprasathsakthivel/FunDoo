import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { AuthGuardGuard } from './AuthGuard/auth-guard.guard';


const routes: Routes = [
{ path: 'signup',component: RegisterComponent },
{ path: 'login',component: LoginComponent},
{ path: 'forgot-password',component:ForgotPasswordComponent },
{ path: 'resetpassword/:token',component:ResetPasswordComponent },
{ path: 'dashboard',component:DashboardComponent,canActivate:[AuthGuardGuard],
  children: [
    { path: 'notes', component:GetAllNotesComponent}
    ]
  },
{ path:'',redirectTo:'login',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
