import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UserListingComponent } from './user-listing/user-listing.component';

const routes: Routes = [
  {
    path:'reactive-form/:id',
    component:ReactiveFormsComponent
  },
  {
    path:'reactive-form-listing',
    component:UserListingComponent
  },{
    path:'',
    redirectTo:'/reactive-form-listing',
    pathMatch:'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
