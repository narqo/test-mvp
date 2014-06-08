modules.define('presenter', ['inherit'], function(provide, inherit) {

provide(inherit({
    __constructor : function(eventBus, viewCls) {
        this._eventBus = eventBus;
        this._viewCls = viewCls;

        this._container = null;
        this._view = null;
        this._isRunning = false;
    },

    run : function(container, params) {
        if(!this._isRunning) {
            this._container = container;
            this._params = params;
            this._run();
            this._isRunning = true;
        }

        return this;
    },

    stop : function() {
        if(this._isRunning) {
            this._destructView();
            this._stop();
            this._container = null;
            this._params = null;
            this._isRunning = false;

            // FIXME: unsubscribe from events of eventBus/viewCls within `this._view` ctx
            //this._viewCls.un();
            //this._eventBus.un();
        }

        return this;
    },

    _createView : function(params) {
        this._view = this._viewCls.create(params);
        this._container.append(this._view);
    },

    _destructView : function() {
        this._view && this._view.destruct();
    },

    _run : function() {
        this._createView(this._params);
    },

    _stop : function() {
        // stub method
    }

}));

});
