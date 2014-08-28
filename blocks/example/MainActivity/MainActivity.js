modules.define(
    'MainActivity',
    ['inherit', 'Activity', 'DisplayMessageActivity'],
    function(provide, inherit, Activity, DisplayMessageActivity) {

provide(inherit(Activity, {
    sendMessage : function() {
        var intent = new Intent(this, DisplayMessageActivity);

        var editText = this._view.getEditText();
        var message = editText.getText();

        this.startActivity(intent);
    }
}));

});
