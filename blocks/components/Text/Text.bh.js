/**
 * { block : 'Text', text : 'This is a text' }
 */
bh.match('Text', function(ctx, json) {
    ctx.content(json.text)
});
