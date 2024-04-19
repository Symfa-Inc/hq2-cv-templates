declare enum Templates {
    Default = 0
}
declare function getHTMLTemplate(params: unknown, template: Templates): string;

export { Templates, getHTMLTemplate };
