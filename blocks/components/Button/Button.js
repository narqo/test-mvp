modules.define('Button', ['i-bem__dom'], function(provide, bemDom) {

provide(bemDom.decl(this.name, {
    onSetMod : {
        js : {
            inited : function() {
                this._text = this.domElem.html();
            }
        }
    },

    setText : function(text) {
        this.domElem.html(this._text = text);
    },

    _onClick : function() {
        this.hasMod('disabled') || this.emit('click');
    }
}, {
    live : function() {
        this.liveBindTo('click', this.prototype._onClick);
    }
}));

});
