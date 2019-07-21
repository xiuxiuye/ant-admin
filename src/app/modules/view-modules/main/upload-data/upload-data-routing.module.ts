import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UploadCsvFilesComponent } from './components/upload-csv-files/upload-csv-files.component'
import { PasteTableDataComponent } from './components/paste-table-data/paste-table-data.component'

const routes: Routes = [
  {
    path: 'upload-csv-files',
    component: UploadCsvFilesComponent,
    data: {
      title: '上传CSV文件',
      type: 'menu'
    }
  },
  {
    path: 'paste-table-data',
    component: PasteTableDataComponent,
    data: {
      title: '粘贴表格数据',
      type: 'menu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadDataRoutingModule { }
