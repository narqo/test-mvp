modules.define('ArticleFragment', ['inherit', 'Fragment'], function(provide, inherit, Fragment) {

provide(inherit(Fragment, {
    __constructor : function() {
        this.__base.apply(this, arguments);
        this._callbackActivity = null;
    },

    _onAttach : function(activity) {
        this.__base.apply(this, arguments);
        this._getHeadlineSelectedListener(activity);
    },

    updateArticleView : function(position) {
        // TODO
    },

    _onListItemClick : function(e, data) {
        var position = data.position;
        this._callbackActivity.articleSelected(position);
    },

    _getHeadlineSelectedListener : function(activity) {
        return this._callbackActivity = activity;
    }
}));

});
