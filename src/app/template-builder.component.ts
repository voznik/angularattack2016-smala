import { Component, ViewEncapsulation } from '@angular/core';
import { AlertComponent, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { DragNDropComponent } from './+drag-n-drop';
import { TemplateEditorComponent } from './+template-editor';

@Component({
    moduleId: module.id,
    selector: 'template-builder-app',
    templateUrl: 'template-builder.component.html',
    styleUrls: ['template-builder.component.css'],
    directives: [AlertComponent, CollapseDirective, ROUTER_DIRECTIVES],
    encapsulation: ViewEncapsulation.None,
    providers: [ROUTER_PROVIDERS]
})
@Routes([
    {path: '/', component: DragNDropComponent},
    {path: '/template-editor', component: TemplateEditorComponent}
])
export class TemplateBuilderAppComponent {
    public isCollapsed:boolean = true;

    constructor(
        public router: Router
    ) { 
    }
}
