import {
    ElementRef,
    Directive,
    OnInit,
    Input,
    Output
} from '@angular/core';
import { DataService } from '../../../shared/index';

@Directive({
  selector: 'var-checkbox,[var-checkbox]',
  exportAs: 'var'
})
export class VarCheckboxDirective implements OnInit {

  @Input()
  public name:string;

  @Input()
  public title:string;

  @Input()
  public options:string;

  @Input()
  public value:string = '';

  @Input()
  public values:any = [];

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
      },

      get values () {
        return directive.values;
      },
      set values (vals) {
        directive.values = vals;
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
        value: 'checkbox'
      }
    });

    var optionsArray = this.options.split('|');
    if (!optionsArray.length) {
      variableData['type'] = 'input';
    } else {
      Object.defineProperty(variableData, 'options', {
        enumerable: false,
        writable: true,
        configurable: false,
        value: optionsArray
      });
    }

    // Set value to itself to convert to number
    variableData.value = this.value;
    variableData.values = this.value.split(', ');

    currentScope.variables[ this.name ] = variableData;
  }

  toString() {
    return this.value;
  }
}
