modules.define('presenter', ['inherit'], function(provide, inherit) {

provide(inherit({
    __constructor : function(eventBus, viewCls) {
        this._eventBus = eventBus;
        this._viewCls = viewCls;

        this._container = null;
        this._view = null;
        this._inited = false;
    },

    run : function(container, params) {
        this._container = container;

        if(!this._inited) {
            this._view = this._viewCls.create(params);
            this._run();
            this._view.domElem.appendTo(this._container);
            this._inited = true;
        }

        return this;
    },

    _run : function() {
        // stub method
    },

    stop : function() {
        // stub method
    }
}));

});
