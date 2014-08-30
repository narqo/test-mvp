bh.match('Widget_type_button', function(ctx, json) {
    var mods = ctx.mods(),
        mix = ctx.mix(),
        thisMix = [{ block : 'Widget', mods : mods }];
    if(mix) {
        thisMix = thisMix.concat(mix);
    }
    return {
        block : 'Button',
        mix : thisMix,
        content : json.text
    };
});
