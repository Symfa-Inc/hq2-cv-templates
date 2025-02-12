import handlebars from 'handlebars';
import classicTemplate from '../templates/cv-classic-template';
import symfaTemplate from '../templates/cv-symfa-template';

handlebars.registerHelper('isActiveItems', function(this: unknown, context, options) {
  if (!context || !context.length) {
    return options.inverse(this);
  }

  const subItemsField = options.hash.subItemsField || null;

  for (let i = 0; i < context.length; i++) {
    if (context[i].active) {
      if (subItemsField) {
        if (typeof context[i][subItemsField] === 'string' && context[i][subItemsField].length) {
          return options.fn(this);
        }
      } else {
        return options.fn(this);
      }
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

handlebars.registerHelper('ifNot', function(this: unknown, v1, v2, options) {
  if (v1 !== v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('or', function (this: unknown, a, b, options) {
  if (a || b) {
    return options.fn(this);
  }
  return options.inverse(this);
});

enum Templates {
  Classic = 1,
  Symfa,
}

const templatesMapper: {[key in Templates]: string} = {
  [Templates.Classic]: classicTemplate,
  [Templates.Symfa]: symfaTemplate,
};

function getHTMLTemplate(params: unknown, template: Templates) {
  return handlebars.compile(templatesMapper[template])(params);
}

export { getHTMLTemplate, Templates };

