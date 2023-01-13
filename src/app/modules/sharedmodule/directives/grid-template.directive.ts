import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: '[gridTemplate]',
    // host: {}
})
export class GridTemplateDirective {
    @Input('gridTemplate') name!: string;
    public template?: TemplateRef<any>;

    constructor() {} // public template: TemplateRef<any>

    getType(): string {
        return this.name;
    }
}