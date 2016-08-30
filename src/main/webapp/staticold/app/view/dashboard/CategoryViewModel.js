Ext.define('FmApp.view.dashboard.CategoryViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.categoryviewmodel',
	 stores: {
        categoryStore: {
	        autoLoad: true,
	        proxy: {
	            type: 'ajax',
	            //url: 'http://localhost:8080/fleetmagic/vehicles',
	            url: '../../fleetmagic/vehicles',
	            reader: {
	                type: 'json',
	                rootProperty: 'data'
	            },
	            writer: {
	                type: 'json'
	            }
	        }
        }
    }
});