import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {SmartForm, SmartFormField} from './option-base';
import { OptionControlService } from './option-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic.scss'],
  providers: [OptionControlService],
})
export class DynamicFormComponent implements OnInit {

  @Input() schema: SmartForm;
  @Input() model: any = {};
  @Output()
  public callbackChange = new EventEmitter();
  options: SmartFormField<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: OptionControlService) {
  }

  ngOnInit() {
    this.options = this.schema.fields;
    this.form = this.qcs.toFormGroup(this.options, this.model);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  changeModel(item: any) {
    this.model = this.qcs.toModel(item, this.model);
    this.callbackChange.emit(this.model);
  }

}
