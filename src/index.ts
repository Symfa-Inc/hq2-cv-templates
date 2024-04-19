import handlebars from 'handlebars';
import defaultTemplate from '../templates/cv-default-template';

handlebars.registerHelper('isActiveItems', function(this: unknown, context, options) {
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

handlebars.registerHelper('ifMultiCondition', function(this: unknown, v1, v2, options) {
  if (v1 && v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});


enum Templates {
  Default,
}

const templatesMapper: {[key in Templates]: string} = { [Templates.Default]: defaultTemplate};

function getHTMLTemplate(params: unknown, template: Templates) {
  return handlebars.compile(templatesMapper[template])(params);
}

export { getHTMLTemplate, Templates };

