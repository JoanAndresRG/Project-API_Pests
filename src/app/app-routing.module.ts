import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { AddEditPetComponent } from './components/add-edit-pet/add-edit-pet.component';
import { ViewPetComponent } from './components/view-pet/view-pet.component';

const routes: Routes = [
  {
    path: 'list-pets',
    component: ListPetsComponent
  },
  {
    path: 'add-pet',
    component: AddEditPetComponent
  },
  {
    path: 'edit-pet/:id',
    component: AddEditPetComponent
  },
  {
    path: 'view-pet/:id',
    component: ViewPetComponent
  },
  {
    path: '',
    redirectTo: 'list-pets',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'list-pets'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
