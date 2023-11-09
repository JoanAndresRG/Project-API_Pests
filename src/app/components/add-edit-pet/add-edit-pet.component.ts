import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PetModel } from 'src/app/interfaces/pet.interface';
import { PetValidator } from 'src/app/validators/pet.validator';

@Component({
  selector: 'app-add-edit-pet',
  templateUrl: './add-edit-pet.component.html',
  styleUrls: ['./add-edit-pet.component.css']
})
export class AddEditPetComponent implements OnInit {
  formValidator!: FormGroup;
  titleComponent: string = 'Add-New-Pet';

  constructor(
    private valid: PetValidator,
    private activateRoute: ActivatedRoute
  ) {
    this.formValidator = this.valid.formValidatorPet();
  }
  ngOnInit(): void {
    this.activateRoute.url.subscribe((url) => {
      if (url[0].path === 'edit-pet') {
        this.titleComponent = 'Edit-Pet'
        return;
      }
    })
  }

  previewImage(): void {
    const imageUrl = this.formValidator.get('image')?.value;
    const imgElement = document.getElementById('preview-image');
    if (imgElement) {
      imgElement.setAttribute('src', imageUrl);
    }
  }

  onSubmit(): void {
    if (this.formValidator.invalid) return;
    const PET: PetModel = {
      name: this.formValidator.get('name')?.value,
      image: this.formValidator.get('image')?.value,
      age: this.formValidator.get('age')?.value,
      breed: this.formValidator.get('breed')?.value,
      color: this.formValidator.get('color')?.value,
      weight: this.formValidator.get('weight')?.value,
    }
    console.log({ PET });

  }
}
