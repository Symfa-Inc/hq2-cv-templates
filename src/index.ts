import handlebars from 'handlebars';
import { template } from './templates/cv-default-template';

handlebars.registerHelper('isActiveItems', function(context, options) {
  if (!context || !context.length) {
    // @ts-ignore
    return options.inverse(this);
  }

  for (let i = 0; i < context.length; i++) {
    if (context[i].active) {
      // @ts-ignore
      return options.fn(this);
    }
  }
// @ts-ignore
  return options.inverse(this);
});

handlebars.registerHelper('ifMultiCondition', function(v1, v2, options) {
  if (v1 && v2) {
    // @ts-ignore
    return options.fn(this);
  }
  // @ts-ignore
  return options.inverse(this);
});

function getHTMLTemplate(params: unknown) {
  return handlebars.compile(template)(params);
}

export { getHTMLTemplate };

