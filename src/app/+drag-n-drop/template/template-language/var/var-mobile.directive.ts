import {
    ElementRef,
    Directive,
    OnInit,
    Input,
    Output
} from '@angular/core';
import { DataService } from '../../../shared/index';

@Directive({
  selector: 'var-mobile,[var-mobile]',
  exportAs: 'var'
})
export class VarMobileDirective implements OnInit {

  @Input()
  public name:string;

  @Input()
  public title:string;

  @Input()
  public value:boolean = false;

  constructor(
      private elementRef:ElementRef,
      private service: DataService
  ) {}

  ngOnInit() {
    var currentScope = this.service.getTraverseCursor();

    var directive = this;
    var variableData = {
      get value () {
        return directive.value;
      },
      set value (val) {
        directive.value = val;
      }
    };

    Object.defineProperties(variableData, {
      title: {
        enumerable: false,
        writable: true,
        configurable: false,
        value: directive.title
      },
      name: {
        enumerable: false,
        writable: true,
        configurable: false,
        value: directive.name
      },
      type: {
        enumerable: false,
        writable: true,
        configurable: false,
        value: 'mobile'
      }
    });


    // Set value to itself to convert to number
    variableData.value = false;

    currentScope.variables[ this.name ] = variableData;
  }

  toString() {
    return this.value;
  }
}
