import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class PetValidator {
    constructor(private fb: FormBuilder) { }

    public formValidatorPet(): any {
        return this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
            image: ['', Validators.required],
            age: [null, [Validators.required, Validators.max(50), Validators.min(1)]],
            breed: ['', Validators.required],
            color: ['', Validators.required],
            weight: [null, [Validators.required, Validators.max(1000), Validators.min(1)]],
        });
    }
}