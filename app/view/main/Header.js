Ext.define('masteringextjs.view.main.Header', {
    extend: 'Ext.toolbar.Toolbar', // #1
    alias: 'widget.appheader', // #2
    height: 40, // #3
    ui: 'footer', // #4
    style: 'border-top: 4px solid #4c72a4;border-bottom: 4px solid #4c72a4;', // #5
    items: [
        {
            xtype: 'label', // #6
            html: '<div id="titleHeader">Video Store Manager<spanstyle="font-size:12px;"> - Fujitsu inc.</span></div>'
        },
        {
            xtype: 'tbfill' // #7
        },
        {
            xtype: 'translation'
        },
        {
            xtype: 'tbseparator' // #8
        },
        {
            xtype: 'button', // #9
            text: 'Logout',
            itemId: 'logout',
            //iconCls: 'logout'
        }
]
});