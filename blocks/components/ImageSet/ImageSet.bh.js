/**
 * { block : 'ImageSet',
 *   url : [
 *     'small.jpg',
 *     { media : '(min-width: 45em)', url : 'large.jpg' },
 *     { media : '(min-width: 35em)', url : 'medium.jpg' }
 *   ],
 *   alt : 'Picture description'
 * }
 */
bh.match('ImageSet', function(ctx, json) {
    ctx
        .tag('picture')
        .js(true)
        .content(json.url.map(function(item) {
            return typeof item === 'string'?
                { block : 'Image',
                    src : item,
                    width : json.width,
                    height : json.height,
                    alt : json.alt
                } :
                { elem : 'source', media : item.media, url : item.url }
        }));
});
