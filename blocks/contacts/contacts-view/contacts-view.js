modules.define('contacts-view', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BemDom, BEMHTML, $) {

var block = this.name;

provide(BemDom.decl(block, {
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
        this.emit('contact-delete', { ids : [2] });
    }
}, {
    live : function() {
        var ptp = this.prototype;
        this
            .liveInitOnBlockInsideEvent('action', 'action', ptp._onAction)
            .liveBindTo('label', 'click', ptp._onLabelClick);
            //.liveInitOnBlockInsideEvent('change', 'checkbox', ptp._onCheckboxChange);
    },

    create : function(params) {
        return BemDom.init($(BEMHTML.apply(this.build(params)))).bem(block);
    },

    build : function() {
        return {
            block : block,
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
        { block : block, elem : 'label', content : row.display_name }
    ];
}

});
