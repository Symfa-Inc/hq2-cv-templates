export default `
<html lang='en'>
<head>
  <meta charset='UTF-8' />
  <title>CV Default Template</title>
  <style>
    .cv-template {
      width: 210mm; 
      min-height: 297mm; 
      font-family: Aeonik; 
      color: rgb(25, 25, 25); 
      background-color: white; 
      padding-bottom: 1px;
    }
    
    .cv-template-header {
      position: relative;
    }

    .cv-template-header__image {
      position: absolute;
      top: 18px;
      left: 54px;
      height: 192px;
      width: 192px;
      border-radius: 50%;
      border: 5px solid {{mainColor}};
      overflow: hidden;
    }
  
    .cv-template-header__image img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    .cv-template-header__image ~ .cv-template-header__top, .cv-template-header__image ~ .cv-template-header__bottom {
      padding-left: 300px;
    }

    .cv-template-header__top {
      background: {{mainColor}};
      color: rgb(246,
      246, 246);
      padding: 0 54px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 114px;

      img {
        object-fit: cover;
        max-height: 40px;
      }
    }

    .cv-template-header__personal {
    }

    .cv-template-header__bottom {
      border-top: 1px solid #e3eae3;
      border-bottom: 1px solid #e3eae3;
      background: {{mainColor}}10;
      padding: 0 54px;
      min-height: 130px;

      .block-style {
        margin: 15px 0;
      }
    }

    .cv-template-header__name {
      font-size: 28px;
      letter-spacing: 1px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }

    .cv-template-header__position {
      font-size: 24px;
      letter-spacing: 0.6px;
      margin-top: 10px;
    }

    .cv-template-header__overview {
      font-size: 16px;
      letter-spacing: 0.4px;
      line-height: 1.3;
    }

    .cv-template-block {
      margin: 35px 0;
      padding: 0 54px;
    }

    .cv-template-block-style {
      white-space: pre-wrap;
      font-size: 14px;

      > p,
      > table {
        margin: 1em 0;
      }

      table {
        width: 100%;
        border-collapse: collapse;

        td {
          vertical-align: top;

          p {
            margin: 1em 0;
        
            &:first-child {
              margin-top: 0;
            }
            
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }

    .cv-template-block-experience {
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

    .cv-template-block__subname {
      font-size: 14px;;
      font-weight: bold;
      margin: 18px 0 8px;
    }

    .cv-template-block__name {
      font-size: 18px;
      font-weight: bold;
      color: {{mainColor}};
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
    }

    .cv-template-block__list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }

    .cv-template-block__list_language {
      gap: 30px;
    }

    .cv-template-block__item {
      border: 1px solid rgb(133, 133, 133);
      padding: 5px 8px;
      border-radius: 5px;
      font-size: 14px;
      word-wrap: break-word;
      word-break: break-all;
    }

    .cv-template-block-language {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      font-size: 14px;
    }
    
    .cv-template-block-language__item {
      display: flex;
      align-items: center;
    }

    .cv-template-block-language__level {
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

    .cv-template-block-language__name {
      text-align: center;
      font-size: 14px;
      margin-top: 6px;
    }

    @media print {
      @page {
        margin-top: 20px;
        margin-bottom: 20px;
      }

      @page :first {
        margin-top: 0px;
      }
    }

  </style>
</head>
<body style="margin: 0">
<div class="cv-template">
<div class="cv-template-header">
  {{#if preparedPhoto}}
    <div class="cv-template-header__image">
      <img src='{{preparedPhoto}}' alt='{{employeeName}}' />
    </div>
  {{/if}}
  <div class='cv-template-header__top'>
    <div class='cv-template-header__personal' style="min-height: 70px">
      <div class='cv-template-header__name'>
        {{#if employeeFirstNameActive}}
          {{employeeFirstName}}
        {{/if}}
        {{#if employeeLastNameActive}}
          {{employeeLastName}}
        {{/if}}
      </div>
      <div class='cv-template-header__position'>{{positionName}}</div>
    </div>
    {{#ifMultiCondition isLogo logo}}
      <a href="{{companyUrl}}" target="_blank">
        <img src='{{logo}}' alt='logo' />
      </a>
    {{/ifMultiCondition}}
  </div>
  <div class='cv-template-header__bottom'>
    {{#if overview.active}}
      {{#if overview.description}}
        <div class='cv-template-header__overview'>
          <div class='cv-template-block-style'>{{{overview.description}}}</div>
        </div>
      {{/if}}
    {{/if}}
  </div>
</div>
{{#if expertises.active}}
  {{#if expertises.items.length}}
    <div class='cv-template-block'>
      <div class='cv-template-block__name'>Areas of Expertise</div>
      <div class='cv-template-block__list'>
        {{#each expertises.items}}
          <div class='cv-template-block__item'>{{this.expertiseName}}</div>
        {{/each}}
      </div>
    </div>
  {{/if}}
{{/if}}

{{#isActiveItems skills subItemsField='skillName'}}
  <div class='cv-template-block'>
    <div class='cv-template-block__name'>Technologies and Tools</div>
    {{#each skills}}
      {{#if this.active}}
      {{#if this.skillName.length}}
        <div class='cv-template-block__subname'>{{this.skillFamily}}</div>
        <div class='cv-template-block__desc'>
          <div class='cv-template-block-style'><p>{{this.skillName}}</p></div>
        </div>
      {{/if}}
      {{/if}}
    {{/each}}
  </div>
{{/isActiveItems}}

{{#isActiveItems experiences}}
  <div class='cv-template-block'>
    <div class='cv-template-block__name'>Work Experience</div>
    <div class='cv-template-block__list cv-template-block__list_experience'>
      {{#each experiences}}
        {{#if this.active}}
          <div class='cv-template-block-page cv-template-block-experience'>
            <div class='cv-template-block-style'>{{{this.content}}}</div>
          </div>
        {{/if}}
      {{/each}}
    </div>
  </div>
{{/isActiveItems}}

{{#if certificates.active}}
  {{#if certificates.description}}
    <div class='cv-template-block'>
      <div class='cv-template-block__name'>Certificates</div>
      <div class='cv-template-block__desc'>
        <div class='cv-template-block-style'>{{{certificates.description}}}</div>
      </div>
    </div>
  {{/if}}
{{/if}}

{{#if awards.active}}
  {{#if awards.description}}
    <div class='cv-template-block'>
      <div class='cv-template-block__name'>Awards</div>
      <div class='cv-template-block__desc'>
        <div class='cv-template-block-style'>{{{awards.description}}}</div>
      </div>
    </div>
  {{/if}}
{{/if}}

{{#if publications.active}}
  {{#if publications.description}}
    <div class='cv-template-block'>
      <div class='cv-template-block__name'>Publications</div>
      <div class='cv-template-block__desc'>
        <div class='cv-template-block-style'>{{{publications.description}}}</div>
      </div>
    </div>
  {{/if}}
{{/if}}

{{#if courses.active}}
  {{#if courses.description}}
    <div class='cv-template-block'>
      <div class='cv-template-block__name'>Courses</div>
      <div class='cv-template-block__desc'>
        <div class='cv-template-block-style'>{{{courses.description}}}</div>
      </div>
    </div>
  {{/if}}
{{/if}}

{{#if education.active}}
  {{#if education.description}}
    <div class='cv-template-block'>
      <div class='cv-template-block__name'>Education</div>
      <div class='cv-template-block__desc'>
        <div class='cv-template-block-style'>{{{education.description}}}</div>
      </div>
    </div>
  {{/if}}
{{/if}}

{{#isActiveItems languages}}
  <div class='cv-template-block'>
    <div class='cv-template-block__name'>Languages</div>
    <div class='cv-template-block-language'>
      {{#each languages}}
        {{#if this.active}}
          <div class='cv-template-block-language__item'>
            {{this.language}}{{#ifNot this.level 'Hidden'}} — {{this.level}}{{/ifNot}}
          </div>
        {{/if}}
      {{/each}}
    </div>
  </div>
{{/isActiveItems}}

{{#if timezones.active}}
  {{#if timezones.description}}
    <div class='cv-template-block'>
      <div class='cv-template-block__name'>Time Zone</div>
      <div class='cv-template-block__desc'>
        <div class='cv-template-block-style'>{{{timezones.description}}}</div>
      </div>
    </div>
  {{/if}}
{{/if}}
</div>
</body>
</html>`;
