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
    component: TreeSelectComponent,
    data: {
      title: '树状下拉选择器',
      type: 'menu'
    }
  },
  {
    path: 'digital-gradient',
    component: DigitalGradientComponent,
    data: {
      title: '数字渐变',
      type: 'menu'
    }
  },
  {
    path: 'draggable-list',
    component: DraggableListComponent,
    data: {
      title: '拖拽列表',
      type: 'menu'
    }
  },
  {
    path: 'draggable-drawer',
    component: DraggableDrawerComponent,
    data: {
      title: '可拖动抽屉',
      type: 'menu'
    }
  },
  {
    path: 'organization-tree',
    component: OrganizationTreeComponent,
    data: {
      title: '组织结构树',
      type: 'menu'
    }
  },
  {
    path: 'tree-table',
    component: TreeTableComponent,
    data: {
      title: '树状表格',
      type: 'menu'
    }
  },
  {
    path: 'image-clipper',
    component: ImageClipperComponent,
    data: {
      title: '图片裁剪',
      type: 'menu'
    }
  },
  {
    path: 'multi-purpose-table',
    component: MultiPurposeTableComponent,
    data: {
      title: '多功能表格',
      type: 'menu'
    }
  },
  {
    path: 'split-window',
    component: SplitWindowComponent,
    data: {
      title: '分割窗口',
      type: 'menu'
    }
  },
  {
    path: 'markdown-editor',
    component: MarkdownEditorComponent,
    data: {
      title: 'markdown编辑器',
      type: 'menu'
    }
  },
  {
    path: 'rich-text-editor',
    component: RichTextEditorComponent,
    data: {
      title: '富文本编辑器',
      type: 'menu'
    }
  },
  {
    path: 'custom-icons',
    component: CustomIconsComponent,
    data: {
      title: '自定义图标',
      type: 'menu'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLibRoutingModule { }
