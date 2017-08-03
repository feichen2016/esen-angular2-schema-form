import {
  SmartFormField,
  InputType,
} from './';

export class TextOption extends SmartFormField<string> {
  inputType = InputType.TEXT;
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

