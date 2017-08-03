
import {
  DataSourceType,
  InputType,
  ValueType,
} from './';

export class SmartForm {
  name: string;
  displayName: string;
  description: string;
  jsonTemplate: string;
  xmlTemplate: string;
  orderIds: string[];
  buttonIds: string[];
  fields: SmartFormField<any>[];
  constructor(options: {
    name?: string;
    displayName?: string;
    description?: string;
    jsonTemplate?: string;
    xmlTemplate?: string;
    orderIds?: string[];
    buttonIds?: string[];
    fields?: SmartFormField<any>[];
  } = { }) {
    this.name = options.name;
    this.displayName = options.displayName;
    this.description = options.description;
    this.jsonTemplate = options.jsonTemplate;
    this.xmlTemplate = options.xmlTemplate;
    this.orderIds = options.orderIds;
    this.buttonIds = options.buttonIds;
    this.fields = options.fields;
  }
}

export class SmartFormField<T> {
  value: T;
  code: string;
  name: string;
  displayName: string;
  description: string;
  dataSourceType: DataSourceType;
  dataSource: string;
  valueType: ValueType;
  defaultValue: string;
  inputType: InputType;
  row: number;
  rowspan: number;
  col: number;
  colspan: number;
  primaryKey: false;
  nullable: boolean;
  creatable: boolean;
  updatable: boolean;
  sizeMin: number;
  sizeMax: number;
  valueMin: string;
  valueMax: string;
  validator: string;
  sort: number;
  dictionaries: Dictionary[];
  constructor(options: {
    value?: T;
    code?: string;
    name?: string;
    displayName?: string;
    description?: string;
    dataSourceType?: DataSourceType;
    dataSource?: string;
    valueType?: ValueType;
    defaultValue?: string;
    inputType?: InputType;
    row?: number;
    rowspan?: number;
    col?: number;
    colspan?: number;
    primaryKey?: false;
    nullable?: boolean;
    creatable?: boolean;
    updatable?: boolean;
    sizeMin?: number;
    sizeMax?: number;
    valueMin?: string;
    valueMax?: string;
    validator?: string;
    sort?: number;
    dictionaries?: Dictionary[];
  } = {}) {
    this.value = options.value;
    this.code = options.code;
    this.name = options.name;
    this.displayName = options.displayName;
    this.description = options.description;
    this.dataSourceType = options.dataSourceType;
    this.dataSource = options.dataSource;
    this.valueType = options.valueType;
    this.defaultValue = options.defaultValue;
    this.inputType = options.inputType;
    this.row = options.row;
    this.rowspan = options.rowspan;
    this.col = options.col;
    this.colspan = options.colspan;
    this.primaryKey = options.primaryKey;
    this.nullable = options.nullable;
    this.creatable = options.creatable;
    this.updatable = options.updatable;
    this.sizeMin = options.sizeMin;
    this.sizeMax = options.sizeMax;
    this.valueMin = options.valueMin;
    this.valueMax = options.valueMax;
    this.validator = options.validator;
    this.sort = options.sort;
    this.dictionaries = options.dictionaries;
  }
}

export class Dictionary {
  code: string;
  value: string;
  name: string;
  constructor(
    options: {
      code?: string,
      value?: string,
      name?: string
              } = {}
              ) {
    this.code = options.code || '';
    this.value = options.value || '';
    this.name = options.name || '';
  }
}

