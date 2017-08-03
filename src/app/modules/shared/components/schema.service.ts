import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SchemaService {
    private testSchemaUrl = 'metas/api/smart-forms';

    constructor(private http: Http) {
    }

    getSchema(nameOrCode: any): any {
        // const copy: PositionNewModel = Object.assign({});
        return this.http.get(`${this.testSchemaUrl}/${nameOrCode}`).map((res: Response) => {

            // return require('../../../mock-data/dynamic.json');
           return res.json();
        });
    }

    getSmartFormListSchema() {

      const schema = {
       'id': 1,
       'name': 'SmartForm',
       'displayName': '自动表单',
       'description': '手写',
       'jsonTemplate': null,
       'xmlTemplate': null,
       'fields': [ {
         'id': 1,
         'code': '001',
         'name': 'name',
         'displayName': '名称',
         'description': null,
         'dataSourceType': null,
         'dataSource': null,
         'valueType': 'STRING',
         'defaultValue': null,
         'inputType': null,
         'row': null,
         'rowspan': null,
         'col': null,
         'colspan': null,
         'primaryKey': false,
         'nullable': true,
         'creatable': true,
         'updatable': true,
         'sizeMin': null,
         'sizeMax': null,
         'valueMin': null,
         'valueMax': null,
         'validator': null,
         'sort': 0,
         'formId': 1,
         'dictionaries': null
         }, {
         'id': 2,
         'code': '002',
         'name': 'code',
         'displayName': '编号',
         'description': null,
         'dataSourceType': null,
         'dataSource': null,
         'valueType': 'STRING',
         'defaultValue': null,
         'inputType': null,
         'row': null,
         'rowspan': null,
         'col': null,
         'colspan': null,
         'primaryKey': false,
         'nullable': true,
         'creatable': false,
         'updatable': false,
         'sizeMin': null,
         'sizeMax': null,
         'valueMin': null,
         'valueMax': null,
         'validator': null,
         'sort': 1,
         'formId': 1,
         'dictionaries': null
         }, {
         'id': 4,
         'code': '004',
         'name': 'displayName',
         'displayName': '名称',
         'description': null,
         'dataSourceType': null,
         'dataSource': null,
         'valueType': 'STRING',
         'defaultValue': null,
         'inputType': null,
         'row': null,
         'rowspan': null,
         'col': null,
         'colspan': null,
         'primaryKey': false,
         'nullable': true,
         'creatable': false,
         'updatable': false,
         'sizeMin': null,
         'sizeMax': null,
         'valueMin': null,
         'valueMax': null,
         'validator': null,
         'sort': 3,
         'formId': 1,
         'dictionaries': null
         }, {
         'id': 6,
         'code': '006',
         'name': 'description',
         'displayName': '描述',
         'description': null,
         'dataSourceType': null,
         'dataSource': null,
         'valueType': 'STRING',
         'defaultValue': null,
         'inputType': null,
         'row': null,
         'rowspan': null,
         'col': null,
         'colspan': null,
         'primaryKey': false,
         'nullable': true,
         'creatable': false,
         'updatable': false,
         'sizeMin': null,
         'sizeMax': null,
         'valueMin': null,
         'valueMax': null,
         'validator': null,
         'sort': 5,
         'formId': 1,
         'dictionaries': null
         }, {
         'id': 7,
         'code': '007',
         'name': 'detail',
         'displayName': '详情',
         'description': null,
         'dataSourceType': null,
         'dataSource': null,
         'valueType': 'STRING',
         'defaultValue': null,
         'inputType': 'BUTTON',
         'row': null,
         'rowspan': null,
         'col': null,
         'colspan': null,
         'primaryKey': false,
         'nullable': true,
         'creatable': false,
         'updatable': false,
         'sizeMin': null,
         'sizeMax': null,
         'valueMin': null,
         'valueMax': null,
         'validator': null,
         'sort': 6,
         'formId': 1,
         'dictionaries': null
         }, {
         'id': 8,
         'code': '008',
         'name': 'edit',
         'displayName': '编辑',
         'description': null,
         'dataSourceType': null,
         'dataSource': null,
         'valueType': 'STRING',
         'defaultValue': null,
         'inputType': 'BUTTON',
         'row': null,
         'rowspan': null,
         'col': null,
         'colspan': null,
         'primaryKey': false,
         'nullable': true,
         'creatable': false,
         'updatable': false,
         'sizeMin': null,
         'sizeMax': null,
         'valueMin': null,
         'valueMax': null,
         'validator': null,
         'sort': 7,
         'formId': 1,
         'dictionaries': null
         }, {
         'id': 9,
         'code': '009',
         'name': 'delete',
         'displayName': '删除',
         'description': null,
         'dataSourceType': null,
         'dataSource': null,
         'valueType': 'STRING',
         'defaultValue': null,
         'inputType': 'BUTTON',
         'row': null,
         'rowspan': null,
         'col': null,
         'colspan': null,
         'primaryKey': false,
         'nullable': true,
         'creatable': false,
         'updatable': false,
         'sizeMin': null,
         'sizeMax': null,
         'valueMin': null,
         'valueMax': null,
         'validator': null,
         'sort': 8,
         'formId': 1,
         'dictionaries': null
         } ],
         'orderIds': [ 'name', 'code', 'displayName', 'description' ],
         'buttonIds': [ 'detail', 'edit', 'delete' ]
       };
      return schema;
    }
}
