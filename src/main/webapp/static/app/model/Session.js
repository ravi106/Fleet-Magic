Ext.define('FmApp.model.Session', {
    extend: 'Ext.data.Model',
    fields: [
		{ name: 'id', type: 'int' },
		{ name: 'approved', type: 'bool' },
		{ name: 'interestCount', type: 'int' },
		{ name: 'interestLevel', type: 'int' },
		 { name: 'roomCapacity', type: 'int' },
        { name: 'title', type: 'string' }
    ],
	 schema: {
        namespace: 'MVVM.model',
        proxy: {
            type: 'rest',
            url: 'data/sessions.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});
