module.exports = {
    title: '小怂博客',
    description: '开发者的博客世界',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: `/favicon.ico`
            }
        ]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    base: '/blog-vuepress/',
    evergreen: true,
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '个人简介', link: '/own/' },
            { text: '文笔生花', link: '/article/' },
            { text: '前沿技术', link: '/ft/' },
            {
                text: '语言',
                items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'External', link: 'https://www.baidu.com' }
        ],
        sidebarDepth: 2,
        sidebar: {
            // 侧边栏在 /index/ 目录上
            '/own/': [
                ['', '个人简介'],
                ['/own/个人技术', '个人技术'],
                ['/own/个人爱好', '个人爱好']
            ],
            '/article/': [
                ['', '文笔生花'],
                {
                    title: 'Vue',
                    children: [
                        ['/article/vue篇/基础篇', '基础篇'],
                        ['/article/vue篇/进阶篇', '进阶篇'],
                        ['/article/vue篇/源码解读篇', '源码解读篇'],
                        ['/article/vue篇/业务篇', '业务篇']
                    ]
                },
                {
                    title: 'React',
                    children: [
                        ['/article/react篇/基础篇', '基础篇'],
                        ['/article/react篇/进阶篇', '进阶篇'],
                        ['/article/react篇/源码解读篇', '源码解读篇'],
                        ['/article/react篇/业务篇', '业务篇']
                    ]
                },
                {
                    title: '小程序',
                    children: [
                        ['/article/小程序篇/基础篇', '基础篇'],
                        ['/article/小程序篇/进阶篇', '进阶篇'],
                        ['/article/小程序篇/源码解读篇', '源码解读篇'],
                        ['/article/小程序篇/业务篇', '业务篇']
                    ]
                },
                {
                    title: 'Webpack',
                    children: [
                        ['/article/webpack篇/基础篇', '基础篇'],
                        ['/article/webpack篇/进阶篇', '进阶篇'],
                        ['/article/webpack篇/源码解读篇', '源码解读篇'],
                        ['/article/webpack篇/业务篇', '业务篇']
                    ]
                }
            ],
            '/ft/': [
                ['', '前沿技术'],
                {
                    title: 'GraphQL',
                    children: [
                        ['/ft/GraphQL篇/初识', '初识'],
                        ['/ft/GraphQL篇/应用', '应用']
                    ]
                },
                {
                    title: 'serverless',
                    children: [
                        ['/ft/serverless篇/初识', '初识'],
                        ['/ft/serverless篇/应用', '应用']
                    ]
                },
                {
                    title: 'WebAssembly',
                    children: [
                        ['/ft/WebAssembly篇/初识', '初识'],
                        ['/ft/WebAssembly篇/应用', '应用']
                    ]
                },
                {
                    title: '前端微服务',
                    children: [
                        ['/ft/前端微服务篇/初识', '初识'],
                        ['/ft/前端微服务篇/应用', '应用']
                    ]
                }
            ]
        }
    }
}
