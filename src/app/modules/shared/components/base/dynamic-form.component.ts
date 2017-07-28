import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { OptionBase } from './option-base';
import { OptionControlService } from './option-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [OptionControlService],
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: OptionBase<any>[] = [];
  @Input() model: any = {};
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: OptionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions, this.model);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
