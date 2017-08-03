
import {
  SmartFormField,
  InputType,
  Dictionary,
} from './';

export class SelectOption extends SmartFormField<string> {
  inputType = InputType.SELECT;
  dictionaries: Dictionary[];

  constructor(options: {} = {}) {
    super(options);
    this.dictionaries = options['dictionaries'] || [];
  }
}
