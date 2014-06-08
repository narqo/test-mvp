modules.define(
    'contacts-view',
    ['i-bem__dom', 'BEMHTML', 'bem-view'],
    function(provide, BemDom, BEMHTML, BemView) {

var BLOCK_NAME = this.name;

provide(BemView.decl(BLOCK_NAME, {
    setData : function(data) {
        BemDom.update(this.elem('list'), BEMHTML.apply(data.map(buildListRow)));
        return this;
    },

    _onAction : function(e, data) {
        // TODO
        console.log(data);
    },

    _onCheckboxChange : function(e) {
        // TODO
    },

    _onLabelClick : function(e) {
        e.preventDefault();
        //this.emit('contact-delete', { ids : [2] });
        this.emit('contact-edit', { id : 2 });
    }
}, {
    live : function() {
        var ptp = this.prototype;
        this
            .liveInitOnBlockInsideEvent('action', 'action', ptp._onAction)
            .liveBindTo('label', 'click', ptp._onLabelClick);
    },

    buildBemjson : function() {
        return {
            block : BLOCK_NAME,
            content : [
                { elem : 'head', content : buildHead() },
                { elem : 'list' }
            ]
        }
    }
}));

function buildHead() {
    return [
        { block : 'action', mods : { type : 'button' }, js : { action : 'add' }, text : 'Add' },
        { block : 'action', mods : { type : 'button' }, js : { action : 'remove' }, text : 'Delete' }
    ];
}

function buildListRow(row) {
    return [
        { block : 'checkbox', id : row.id },
        { block : BLOCK_NAME, elem : 'label', content : row.display_name }
    ];
}

});
