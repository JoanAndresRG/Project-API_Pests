import { Component, OnInit } from '@angular/core';
import { PetModel } from 'src/app/interfaces/pet.interface';




@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styleUrls: ['./view-pet.component.css']
})
export class ViewPetComponent implements OnInit {
  petTest!: PetModel;
  ngOnInit(): void {
    const PetTest: PetModel =
    {
      name: 'Negro',
      image: 'https://th.bing.com/th/id/OIG.lQ3se5WG0fWD47qIsH.O?pid=ImgGn',
      age: 12,
      breed: 'Unchand',
      color: 'Black',
      weight: 24
    }
    if (PetTest == null) return;
    this.petTest = PetTest;
  }

}
