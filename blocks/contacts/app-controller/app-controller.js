modules.define(
    'app-controller',
    ['inherit', 'events', 'jquery', 'contacts-presenter', 'contacts-view', 'i-bem__dom'],
    function(provide, inherit, events, $, ContactsPresenter, ContactsView, BemDom) {

provide(inherit({
    __constructor : function() {
        this._eventBus = new events.Emitter().on({
            'contact-add'  : function() { console.log(e.type) },
            'contact-edit' : function() { console.log(e.type) }
        });

        this._container = $('body');
    },

    run : function() {
        BemDom.destruct(this._container, true);

        var contactsPresenter = new ContactsPresenter(this._eventBus, ContactsView);
        contactsPresenter.run(this._container);
    }
}));

});
