export const menus = [
    {
        title: '首页',
        selected: false,
        icon: 'home'
    },
    {
        title: '文档',
        selected: false,
        icon: 'read'
    },
    {
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
                title: '树状下拉选择器',
                selected: false,
                icon: 'cluster'
            },
            {
                title: '数字渐变',
                selected: false,
                icon: 'rise',
            },
            {
                title: '拖拽列表',
                selected: false,
                icon: 'drag',
            },
            {
                title: '可拖动抽屉',
                selected: false,
                icon: 'column-width',
            },
            {
                title: '组织结构树',
                selected: false,
                icon: 'apartment',
            },
            {
                title: '树状表格',
                selected: false,
                icon: 'branches',
            },
            {
                title: '图片裁剪',
                selected: false,
                icon: 'scissor',
            },
            {
                title: '多功能表格',
                selected: false,
                icon: 'table',
            },
            {
                title: '分割窗口',
                selected: false,
                icon: 'border-inner',
            },
            {
                title: 'Markdown编辑器',
                selected: false,
                icon: 'edit',
            },
            {
                title: '富文本编辑器',
                selected: false,
                icon: 'form',
            },
            {
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
                title: '上传CSV文件',
                selected: false,
                icon: 'file'
            },
            {
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
                title: '上传Excel',
                selected: false,
                icon: 'to-top'
            },
            {
                title: '导出Excel',
                selected: false,
                icon: 'vertical-align-bottom',
            }
        ]
    },
    {
        title: '工具函数',
        selected: false,
        icon: 'tool'
    },
    {
        title: 'i18n-多语言',
        selected: false,
        icon: 'global'
    },
    {
        title: '错误收集',
        selected: false,
        icon: 'bug'
    },
    {
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
                        title: 'level-2-1',
                        selected: false,
                        icon: 'pic-center',
                    },
                    {
                        title: 'level-2-2',
                        selected: false,
                        icon: 'pic-center',
                    }
                ]
            }
        ]
    }
]