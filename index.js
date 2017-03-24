var pugTemplate = require('./pug_templates/index.pug'),
    mustacheTemplate = require('./mustache_templates/index.mustache');
require('./data/data.json');

fetch('/assets/data.json').
then(function (resp) {
    return resp.json();
}).
then(function (json) {
    //document.querySelector('#pug').innerHTML = pugTemplate(json);
    document.querySelector('#mustache').innerHTML = mustacheTemplate(json)
});