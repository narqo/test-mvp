modules.define('Text', ['i-bem__dom'], function(provide, bemDom) {

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
    }
}));

});
