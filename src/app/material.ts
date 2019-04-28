import { MatTableModule, MatButtonModule, MatCheckboxModule, MatListModule, MatCardModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
@NgModule({
  imports: [ MatFormFieldModule, MatTableModule, MatButtonModule, MatCheckboxModule, MatListModule, MatCardModule, MatIconModule, MatInputModule ],
  exports: [ MatFormFieldModule, MatTableModule, MatButtonModule, MatCheckboxModule, MatListModule, MatCardModule, MatIconModule, MatInputModule ]
})

export class MaterialModule { }
