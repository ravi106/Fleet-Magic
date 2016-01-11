Ext.define('FmApp.view.dashboard.CategoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.categorycontroller',

    onCarTypeClick:function(me){
    	var categoryGridStore = this.getView().query('#categoryGrid')[0].getStore();
    	if(me.itemId == 'sedanBtn'){
    		categoryGridStore.filter('color','green');
    	}else if(me.itemId == 'hatchBackBtn'){
    		categoryGridStore.filter('color','blue');
    	}else if(me.itemId == 'suvBtn'){
    		categoryGridStore.filter('color','black');
    	}    	
    }

});