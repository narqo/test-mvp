var bemxjst = require('bem-xjst');

module.exports = require('enb/lib/build-flow')
    .create()
    .name('bemhtml')
    .target('target', '?.bemhtml.js')
    .defineOption('devMode', true)
    .defineOption('exportName', 'BEMHTML')
    .useFileList('bemhtml')
    .justJoinFiles()
    .wrapper(generate)
    .createTech();

function generate(source) {
    return bemxjst.generate(source, {
        wrap        : true,
        exportName  : this._exportName,
        optimize    : !this._devMode
    });
}
