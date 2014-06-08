module.exports = make;

function make(config) {
    var techs = [
        [require('enb/techs/levels'), { levels : getContactsLevels(config) }],
        [require('enb/techs/file-provider'), { target : '?.bemjson.js' }],
        require('enb/techs/bemdecl-from-bemjson'),
        //require('enb-modules/techs/deps-with-modules'),
        require('enb/techs/deps'),
        require('enb/techs/files'),
        require('enb/techs/css'),
        [require('enb-diverse-js/techs/browser-js'), { target : '?.pre.js' }],
        [require('enb-modules/techs/prepend-modules'), {
            source : '?.pre.js',
            target : '?.js'
        }],
        require('./techs/bemhtml'),
        require('enb/techs/html-from-bemjson')
    ];

    config.node('bundles/index', function(nodeConfig) {
        nodeConfig
            .addTechs(techs)
            .addTargets(['?.css', '?.js', '?.html']);
    });
}

function getContactsLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/desktop.blocks', check : false },
        'blocks/core',
        'blocks/common',
        'blocks/contacts',
    ].map(function(level) { return config.resolvePath(level) });
}
