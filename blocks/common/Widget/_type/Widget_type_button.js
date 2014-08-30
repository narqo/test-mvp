modules.define('Widget', ['Button'], function(provide, Widget, Button) {

provide(Widget.decl({ modName : 'type', modVal : 'button' }, {
    _onClick : function() {
        this.emit('action');
    }
}, {
    live : function() {
        this.liveInitOnBlockEvent('click', Button, this.prototype._onClick);
        return this.__base.apply(this, arguments);
    }
}));

});
