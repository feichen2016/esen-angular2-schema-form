import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SmartFormField } from './option-base';

@Injectable()
export class OptionControlService {
  constructor() { }

  toFormGroup(fields: SmartFormField<any>[], model: any) {
    const group: any = {};

    fields.sort((p1, p2) => p1.sort - p2.sort).forEach((field) => {
      group[field.name] = !field.nullable ? new FormControl( model[field.name] || '', Validators.required)
        : new FormControl(model[field.name] || '');
    });
    return new FormGroup(group);
  }

  toModel(option: {key: string, value: any}, model: any) {
    model[option.key] = option.value;
    return model;
  }
}

