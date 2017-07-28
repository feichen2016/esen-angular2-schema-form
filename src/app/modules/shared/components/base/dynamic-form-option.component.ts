import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { OptionBase } from './option-base';

@Component({
  selector: 'df-option',
  templateUrl: './dynamic-form-option.component.html',
  styleUrls: ['./dynamic.scss'],
})
export class DynamicFormOptionComponent {
  @Input() question: OptionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
