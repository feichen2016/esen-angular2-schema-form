export class OptionBase<T>{
  value: T;
  defaultValue: string;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;

  constructor(options: {
      value?: T,
      defaultValue?: string,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
    } = {}) {
    this.value = options.value;
    this.defaultValue = options.defaultValue || '';
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
