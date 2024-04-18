const handlebars = require('handlebars');
const {template} = require('./templates/cv-default-template.js');

handlebars.registerHelper('isActiveItems', function (context, options) {
    if (!context || !context.length) {
        return options.inverse(this);
    }

    for (let i = 0; i < context.length; i++) {
        if (context[i].active) {
            return options.fn(this);
        }
    }

    return options.inverse(this);
});

handlebars.registerHelper('ifMultiCondition', function (v1, v2, options) {
    if (v1 && v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

function getHTMLTemplate() {
    return handlebars.compile(template);
}

module.exports = {getHTMLTemplate};

