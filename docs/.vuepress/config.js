module.exports = {
	title: '个人主页', 
    description: '徐玮的博客',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
	 themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '博文',
              items: [
                { text: 'Android', link: '/android/' },
                { text: 'ios', link: '/ios/' },
                { text: 'Web', link: '/web/' }
              ] 
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/daboluocao' },
        ],
        sidebar: {
            '/guide/': [
                        "",
                        "one", 
                         "two"
                         ],
			'/redis/': [
                        "",
                        "start"
                         ],
			'/jvm/': [
                        "",
                        "start"
                         ],
			'/hystrix/': [
                        "",
                        "quickstart",
						"configuration"
                         ]
            },
        sidebarDepth: 3,
        lastUpdated: 'Last Updated', 
    }
}