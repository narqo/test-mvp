modules.define(
    'contacts-presenter',
    ['inherit', 'presenter', 'contacts-service'],
    function(provide, inherit, Presenter, ContactsService) {

provide(inherit(Presenter, {
    __constructor : function(eventBus, viewCls) {
        this.__base(eventBus, viewCls);
        this._service = new ContactsService();
    },

    _run : function() {
        var ctx = this._view.domElem;
        this._viewCls
            .on(ctx, 'contact-add', this._onContactAdd, this)
            .on(ctx, 'contact-delete', this._onContactRemove, this)
            .on(ctx, 'contact-edit', this._onContactEdit, this);

        this.fetchContacts();
    },

    createContact : function() {
        this._eventBus.emit('contact-add');
    },

    editContact : function(id) {
        this._eventBus.emit('contact-edit', id);
    },

    removeContacts : function(ids) {
        this._service
            .removeContacts(ids)
            .then(function(newContacts) {
                // TODO: map data
                this._onGotContacts(newContacts);
            }, this);
    },

    fetchContacts : function() {
        this._service
            .getContacts()
            .then(this._onGotContacts, this);
    },

    _onGotContacts : function(details) {
        this._view.setData(details);
    },

    _onContactAdd : function() {
        this.createContact();
    },

    _onContactEdit : function(e, data) {
        this.editContact(data.id);
    },

    _onContactRemove : function(e, data) {
        this.removeContacts(data.ids);
    }
}));

});
