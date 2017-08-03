

import { DataSourceType, ValueType, InputType } from '../../../shared/components/base/index';

export class SmartFormFieldModel {
  constructor(
    id?: string,
    code?: string,
    name?: string,
    displayName?: string,
    description?: string,
    dataSourceType?: DataSourceType,
    dataSource?: string,
    valueType?: ValueType,
    defaultValue?: string,
    inputType?: InputType,
    row?: number,
    rowspan?: number,
    col?: number,
    colspan?: number,
    primaryKey?: boolean,
    nullable?: boolean,
    creatable?: boolean,
    updatable?: boolean,
    sizeMin?: number,
    sizeMax?: number,
    valueMin?: string,
    valueMax?: string,
    validator?: string,
    sort?: number,
    formId?: string,
    version?: number,
  ) {
  }
}
