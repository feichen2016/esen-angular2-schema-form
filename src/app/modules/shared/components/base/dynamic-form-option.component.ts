import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SmartFormField} from './option-base';

@Component({
  selector: 'df-option',
  templateUrl: './dynamic-form-option.component.html',
  styleUrls: ['./dynamic.scss'],
})
export class DynamicFormOptionComponent {
  @Input() option: SmartFormField<any>;
  @Input() form: FormGroup;
  @Output()
  public callbackChange = new EventEmitter();
  get isValid() { return this.form.controls[this.option.name].valid; }
  get isPristine() { return this.form.controls[this.option.name].pristine; }
  changeValue(name: any) {
    this.callbackChange.emit({'key': name, 'value': this.form.controls[name].value});
  }
}
