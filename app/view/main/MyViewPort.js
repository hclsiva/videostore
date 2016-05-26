Ext.define('masteringextjs.view.main.MyViewPort', {
	extend: 'Ext.container.Viewport', // #1
	alias: 'widget.mainviewport', // #2
	requires: [
			'masteringextjs.view.main.Header' // #3
	],
	layout: {
		type: 'border' // #4
	},
	items: [
			{
				xtype: 'container', // #5
				width: 185,
				collapsible: true,
				region: 'west',
				split:true,
				style: 'background-color: #8FB488;'
			},
			{
				xtype: 'appheader', // #6
				region: 'north'
			},
			{
				xtype: 'container', // #7
				region: 'center'
			},
			{
				xtype: 'container', // #8
				region: 'south',
				height: 30,
				style: 'border-top: 1px solid #4c72a4;',
				html: '<div id="titleHeader"><center><span style="fontsize:10px;">Fujitsu Video Store - Sivashankar - http://www.fujitsu.com</span></center></div>'
			}
		]
});