modules.define('Fragment', ['inherit'], function(provide, inherit) {

provide(inherit({
    __constructor : function() {
        // TODO: Fragment is not implemented
    },

    _onCreateView : function() {
        throw 'not implemented';
    },

    _onAttach : function(activity) {
        throw 'not implemented';
    }
}));

});
