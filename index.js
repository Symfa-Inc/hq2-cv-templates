const defaultTemplate = require('./templates/cv-default-template.hbs');
const handlebars = require('handlebars');

function getHTMLTemplate() {
    return handlebars.compile(defaultTemplate);
}

module.exports = getHTMLTemplate;
