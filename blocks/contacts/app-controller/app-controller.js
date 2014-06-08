modules.define(
    'app-controller',
    [
        'inherit',
        'events',
        'jquery',
        'i-bem__dom',
        'bem-view',
        'presenter',
        'contacts-service',
        'contacts-presenter',
        'contacts-view',
        'edit-contact-presenter',
        'edit-contact-view'
    ],
    function(
        provide,
        inherit,
        events,
        $,
        BemDom,
        BemView,
        Presenter,
        ContactsService,
        ContactsPresenter,
        ContactsView,
        EditContactPresenter,
        EditContactView) {

provide(inherit(Presenter, {
    __constructor : function() {
        this.__base.apply(this, arguments);
        this._eventBus = new events.Emitter();
        this._contactsService = new ContactsService();

        this._currentPresenter = null;
    },

    _run : function() {
        var appElem = $('body');
        BemDom.destruct(appElem, true);

        this._view = appElem.bem('bem-view');

        this._eventBus.on({
            'contact-add' : this._onContactAdd,
            'contact-edit' : this._onContactEdit,
            'contact-update' : this._onContactUpdate,
            'contact-list' : this._onContactsList
        }, this);

        this._listContacts();
    },

    _listContacts : function() {
        this._runPresenter(ContactsPresenter, ContactsView);
    },

    _editContact : function() {
        this._runPresenter(EditContactPresenter, EditContactView);
    },

    _runPresenter : function(presenterCls, viewCls) {
        this._currentPresenter && this._currentPresenter.stop();

        var presenter = new presenterCls(
            this._eventBus,
            viewCls,
            this._contactsService);
        presenter.run(this._view);

        this._currentPresenter = presenter;
    },

    _onContactsList : function() {
        this._listContacts();
    },

    _onContactEdit : function() {
        this._editContact();
    },

    _onContactUpdate : function() {
        this._listContacts();
    }
}));

});
