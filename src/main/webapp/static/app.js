Ext.application({
    name: 'FmApp',
	views:['FmApp.view.main.Main'],
    launch: function() {
		Ext.create('Ext.container.Viewport',{
			layout:'border',
			autoShow:true,
			items:[
			{
				xtype:'app-main',
				region:'center'
			}
			]
		});
        
    }
});