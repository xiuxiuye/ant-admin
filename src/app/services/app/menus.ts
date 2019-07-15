export const menus = [
    {
        path: '/home',
        title: '首页',
        selected: false,
        icon: 'home'
    },
    {
        path: '/document',
        title: '文档',
        selected: false,
        icon: 'read'
    },
    {
        path: '/community',
        title: '社区',
        selected: false,
        icon: 'qq'
    },
    {
        title: '组件',
        selected: false,
        icon: 'appstore',
        children: [
            {
                path: '/component-lib/tree-select',
                title: '树状下拉选择器',
                selected: false,
                icon: 'cluster'
            },
            {
                path: '/component-lib/digital-gradient',
                title: '数字渐变',
                selected: false,
                icon: 'rise',
            },
            {
                path: '/component-lib/draggable-list',
                title: '拖拽列表',
                selected: false,
                icon: 'drag',
            },
            {
                path: '/component-lib/draggable-drawer',
                title: '可拖动抽屉',
                selected: false,
                icon: 'column-width',
            },
            {
                path: '/component-lib/organization-tree',
                title: '组织结构树',
                selected: false,
                icon: 'apartment',
            },
            {
                path: '/component-lib/tree-table',
                title: '树状表格',
                selected: false,
                icon: 'branches',
            },
            {
                path: '/component-lib/image-clipper',
                title: '图片裁剪',
                selected: false,
                icon: 'scissor',
            },
            {
                path: '/component-lib/multi-purpose-table',
                title: '多功能表格',
                selected: false,
                icon: 'table',
            },
            {
                path: '/component-lib/split-window',
                title: '分割窗口',
                selected: false,
                icon: 'border-inner',
            },
            {
                path: '/component-lib/markdown-editor',
                title: 'Markdown编辑器',
                selected: false,
                icon: 'edit',
            },
            {
                path: '/component-lib/rich-text-editor',
                title: '富文本编辑器',
                selected: false,
                icon: 'form',
            },
            {
                path: '/component-lib/custom-icons',
                title: '自定义图标',
                selected: false,
                icon: 'highlight',
            }
        ]
    },
    {
        title: '上传数据',
        selected: false,
        icon: 'cloud-upload',
        children: [
            {
                path: '/upload-data/upload-csv-files',
                title: '上传CSV文件',
                selected: false,
                icon: 'file'
            },
            {
                path: '/upload-data/paste-table-data',
                title: '粘贴表格数据',
                selected: false,
                icon: 'copy',
            }
        ]
    },
    {
        title: 'Excel',
        selected: false,
        icon: 'file-excel',
        children: [
            {
                path: '/excel/upload-excel',
                title: '上传Excel',
                selected: false,
                icon: 'to-top'
            },
            {
                path: '/excel/export-excel',
                title: '导出Excel',
                selected: false,
                icon: 'vertical-align-bottom',
            }
        ]
    },
    {
        path: '/tool-function',
        title: '工具函数',
        selected: false,
        icon: 'tool'
    },
    {
        path: '/i18n-lang',
        title: 'i18n-多语言',
        selected: false,
        icon: 'global'
    },
    {
        path: '/error-collection',
        title: '错误收集',
        selected: false,
        icon: 'bug'
    },
    {
        path: '/instructions',
        title: '指令',
        selected: false,
        icon: 'code'
    },
    {
        title: '多级菜单',
        selected: false,
        icon: 'menu',
        children: [
            {
                path: '/multilevel-menu/menu2-1',
                title: 'level-1',
                selected: false,
                icon: 'pic-center'
            },
            {
                title: 'level-2',
                selected: false,
                icon: 'pic-center',
                children: [
                    {
                        path: '/multilevel-menu/menu2-2/menu3-1',
                        title: 'level-2-1',
                        selected: false,
                        icon: 'pic-center',
                    }
                ]
            }
        ]
    }
]