modules.define('button', ['i-bem__dom'], function(provide, BemDom) {

provide(BemDom.decl(this.name, {
    _onClick : function() {
        this.emit('click');
    }
}, {
    live : function() {
        this.liveBindTo('click', this.prototype._onClick);
    }
}));

});
