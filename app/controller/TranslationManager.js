Ext.define('masteringextjs.controller.TranslationManager', {
    extend: 'Ext.app.Controller',
    views: [
        'locale.Translation' // #1
        ],
    refs: [
        {
            ref: 'translation', // #2
            selector: 'translation'
        }
    ],
    init: function(application) {
        this.control({
            "translation menuitem": { // #3
                click: this.onMenuitemClick
            },
            "translation": { // #4
                beforerender: this.onSplitbuttonBeforeRender
            }
        });
    },
    onMenuitemClick: function(item, e, options) {
        var menu = this.getTranslation(); // #9
        menu.setIconCls(item.iconCls); // #10
        menu.setText(item.text); // #11
        localStorage.setItem("user-lang", item.iconCls); // #12
        window.location.reload(); // #13
    },
    onSplitbuttonBeforeRender: function(abstractcomponent, options) {
        var lang = localStorage ? (localStorage.getItem('user-lang') ||'en') : 'en'; // #5
        abstractcomponent.iconCls = lang; // #6
        if (lang == 'en') { // #7
            abstractcomponent.text = 'English'; // #8
        } else if (lang == 'es'){
            abstractcomponent.text = 'Español';
        } else {
            abstractcomponent.text = 'Português';
        }
    }

});
