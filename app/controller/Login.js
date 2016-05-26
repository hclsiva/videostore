Ext.define('masteringextjs.controller.Login', {
        extend: 'Ext.app.Controller',
        requires:[
            'masteringextjs.view.login.Login',
            'masteringextjs.view.util.MD5',
            'masteringextjs.view.login.CapsLockTooltip',
            'masteringextjs.view.main.MyViewPort',
            'masteringextjs.view.util.Util',
            'masteringextjs.view.util.SessionMonitor',
            'masteringextjs.view.locale.Translation'
           ],
        views: [
            'login.Login', // #3
            'main.Header'
        ],
        refs: [
			{
			ref: 'capslockTooltip',
			selector: 'capslocktooltip'
			}
		],
        init: function(application) {
                console.log("Login Init start");
                this.control({
                    "login form button#submit": { // #1
                    click: this.onButtonClickSubmit // #2
                },
                    "login form button#cancel": { // #3
                    click: this.onButtonClickCancel // #4
                },
	                "login form textfield": {
						specialkey: this. onTextfieldSpecialKey
				},
					"login form textfield[name=password]": {
					keypress: this.onTextfieldKeyPress
				},
                "appheader button#logout": {
                    click: this.onButtonClickLogout
                }
            });
                console.log("Login Init ends");
        },
        onButtonClickSubmit: function(button, e, options) {
            console.log('login submit'); // #5
            var formPanel = button.up('form'),            
            login = button.up('login'),
            user = formPanel.down('textfield[name=user]').getValue(),
            pass = formPanel.down('textfield[name=password]').getValue();
            pass = masteringextjs.view.util.MD5.encode(pass);
            Ext.get(login.getEl()).mask("Authenticating... Please wait...",'loading');
            if (formPanel.getForm().isValid()) {
                Ext.Ajax.request({
                    url: 'php/security/login.php',
                    params: {
                        user: user,
                        password: pass
                    },
                    failure: function(conn, response, options, eOpts) {
                        Ext.get(login.getEl()).unmask();
    						Ext.Msg.show({
    							title:'Error!',
    							msg: 'Unable to find the resource login.php',
    							icon: Ext.Msg.ERROR,
    							buttons: Ext.Msg.OK
    						});
    					},
					success: function(conn, response, options, eOpts) {
                                Ext.get(login.getEl()).unmask();
								var result = Ext.JSON.decode(conn.responseText, true); // #1
								if (!result){ // #2
									result = {};
									result.success = false;
									result.msg = conn.responseText;
								}
								if (result.success) { // #3									
									Ext.Msg.show({
										title:'Success',
										msg: 'Success',
										icon: Ext.Msg.INFO,
										buttons: Ext.Msg.OK
									});
                                    login.close(); // #4
                                    Ext.create('masteringextjs.view.main.MyViewPort'); // #5
                                    masteringextjs.view.util.SessionMonitor.start();
								} else {
									Ext.Msg.show({
                                        title:'Error!',
                                        msg: 'Unable to find the resource php/login.php',
                                        icon: Ext.Msg.ERROR,
                                        buttons: Ext.Msg.OK
                                    });
            					}
       						 },
       					});
       				}
       		},
        onButtonClickCancel: function(button, e, options) {
            console.log('login cancel'); // #6
            button.up('form').getForm().reset();
        },
		onTextfieldSpecialKey: function(field, e, options) {
			if (e.getKey() == e.ENTER){
				var submitBtn = field.up('form').down('button#submit');
				submitBtn.fireEvent('click', submitBtn, e, options);
			}
		},
		onTextfieldKeyPress: function(field, e, options) {
			console.log("onTextfieldKeyPress called");
			var charCode = e.getCharCode(); // #1
			console.log("e.shiftKey = " + e.shiftKey + " charCode = " + charCode);
			if((e.shiftKey && charCode >= 97 && charCode <= 122) || 
					(!e.shiftKey && charCode >= 65 && charCode <= 90)){
						if(this.capslocktooltip === undefined){ // #3
							this.capslocktooltip = Ext.widget('capslocktooltip'); 
						}
					console.log("this.capslocktooltip = " + this.getCapslockTooltip());	
					this.capslocktooltip.show(); // #5
			} else {
					if(this.capslocktooltip !== undefined){ // #6
						this.capslocktooltip.hide(); // #7
					}
					
			}
		},//end onTextfieldKeyPress    
        onButtonClickLogout: function(button, e, options) {
            Ext.Ajax.request({
                url: 'php/security/logout.php', // #1
                success: function(conn, response, options, eOpts){
                    var result =  masteringextjs.view.util.Util.decodeJSON(conn.responseText);
                    if (result.success) {
                        button.up('mainviewport').destroy();
                        window.location.reload();
                    }   else {
                        masteringextjs.view.util.Util.showErrorMsg(conn.responseText);
                    }
                },
                failure: function(conn, response, options, eOpts) {
                   masteringextjs.view.util.Util.showErrorMsg(conn.responseText);
                }
            });
    }                
});