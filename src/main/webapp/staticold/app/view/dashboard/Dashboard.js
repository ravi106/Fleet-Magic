Ext.define('FmApp.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    requires:['FmApp.view.dashboard.DashboardController',
    'FmApp.view.dashboard.DashboardViewModel','FmApp.view.dashboard.Category'
    ],
    xtype:'dashboard',
    items:[
	    {
	    	xtype:'container',
	    	layout: {
		        type: 'vbox',
		        pack: 'center',
				align: 'middle'
		    },
		    items:[{
	            xtype      : 'fieldcontainer',
	            defaultType: 'radiofield',
	            layout: 'hbox',
	            items: [
	                {
	                    boxLabel  : 'Browse by Category',
	                    inputValue: 'm',
	                    id        : 'radio1'
	                }, {
	                    boxLabel  : 'Search Inventory',
	                    inputValue: 'l',
	                    id        : 'radio2',
	                    margin	  : '0 0 0 20'
	                }
	            ]
       		 },{
       		 	xtype:'panel',
       		 	layout: 'card',
       		 	width:'100%',
			    items: [
			       { xtype:'category' }
			       //  { html: 'Card 2' }
			    ]
       		 }]
	    }
    ]

});