import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UploadExcelComponent } from './components/upload-excel/upload-excel.component'
import { ExportExcelComponent } from './components/export-excel/export-excel.component'

const routes: Routes = [
  {
    path: 'upload-excel',
    component: UploadExcelComponent,
    data: {
      title: '上传Excel',
      type: 'menu'
    }
  },
  {
    path: 'export-excel',
    component: ExportExcelComponent,
    data: {
      title: '导出Excel',
      type: 'menu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelRoutingModule { }
