Ext.define('FmApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires:['FmApp.view.main.MainController',
    			'FmApp.view.main.MainViewModel',
    			'FmApp.view.header.HeaderContainer',
    			'FmApp.view.dashboard.Dashboard'],
    xtype: 'app-main',
	layout:'border',
	viewModel: {
        type: 'mainViewModel'
    },
    controller:'mainConroller',
	referenceHolder: true,
	items:[{
			xtype:'headercontainer',
			height:80,
			region:'north',
			html:'test north',
			cls:'headerBg'
		},
		{
			xtype:'dashboard',
			flex:1,
			region:'center'
		},{
			xtype:'container',
			region:'south',
			height:30,
			html:'test south',
			cls:'footerBg'
		}
	]
});