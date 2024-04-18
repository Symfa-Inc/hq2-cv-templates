const template = `<html lang='en'>
<head>
  <meta charset='UTF-8' />
  <title>Document</title>
  <style>
    body {
      font-family: Helvetica;
      margin: 0;
      width: 810px;
      color: rgb(25, 25,
      25);
    }

    .header {
      position: relative;
    }

    .header__image {
      position: absolute;
      top: 18px;
      left: 18px;
      height: 192px;
      width: 192px;
    }

    .header__image img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    .header__image ~ .header__top, .header__image ~ .header__bottom {
      padding-left: 244px;
    }

    .header__top {
      background: #00524e;
      color: rgb(246,
      246, 246);
      padding: 15px 34px 15px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        object-fit: cover;
        max-height: 40px;
      }
    }

    .header__personal {
    }

    .header__bottom {
      border-top: 1px solid #e3eae3;
      border-bottom: 1px solid #e3eae3;
      background: #e3eae3;
      padding: 0 34px 0 18px;
      min-height: 130px;

      .block-style {
        margin: 15px 0;
      }
    }

    .header__name {
      font-size: 28px;
      letter-spacing: 1px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }

    .header__position {
      font-size: 24px;
      letter-spacing: 0.6px;
      margin-top: 10px;
    }

    .header__overview {
      font-size: 16px;
      letter-spacing: 0.4px;
      line-height: 1.3;
    }

    .block {
      margin: 35px 0;
      padding: 0 18px;
    }

    .block-style {
      white-space: pre-wrap;
      font-size: 14px;

      > p {
        margin: 1em 0;
      }

      table {
        width: 100%;
        border-collapse: collapse;

        td {
          p {
            margin: 0 auto;
          }
        }
      }
    }

    .block-experience {
      width: 100%;

      .block-style {
        margin: 30px 0;
      }

      &:first-child {
        border-top: 0;

        .block-style {
          margin-top: 0;
        }
      }
    }

    .block__name {
      font-size: 18px;
      font-weight: bold;
      color: #00524e;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
    }

    .block__list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }

    .block__list_language {
      gap: 30px;
    }

    .block__list_experience {
      display: block;
    }

    .block__item {
      border: 1px solid rgb(133, 133, 133);
      padding: 5px 8px;
      border-radius: 5px;
      font-size: 14px;
    }

    .block-language {
      min-width: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .block-language__level {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      width: 50px;
      height: 50px;
      border: 1px solid #00524e;
      background: #e3eae3;
      color: #00524e;
    }

    .block-language__name {
      text-align: center;
      font-size: 14px;
      margin-top: 6px;
    }
  </style>
</head>
<body>
<div class='header'>
  {{#if preparedPhoto}}
    <div class='header__image'>
      <img src='{{preparedPhoto}}' alt='{{employeeName}}' />
    </div>
  {{/if}}
  <div class='header__top'>
    <div class='header__personal'>
      <div class='header__name'>
        {{#if employeeFirstNameActive}}
          <span>{{employeeFirstName}}</span>
        {{/if}}
        {{#if employeeLastNameActive}}
          <span>&nbsp;{{employeeLastName}}</span>
        {{/if}}
      </div>
      <div class='header__position'>{{positionName}}</div>
    </div>
    {{#ifMultiCondition isLogo logo}}
      <a href="{{companyUrl}}">
        <img src='{{logo}}' alt='logo' />
      </a>
    {{/ifMultiCondition}}
  </div>
  <div class='header__bottom'>
    {{#if overview.active}}
      {{#if overview.description}}
        <div class='header__overview'>
          <div class='block-style'>{{{overview.description}}}</div>
        </div>
      {{/if}}
    {{/if}}
  </div>
</div>
{{#if expertises.active}}
  {{#if expertises.items.length}}
    <div class='block'>
      <div class='block__name'>Areas of Expertise</div>
      <div class='block__list'>
        {{#each expertises.items}}
          <div class='block__item'>{{this.expertiseName}}</div>
        {{/each}}
      </div>
    </div>
  {{/if}}
{{/if}}

{{#if skills.active}}
  {{#if skills.items.length}}
    <div class='block'>
      <div class='block__name'>Technical skills</div>
      <div class='block__list'>
        {{#each skills.items}}
          <div class='block__item'>{{this.skillName}}</div>
        {{/each}}
      </div>
    </div>
  {{/if}}
{{/if}}

{{#isActiveItems experiences}}
  <div class='block'>
    <div class='block__name'>Work Experience</div>
    <div class='block__list block__list_experience'>
      {{#each experiences}}
        {{#if this.active}}
          <div class='block-page block-experience'>
            <div class='block-style'>{{{this.content}}}</div>
          </div>
        {{/if}}
      {{/each}}
    </div>
  </div>
{{/isActiveItems}}

{{#if certificates.active}}
  {{#if certificates.description}}
    <div class='block'>
      <div class='block__name'>Certificates</div>
      <div class='block__desc'>
        <div class='block-style'>{{{certificates.description}}}</div>
      </div>
    </div>
  {{/if}}
{{/if}}

{{#if awards.active}}
  {{#if awards.description}}
    <div class='block'>
      <div class='block__name'>Awards</div>
      <div class='block__desc'>
        <div class='block-style'>{{{awards.description}}}</div>
      </div>
    </div>
  {{/if}}
{{/if}}

{{#if courses.active}}
  {{#if courses.description}}
    <div class='block'>
      <div class='block__name'>Courses</div>
      <div class='block__desc'>
        <div class='block-style'>{{{courses.description}}}</div>
      </div>
    </div>
  {{/if}}
{{/if}}

{{#if education.active}}
  {{#if education.description}}
    <div class='block'>
      <div class='block__name'>Education</div>
      <div class='block__desc'>
        <div class='block-style'>{{{education.description}}}</div>
      </div>
    </div>
  {{/if}}
{{/if}}

{{#isActiveItems languages}}
  <div class='block'>
    <div class='block__name'>Languages</div>
    <div class='block__list block__list_language'>
      {{#each languages}}
        {{#if this.active}}
          <div class='block-language'>
            <div class='block-language__level'>{{this.level}}</div>
            <div class='block-language__name'>{{this.language}}</div>
          </div>
        {{/if}}
      {{/each}}
    </div>
  </div>
{{/isActiveItems}}
</body>
</html>`;

module.exports = {template};
