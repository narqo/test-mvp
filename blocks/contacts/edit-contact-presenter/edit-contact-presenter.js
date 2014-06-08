modules.define(
    'edit-contact-presenter',
    ['inherit', 'presenter'],
    function(provide, inherit, Presenter) {

provide(inherit(Presenter, {
    __constructor : function(eventBus, viewCls, rpcService) {
        this.__base(eventBus, viewCls);
        this._service = rpcService;
    },

    _run : function() {
        this._viewCls.on({
            'contact-save' : this._onContactSave,
            'contact-cancel' : this._onContactCancel
        }, this);

        // FIXME:
        var CONTACT_ID = 2;
        this._service
            .getContact(CONTACT_ID)
            .then(this._createView, this);
    },

    _stop : function() {
        this._viewCls
            .un('contact-save', this._onContactSave)
            .un('contact-cancel', this._onContactCancel);
    },

    contactSave : function(id, data) {
        this._service
            .updateContact(id, data)
            .then(function() {
                this._eventBus.emit('contact-update');
            }, this);
    },

    _onContactSave : function(e, data) {
        console.log('-> save contact');
        this.contactSave(data.id, data.contact);
    },

    _onContactCancel : function(e) {

    }
}));

});
