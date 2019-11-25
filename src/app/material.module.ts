import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonToggleModule,
  MatTableModule,
  MatSidenavModule,
  MatPaginatorModule,
} from '@angular/material'

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTableModule,
    MatSidenavModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule { }