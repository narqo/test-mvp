/**
 * { block : 'Button', text : 'Push me' }
 */
bh.match('Button', function(ctx, json) {
    ctx
        .tag('button')
        .attr('type', 'button')
        .content(json.text);
});
