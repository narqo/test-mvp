({ block : 'LinearLayout',
    orientation : 'horizontal',
    content : [
        { elem : 'item', weight : 1, content :
            { block : 'HeadlinesFragment', id : '@+id/headlines_fragment' }
        },
        { elem : 'item', weight : 2, content :
            { block : 'ArticleFragment', id : '@+id/article_fragment' }
        }
    ]
})
