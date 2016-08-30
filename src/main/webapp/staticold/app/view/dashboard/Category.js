Ext.define('FmApp.view.dashboard.Category', {
    extend: 'Ext.container.Container',
    requires:['FmApp.view.dashboard.CategoryController','FmApp.view.dashboard.CategoryViewModel'],
    xtype:'category',
    viewModel:{
        type:'categoryviewmodel'
    },
    controller:{
        type: 'categorycontroller'
    } ,
    layout: {
		        type: 'vbox',
		        pack: 'center',
				align: 'middle'
		    },
    width:'100%',
    items:[
	   {
        xtype: 'buttongroup',
        
        items: [
        	{
        	 text: 'All'
	        },
	        {
	        	 text: '2015'
	        },
	        {
	        	 text: '2014'
	        },
	        {
	        	 text: '2013'
	        },
	        {
	        	 text: '2012'
	        },
	        {
	        	 text: 'Older',
	        	 margin:'0 10 0 0'
	        }]
    	},{
    		xtype:'container',
    		layout : {
                type : 'hbox',
                pack : 'center',
                //align:'center'
            },
            margin:'10 0 10 0',
            width:"100%",
            /*style: {
                       borderColor: 'black',
                       borderStyle: 'solid'
                    },*/

    		items:[
    			{
                    xtype:'container',
                    layout : {
                        type : 'vbox',
                        pack : 'center',
                        align:'center'
                    },
                    style: {
                       borderColor: 'black',
                       borderStyle: 'solid',
                       //boxShadow: '5px 5px 5px #888',
                       borderWidth: '1px'
                    },
                    padding:5,
                    items:[{
                        xtype:'label',
                        text:'Sedan / Full Size'
                    },
                    {
                        xtype:'image',
                        src:'resources/images/sedan.jpg',
                        width:120,
                        height:60
                    },{
                         xtype:'label',
                        text:'Total Cars: 20'
                    },{
                        xtype:'button',
                        text:'View All',
                        itemId:'sedanBtn',
                        listeners:{
                            click:'onCarTypeClick'
                        }
                    }]
                },
                {
                    xtype:'container',
                    layout : {
                        type : 'vbox',
                        pack : 'center',
                        align:'center'
                    },
                    style: {
                       borderColor: 'black',
                       borderStyle: 'solid',
                        //boxShadow: '5px 5px 5px #888',
                        borderWidth: '1px'
                    },
                    padding:5,
                    margin:'0 0 0 50',
                    items:[{
                        xtype:'label',
                        text:'Hatch Back'
                    },
                    {
                        xtype:'image',
                        src:'resources/images/hatchbackCar.png',
                        width:120,
                        height:60
                    },{
                         xtype:'label',
                        text:'Total Cars: 20'
                    },{
                        xtype:'button',
                        text:'View All',
                         itemId:'hatchBackBtn',
                        listeners:{
                            click:'onCarTypeClick'
                        }
                    }]
                },
               {
                    xtype:'container',
                    layout : {
                        type : 'vbox',
                        pack : 'center',
                        align:'center'
                    },
                    style: {
                       borderColor: 'black',
                       borderStyle: 'solid',
                       // boxShadow: '5px 5px 5px #888',
                        borderWidth: '1px'
                    },
                    padding:5,
                    margin:'0 0 0 50',
                    items:[{
                        xtype:'label',
                        text:'SUV'
                    },
                    {
                        xtype:'image',
                        src:'resources/images/suv.jpg',
                        width:120,
                        height:60
                    },{
                         xtype:'label',
                        text:'Total Cars: 20'
                    },{
                        xtype:'button',
                        text:'View All',
                        itemId:'suvBtn',
                        listeners:{
                            click:'onCarTypeClick'
                        }
                    }]
                }
    		]
    	},
        {
            xtype:'grid',
            width:"100%",
            flex:1,
            maxHeight:400,
            itemId:'categoryGrid',
            bind:{
                store:'{categoryStore}'
            },
            columns: [
                { text: 'Brand', dataIndex: 'make',flex:1 },
                { text: 'Model', dataIndex: 'model',flex:1 },
                { text: 'Type', dataIndex: 'type',flex:1 },
                { text: 'Status', dataIndex: 'status',flex:1 },
                { text: 'Color', dataIndex: 'color',flex:1 }    
            ]
        }
    ]

});