bh.match('Image', function(ctx, json) {
    ctx
        .tag('img')
        .attrs({
            src : json.src,
            width : json.width,
            height : json.height,
            alt : json.alt
        });
});
