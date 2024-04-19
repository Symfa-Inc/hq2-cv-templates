import handlebars from 'handlebars';
import {template} from '../templates/cv-default-template.ts';

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

function getHTMLTemplate(params) {
    return handlebars.compile(template)(params);
}

export {getHTMLTemplate};
