modules.require(['jquery', 'app-controller'], function($, AppController) {
    $(function() {
        new AppController().run();
    });
});
