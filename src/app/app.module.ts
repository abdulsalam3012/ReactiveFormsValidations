import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UserListingComponent } from './user-listing/user-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    UserListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
