import { NgModule } from '@angular/core';

// modules material

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
