import handlebars from 'handlebars';
import {template} from './templates/cv-default-template.js';

function getHTMLTemplate() {
    return handlebars.compile(template);
}

export {getHTMLTemplate};
