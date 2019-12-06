import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent} from './main-page/main-page.component';
import { ProfileComponent } from './main-page/profile/profile.component';
import { RegisterComponent } from './main-page/register/register.component';
import { ListadminComponent } from './main-page/listadmin/listadmin.component';
import { UpdateproComponent } from './main-page/profile/updatepro/updatepro.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [ 
{ path:'',redirectTo:'login',pathMatch:'full'},
{ path:'login', component:LoginComponent },
{ path:'main-page', component:MainPageComponent,canActivate: [AuthGuard] },
{path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]  },
	{path: 'register', component: RegisterComponent,canActivate: [AuthGuard]  },
	{path: 'listadmin', component: ListadminComponent ,canActivate: [AuthGuard] },
	{path: 'updatepro', component: UpdateproComponent ,canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
