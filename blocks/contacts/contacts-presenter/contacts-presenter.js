modules.define(
    'contacts-presenter',
    ['inherit', 'presenter'],
    function(provide, inherit, Presenter) {

provide(inherit(Presenter, {
    __constructor : function(eventBus, viewCls, rpcService) {
        this.__base(eventBus, viewCls);
        this._service = rpcService;
    },

    _run : function() {
        this._createView();

        // FIXME: do something with this part
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
            .then(this._onGotContacts, this);
    },

    fetchContacts : function() {
        this._service
            .getContacts()
            .then(this._onGotContacts, this);
    },

    _onGotContacts : function(contacts) {
        var data = [];
        Object.keys(contacts).forEach(function(id) {
            data.push(contacts[id]);
        });
        this._view.setData(data);
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
