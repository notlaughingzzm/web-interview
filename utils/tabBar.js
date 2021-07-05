 let list =[{  
					iconPath: "/static/uview/example/component.png",
					selectedIconPath: "/static/uview/example/component_select.png", // 激活(选中)的图标，同上
					text: '首页', // 显示的提示文字
					count: 2, // 红色角标显示的数字，如果需要移除角标，配置此参数为0即可
					isDot: true,   // 如果配置此值为true，那么角标将会以红点的形式显示
					pagePath: "/pages/home/index", // 点击某一个item时，跳转的路径，此路径必须是pagees.json中tabBar字段中定义的路径
          customIcon: false, // 如果使用自定义扩展的图标库字体，需配置此值为true
                            // 自定义字体图标库教程：https://www.uviewui.com/guide/customIcon.html
          midButton: false, // 如果是凸起按钮项，需配置此值为true
				},
				{
					iconPath: "/static/uview/example/js.png",
					selectedIconPath: "/static/uview/example/js_select.png",
					text: '发布',
					midButton: true,  
					pagePath: "/pages/publish/index",
          customIcon: false,
				},
				{
					iconPath: "account",
					selectedIconPath: "account-fill",
					text: '我的',
          customIcon: false,
					pagePath: "/pages/my/index",
          customIcon: false,
				},
			]
 
export default list