import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PetModel } from 'src/app/interfaces/pet.interface';
import { ConfirmDialogsComponent } from 'src/app/shared/confirm-dialogs/confirm-dialogs.component';


const ListPets: PetModel[] = [
  { name: 'Negro', age: 12, breed: 'Unchand', color: 'Black', weight: 23 },
  { name: 'Sembrador', age: 10, breed: 'Labrador', color: 'Golden-whithe', weight: 25 },
  { name: 'Calvin', age: 5, breed: 'Hungara', color: 'Black-Grey', weight: 4 },
  { name: 'Cara Sucia', age: 7, breed: 'Labrador', color: 'Wrong', weight: 14 },
  { name: 'Katiuska', age: 7, breed: 'Hungara', color: 'Chocolate', weight: 19 },
  { name: 'Koki', age: 15, breed: 'Doberman', color: 'Black-Grey', weight: 25 },
];

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css'],
})
export class ListPetsComponent implements AfterViewInit {


  displayedColumns: string[] = ['name', 'age', 'breed', 'color', 'weight', 'actions'];
  dataSource = new MatTableDataSource<PetModel>(ListPets);
  sortedData?: PetModel[];
  messageSnackBar: string = 'Pet successfully removed 🐶 😿'

  constructor(
    private snackBar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDeletePet(): void {
    const dialogRef = this.matDialog.open(ConfirmDialogsComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.snackBar.open(this.messageSnackBar,'Close', {
          duration: 4000,
          direction: 'ltr',
          horizontalPosition: 'center'
        })
        return;
      }
    })
  }
}