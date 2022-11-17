import { ProfileComponent } from './profile/profile.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { LoginTestComponent } from './login-test/login-test.component';

const routes: Routes = [
  { path: '', component: UsersComponent, children:[
    {path:'',redirectTo:'list',pathMatch:'full'},
    {path:'list',component:ListUserComponent},
    {path:'new',component:FormUserComponent},
    {path:'list/profile/:id', component: ProfileComponent},
  ]},
  {path:'login', component: LoginTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
