bh.match('ImageSet__source', function(ctx, json) {
    ctx
        .tag('source')
        .attrs({
            media : json.media,
            srcset : json.url
        });
});
