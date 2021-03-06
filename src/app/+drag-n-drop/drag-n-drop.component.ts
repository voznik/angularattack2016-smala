import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TemplateComponent } from './template/template.component';
import { DataService } from './shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'app-drag-n-drop',
  templateUrl: 'drag-n-drop.component.html',
  styleUrls: ['drag-n-drop.component.css'],
  directives: [SidebarComponent, TemplateComponent],
  providers: [DataService]
})
export class DragNDropComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
