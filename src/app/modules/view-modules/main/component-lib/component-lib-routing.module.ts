import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TreeSelectComponent } from './components/tree-select/tree-select.component'
import { DigitalGradientComponent } from './components/digital-gradient/digital-gradient.component'
import { DraggableListComponent } from './components/draggable-list/draggable-list.component'
import { DraggableDrawerComponent } from './components/draggable-drawer/draggable-drawer.component'
import { OrganizationTreeComponent } from './components/organization-tree/organization-tree.component'
import { TreeTableComponent } from './components/tree-table/tree-table.component'
import { ImageClipperComponent } from './components/image-clipper/image-clipper.component'
import { MultiPurposeTableComponent } from './components/multi-purpose-table/multi-purpose-table.component'
import { SplitWindowComponent } from './components/split-window/split-window.component'
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component'
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component'
import { CustomIconsComponent } from './components/custom-icons/custom-icons.component'

const routes: Routes = [
  {
    path: 'tree-select',
    component: TreeSelectComponent
  },
  {
    path: 'digital-gradient',
    component: DigitalGradientComponent
  },
  {
    path: 'draggable-list',
    component: DraggableListComponent
  },
  {
    path: 'draggable-drawer',
    component: DraggableDrawerComponent
  },
  {
    path: 'organization-tree',
    component: OrganizationTreeComponent
  },
  {
    path: 'tree-table',
    component: TreeTableComponent
  },
  {
    path: 'image-clipper',
    component: ImageClipperComponent
  },
  {
    path: 'multi-purpose-table',
    component: MultiPurposeTableComponent
  },
  {
    path: 'split-window',
    component: SplitWindowComponent
  },
  {
    path: 'markdown-editor',
    component: MarkdownEditorComponent
  },
  {
    path: 'rich-text-editor',
    component: RichTextEditorComponent
  },
  {
    path: 'custom-icons',
    component: CustomIconsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLibRoutingModule { }
