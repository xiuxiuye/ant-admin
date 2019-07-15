import { Routes } from '@angular/router'
import { MainComponent } from './main.component'

const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/multilevel-menu/menu2-2/menu3-1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'home',
    component: MainComponent,
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'document',
    component: MainComponent,
    loadChildren: () => import('./document/document.module').then(mod => mod.DocumentModule)
  },
  {
    path: 'community',
    component: MainComponent,
    loadChildren: () => import('./community/community.module').then(mod => mod.CommunityModule)
  },
  {
    path: 'component-lib',
    component: MainComponent,
    loadChildren: () => import('./component-lib/component-lib.module').then(mod => mod.ComponentLibModule)
  },
  {
    path: 'upload-data',
    component: MainComponent,
    loadChildren: () => import('./upload-data/upload-data.module').then(mod => mod.UploadDataModule)
  },
  {
    path: 'excel',
    component: MainComponent,
    loadChildren: () => import('./excel/excel.module').then(mod => mod.ExcelModule)
  },
  {
    path: 'tool-function',
    component: MainComponent,
    loadChildren: () => import('./tool-function/tool-function.module').then(mod => mod.ToolFunctionModule)
  },
  {
    path: 'i18n-lang',
    component: MainComponent,
    loadChildren: () => import('./i18n-lang/i18n-lang.module').then(mod => mod.I18nLangModule)
  },
  {
    path: 'error-collection',
    component: MainComponent,
    loadChildren: () => import('./error-collection/error-collection.module').then(mod => mod.ErrorCollectionModule)
  },
  {
    path: 'instructions',
    component: MainComponent,
    loadChildren: () => import('./instructions/instructions.module').then(mod => mod.InstructionsModule)
  },
  {
    path: 'multilevel-menu',
    component: MainComponent,
    loadChildren: () => import('./multilevel-menu/multilevel-menu.module').then(mod => mod.MultilevelMenuModule)
  }
]

export { MainRoutes }
