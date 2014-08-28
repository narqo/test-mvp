({ block : 'LinearLayout',
    width : '100%',
    height : '100%',
    orientation : 'horizontal',
    content : [
        { elem : 'item', weight : 1, content :
            { block : 'Widget',
                mods : { type : 'editText' },
                id : '@+id/edit_message',
                hint : '@string/edit_message' }
        },
        { elem : 'item', content :
            { block : 'Widget',
                mods : { type : 'button' },
                text : '@string/button_send' }
        }
    ]
})
