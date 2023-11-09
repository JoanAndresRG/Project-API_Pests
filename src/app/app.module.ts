import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditPetComponent } from './components/add-edit-pet/add-edit-pet.component';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { ViewPetComponent } from './components/view-pet/view-pet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SpinnersComponent } from './shared/spinners/spinners.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogsComponent } from './shared/confirm-dialogs/confirm-dialogs.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditPetComponent,
    ListPetsComponent,
    ViewPetComponent,
    SpinnersComponent,
    ConfirmDialogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
