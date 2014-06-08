modules.define('action', function(provide, Action) {

provide(Action.decl({ modName : 'type', modVal : 'button' }, {
    _onActivate : function() {
        this.emit('action', { action : this.params.action });
    }
}, {
    live : function() {
        this.liveInitOnBlockEvent('click', 'button', this.prototype._onActivate);
    }
}));

});
