import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UploadDataRoutingModule } from './upload-data-routing.module'
import { UploadCsvFilesComponent } from './components/upload-csv-files/upload-csv-files.component'
import { PasteTableDataComponent } from './components/paste-table-data/paste-table-data.component'

@NgModule({
  imports: [
    CommonModule,
    UploadDataRoutingModule
  ],
  declarations: [
    UploadCsvFilesComponent,
    PasteTableDataComponent
  ]
})
export class UploadDataModule { }
