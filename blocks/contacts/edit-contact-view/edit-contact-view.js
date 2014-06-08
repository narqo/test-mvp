modules.define(
    'edit-contact-view',
    ['bem-view'],
    function(provide, BemView) {

var BLOCK_NAME = this.name,
    ACTION_SAVE = 'save',
    ACTION_CANCEL = 'cancel';

provide(BemView.decl(BLOCK_NAME, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._inputs = null;
            }
        }
    },

    _getInputs : function() {
        return this._inputs || (this._inputs = this.findBlocksInside('input'));
    },

    _serilialize : function() {
        return this._getInputs().reduce(function(data, input) {
            var domElem = input.domElem,
                key = input.domElem.attr('name');
            data[key] = domElem.val();
            return data;
        }, {});
    },

    _onAction : function(e, data) {
        if(data.action === ACTION_SAVE) {
            this._onSaveAction();
        } else if(data.action === ACTION_CANCEL) {
            this._onCancelAction();
        }
    },

    _onSaveAction : function() {
        this.emit('contact-save', { id : this.params['contact-id'], contact : this._serilialize() });
    },

    _onCancelAction : function() {

    }
}, {
    live : function() {
        this.liveInitOnBlockInsideEvent('action', 'action', this.prototype._onAction);
    },

    buildBemjson : function(contact) {
        return {
            block : BLOCK_NAME,
            js : { 'contact-id' : contact.id },
            content : [
                { elem : 'field', content : {
                    block : 'input', name : 'name', value : contact.name
                } },
                { elem : 'field', content : {
                    block : 'input', name : 'display_name', value : contact.display_name
                } },
                { elem : 'foot', content : buildFoot() }
            ]
        };
    }
}));

function buildFoot() {
    return [
        { block : 'action', mods : { type : 'button' }, js : { action : ACTION_SAVE }, text : 'Save' },
        { block : 'action', mods : { type : 'button' }, js : { action : ACTION_CANCEL }, text : 'Cancel' }
    ]
}

});
