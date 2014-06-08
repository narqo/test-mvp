modules.define(
    'bem-view',
    ['i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, BemDom, $, BEMHTML) {

provide(BemDom.decl(this.name, {
    append : function(block) {
        BemDom.append(this.domElem, block.domElem);
        return this;
    },

    destruct : function() {
        BemDom.destruct(this.domElem);
        return this;
    }
}, {
    create : function() {
        return BemDom.init(
                $(BEMHTML.apply(this.buildBemjson.apply(this, arguments))))
            .bem(this.getName());
    },

    buildBemjson : function() {
        return { block : this.getName() };
    }
}));

});
