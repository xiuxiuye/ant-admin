import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ComponentLibRoutingModule } from './component-lib-routing.module'
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

@NgModule({
  imports: [
    CommonModule,
    ComponentLibRoutingModule
  ],
  declarations: [
    TreeSelectComponent,
    DigitalGradientComponent,
    DraggableListComponent,
    DraggableDrawerComponent,
    OrganizationTreeComponent,
    TreeTableComponent,
    ImageClipperComponent,
    MultiPurposeTableComponent,
    SplitWindowComponent,
    MarkdownEditorComponent,
    RichTextEditorComponent,
    CustomIconsComponent
  ]
})
export class ComponentLibModule { }
