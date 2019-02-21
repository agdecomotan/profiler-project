import {Component, Input, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-page',
    templateUrl: './x-page.component.html',
    styleUrls: ['./x-page.component.scss']
})

export class XPageComponent {
    @Input() public headerPanel: TemplateRef<any>;
    @Input() public contentPanel: TemplateRef<any>;
    @Input() headerText: string;
}