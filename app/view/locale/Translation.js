Ext.define('masteringextjs.view.locale.Translation', {
    extend: 'Ext.button.Split',
    xtype:'translation',
    menu: Ext.create('Ext.menu.Menu', { // #3
        items: [
            {
                xtype: 'menuitem',
                iconCls: 'en',
                text: 'English'
            },
            {
                xtype: 'menuitem',
                iconCls: 'es',
                text: 'Español'
            },
            {
                xtype: 'menuitem',
                iconCls: 'pt_BR',
                text: 'Português'
            }
        ]
    })
});