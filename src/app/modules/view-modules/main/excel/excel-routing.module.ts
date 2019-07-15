import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UploadExcelComponent } from './components/upload-excel/upload-excel.component'
import { ExportExcelComponent } from './components/export-excel/export-excel.component'

const routes: Routes = [
  {
    path: 'upload-excel',
    component: UploadExcelComponent
  },
  {
    path: 'export-excel',
    component: ExportExcelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelRoutingModule { }
