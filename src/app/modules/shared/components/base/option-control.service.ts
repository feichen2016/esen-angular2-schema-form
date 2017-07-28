import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { OptionBase } from './option-base';

@Injectable()
export class OptionControlService {
  constructor() { }

  toFormGroup(questions: OptionBase<any>[], model: any) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl( model[question.key] || '', Validators.required)
                                              : new FormControl(model[question.key] || '');
    });
    return new FormGroup(group);
  }
}

