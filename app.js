/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'masteringextjs',    
    extend: 'masteringextjs.Application',
    requires:[
        'masteringextjs.controller.Login',
        'masteringextjs.controller.TranslationManager',
    ],
    controllers:[
            'Login',
            'TranslationManager'
    ],
    init: function() {
            console.log("App Init start");    		
            splashscreen = Ext.getBody().mask('Loading application','splashscreen');
            splashscreen.addCls('splashscreen');
            Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
                                                    cls: 'x-splash-icon'
                                                    });
            console.log("App Init ends");
    },
    launch: function () {
        var task = new Ext.util.DelayedTask(function() { // #1
                            splashscreen.fadeOut({
                                duration: 1000,
                                remove:true
                            });
                            splashscreen.next().fadeOut({
                                duration: 1000,
                                remove:true,
                                listeners: {
                                    afteranimate: function(el, startTime, eOpts ){
                                        Ext.widget('login'); // #1
                                    }
                                }
                            });
                        });
        task.delay(2000);
        console.log("launch called");
    },
    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    //mainView: 'masteringextjs.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to masteringextjs.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
