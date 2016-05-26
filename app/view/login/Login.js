Ext.define('masteringextjs.view.login.Login', { // #1
            extend: 'Ext.window.Window', // #2
            alias: 'widget.login', // #3
            autoShow: true, // #4
            height: 200, // #5
            width: 360, // #6
            requires: [
                'masteringextjs.view.locale.Translation'
            ],
            layout: {
                type: 'fit' // #7
            },
            iconCls: 'key', // #8
            title: translations.login, // #9
            closeAction: 'hide', // #10
            closable: false, // #11
			items: [
						{
    						xtype: 'form', // #12
    						bodyPadding: 15, // #14
    						defaults: { // #15
        						xtype: 'textfield', // #16
        						anchor: '100%', // #17
        						labelWidth: 60 // #18
						    },
    						items: [
            						{
                						name: 'user',
                						fieldLabel: translations.user,
                                        allowBlank: false, // #20
                                        vtype: 'alphanum', // #21
                                        minLength: 3, // #22
                                        msgTarget: 'under', // #23
                                        maxLength: 25
            						},
            						{
                						inputType: 'password', // #19
                						name: 'password',
                						fieldLabel: translations.password,
                                        enableKeyEvents: true,
                                        id: 'password',
                                        allowBlank: false, // #20
                                        vtype: 'alphanum', // #21
                                        minLength: 3, // #22
                                        msgTarget: 'under', // #23
                                        maxLength: 15                                        
            						}
						      ],
                            dockedItems: [
                            {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'translation'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'tbseparator'
                                },                                                                
                                {
                                    xtype: 'button', // #25
                                    itemId: 'cancel',
                                    //iconCls: 'cancel',
                                    text: translations.cancel
                                },
                                {
                                    xtype: 'button', // #26
                                    itemId: 'submit',
                                    //formBind: true, // #27
                                    //iconCls: 'key-go',
                                    text: translations.submit
                                }
                            ]
                        }
                    ]
				}
		],
        
    });