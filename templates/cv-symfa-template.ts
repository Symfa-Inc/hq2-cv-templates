export default `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CV Symfa Template</title>
    <style>
        body {
            margin: 0;
            padding: 0;
        }

        .cv-template {
            width: 595px;
            font-family: Aeonik;
            font-weight: 500;
            color: #191919;
            background-color: white;
            letter-spacing: 0;
        }

        .cv-template-first-page {
            display: grid;
            padding: 24px;
            grid-template-columns: 1fr 168px;
            grid-template-rows: repeat(2, min-content);
            grid-column-gap: 20px;
            border-top: 8px solid #07524E;
        }

        .cv-template-first-page__photo {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 15px;

            img {
                display: inline-block;
                max-width: 100%;
            }
        }

        .cv-template-first-page__logo {
            text-align: right;
        }

        .cv-template-first-page__avatar {
            img {
                min-width: 152px;
            }
        }

        .cv-template-first-page__photo,
        .cv-template-first-page__content {
            padding-bottom: 30px;
            border-bottom: 2px solid #191919;
        }

        .cv-template-first-page__tools,
        .cv-template-first-page__general {
            padding-top: 10px;
        }

        .cv-template-position {
            font-size: 16px;
            line-height: 16px;
            text-transform: uppercase;
            padding-top: 8px;
        }

        .cv-template-name {
            font-size: 40px;
            line-height: 40px;
            padding-top: 22px;
        }

        .cv-template-block-style {
            white-space: pre-wrap;
            font-size: 12px;

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

        .cv-template-overview {
            font-size: 12px;
            line-height: 14.4px;
            padding-top: 35px;
        }

        .cv-template-section {

        }

        .cv-template-section__title {
            font-size: 14px;
            line-height: 16.8px;
            margin-bottom: 22px;
        }

        .cv-template-content + .cv-template-content{
            margin-top: 10px;
        }

        .cv-template-content__title {
            font-size: 12px;
            line-height: 14.4px;
            margin-bottom: 12px;
        }

        .cv-template-content__title.no-margin {
            margin-bottom: 0;
        }

        .cv-template-content__value {
            font-weight: 400;
            font-size: 12px;
            line-height: 14.4px;

            p {
                margin: 0;
            }
        }
    </style>
</head>
<body>
    <div class="cv-template">
        <div class="cv-template-first-page">
            <div class="cv-template-first-page__content">
                <div class="cv-template-position">Software Developer</div>
                <div class="cv-template-name">Alison R.</div>
                <div class="cv-template-overview ">
                    <div class="cv-template-block-style"><p>.NET Developer with experience in building, maintaining, and optimizing scalable applications. Proficient in designing robust solutions with a strong focus on code quality, performance,  and user experience. Skilled in troubleshooting and resolving technical issues to enhance system functionality and reliability</p></div>
                </div>
            </div>
            <div class="cv-template-first-page__photo">
                <div class="cv-template-first-page__logo">
                    <a href="#"><img src="logo.png" alt="" /></a>
                </div>
                <div class="cv-template-first-page__avatar">
                    <img src="/Frame%205806.png" alt="" />
                </div>
            </div>
            <div class="cv-template-first-page__tools">
                <div class="cv-template-section">
                    <div class="cv-template-section__title">TECHNOLOGIES AND TOOLS</div>
                    <div class="cv-template-section__list">
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Main skills:</div>
                            <div class="cv-template-content__value">C#, SQL, TypeScript, JavaScript, React, ASP.NET, .NET</div>
                        </div>
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Framework:</div>
                            <div class="cv-template-content__value">.NET Core, .NET, Umbraco CMS, NopCommerce CMS</div>
                        </div>
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Technologies:</div>
                            <div class="cv-template-content__value">HTML, CSS/SCSS, Angular, React, JQuery, Azure Service fabric, RabbitMQ, LINQ, Entity Framework</div>
                        </div>
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Databases:</div>
                            <div class="cv-template-content__value">Microsoft SQL Server, MongoDB</div>
                        </div>
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Software development processes and methodologies:</div>
                            <div class="cv-template-content__value">Agile-like (Scrum), Jira</div>
                        </div>
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Tools and Middleware:</div>
                            <div class="cv-template-content__value">Visual Studio (Resharper), Visual Studio Code/WebStorm,  Microsoft SQL Management Studio Postman</div>
                        </div>
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Operating Systems:</div>
                            <div class="cv-template-content__value">Windows 7 and higher</div>
                        </div>
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Version control systems:</div>
                            <div class="cv-template-content__value">Git, SVN</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cv-template-first-page__general">
                <div class="cv-template-section">
                    <div class="cv-template-section__title">GENERAL</div>
                    <div class="cv-template-section__list">
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Education</div>
                            <div class="cv-template-content__value">Bachelor's Degree</div>
                        </div>
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Languages</div>
                            <div class="cv-template-content__list">
                                <div class="cv-template-content">
                                    <div class="cv-template-content__title no-margin">English</div>
                                    <div class="cv-template-content__value">Upper Intermediate (B2)</div>
                                </div>
                                <div class="cv-template-content">
                                    <div class="cv-template-content__title no-margin">French</div>
                                    <div class="cv-template-content__value">Upper Intermediate (B2)</div>
                                </div>
                            </div>
                        </div>
                        <div class="cv-template-content">
                            <div class="cv-template-content__title">Time Zone</div>
                            <div class="cv-template-content__value">
                                <p>GMT+1</p>
                                <p>Cross hours:</p>
                                <p>9:00 am - 1:00 pm (UTC -5)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
