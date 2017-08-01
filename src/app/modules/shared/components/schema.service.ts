import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TextboxOption } from './base/option-textbox';
import { DropdownOption } from './base/option-dropdown';
import { OptionBase } from './base/option-base';

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

    /*getSchemaDemo() {
      const demo: OptionBase = {
        "id": 2,
        "name": "detailForm",
        "displayName": "测试表单(详情)",
        "description": "测试用",
        "jsonTemplate": "",
        "xmlTemplate": "",
        "fields": [
          {
            "id": 16,
            "code": "STATUS",
            "name": "status",
            "displayName": "状态",
            "description": null,
            "dataSourceType": "DICTIONARY",
            "dataSource": null,
            "valueType": "OPTION",
            "defaultValue": null,
            "inputType": null,
            "row": null,
            "rowspan": null,
            "col": null,
            "colspan": null,
            "primaryKey": false,
            "nullable": true,
            "creatable": false,
            "updatable": false,
            "sizeMin": null,
            "sizeMax": null,
            "valueMin": null,
            "valueMax": null,
            "validator": null,
            "sort": 6,
            "formId": 2,
            "dictionaries": [
              {
                "id": 1,
                "code": "STATUS:VALID",
                "value": "1",
                "name": "Valid",
                "priority": 0,
                "typeId": 1
              },
              {
                "id": 2,
                "code": "STATUS:INVALID",
                "value": "0",
                "name": "Invalid",
                "priority": 10,
                "typeId": 1
              }
            ]
          },
          {
            "id": 17,
            "code": "001",
            "name": "description",
            "displayName": "部门描述",
            "description": null,
            "dataSourceType": null,
            "dataSource": null,
            "valueType": "STRING",
            "defaultValue": null,
            "inputType": null,
            "row": null,
            "rowspan": null,
            "col": null,
            "colspan": 2,
            "primaryKey": false,
            "nullable": true,
            "creatable": true,
            "updatable": true,
            "sizeMin": null,
            "sizeMax": null,
            "valueMin": null,
            "valueMax": null,
            "validator": null,
            "sort": 7,
            "formId": 2,
            "dictionaries": null
          },
          {
            "id": 10,
            "code": "001",
            "name": "name",
            "displayName": "部门名称",
            "description": null,
            "dataSourceType": null,
            "dataSource": null,
            "valueType": "STRING",
            "defaultValue": null,
            "inputType": null,
            "row": null,
            "rowspan": null,
            "col": null,
            "colspan": null,
            "primaryKey": false,
            "nullable": true,
            "creatable": true,
            "updatable": true,
            "sizeMin": null,
            "sizeMax": null,
            "valueMin": null,
            "valueMax": null,
            "validator": null,
            "sort": 0,
            "formId": 2,
            "dictionaries": null
          },
          {
            "id": 11,
            "code": "001",
            "name": "code",
            "displayName": "部门编号",
            "description": null,
            "dataSourceType": null,
            "dataSource": null,
            "valueType": "STRING",
            "defaultValue": null,
            "inputType": null,
            "row": null,
            "rowspan": null,
            "col": null,
            "colspan": null,
            "primaryKey": false,
            "nullable": true,
            "creatable": true,
            "updatable": true,
            "sizeMin": null,
            "sizeMax": null,
            "valueMin": null,
            "valueMax": null,
            "validator": null,
            "sort": 1,
            "formId": 2,
            "dictionaries": null
          },
          {
            "id": 12,
            "code": "001",
            "name": "budgetNumber",
            "displayName": "预算人数",
            "description": null,
            "dataSourceType": null,
            "dataSource": null,
            "valueType": "STRING",
            "defaultValue": null,
            "inputType": null,
            "row": null,
            "rowspan": null,
            "col": null,
            "colspan": null,
            "primaryKey": false,
            "nullable": true,
            "creatable": true,
            "updatable": true,
            "sizeMin": null,
            "sizeMax": null,
            "valueMin": null,
            "valueMax": null,
            "validator": null,
            "sort": 2,
            "formId": 2,
            "dictionaries": null
          },
          {
            "id": 13,
            "code": "001",
            "name": "parentName",
            "displayName": "上级部门",
            "description": null,
            "dataSourceType": null,
            "dataSource": null,
            "valueType": "STRING",
            "defaultValue": null,
            "inputType": null,
            "row": null,
            "rowspan": null,
            "col": null,
            "colspan": null,
            "primaryKey": false,
            "nullable": true,
            "creatable": true,
            "updatable": true,
            "sizeMin": null,
            "sizeMax": null,
            "valueMin": null,
            "valueMax": null,
            "validator": null,
            "sort": 3,
            "formId": 2,
            "dictionaries": null
          },
          {
            "id": 14,
            "code": "001",
            "name": "detailsLocation",
            "displayName": "地点",
            "description": null,
            "dataSourceType": null,
            "dataSource": null,
            "valueType": "STRING",
            "defaultValue": null,
            "inputType": null,
            "row": null,
            "rowspan": null,
            "col": null,
            "colspan": null,
            "primaryKey": false,
            "nullable": true,
            "creatable": true,
            "updatable": true,
            "sizeMin": null,
            "sizeMax": null,
            "valueMin": null,
            "valueMax": null,
            "validator": null,
            "sort": 4,
            "formId": 2,
            "dictionaries": null
          },
          {
            "id": 15,
            "code": "001",
            "name": "manager",
            "displayName": "部门经理",
            "description": null,
            "dataSourceType": null,
            "dataSource": null,
            "valueType": "STRING",
            "defaultValue": null,
            "inputType": null,
            "row": null,
            "rowspan": null,
            "col": null,
            "colspan": null,
            "primaryKey": false,
            "nullable": true,
            "creatable": true,
            "updatable": true,
            "sizeMin": null,
            "sizeMax": null,
            "valueMin": null,
            "valueMax": null,
            "validator": null,
            "sort": 5,
            "formId": 2,
            "dictionaries": null
          }
        ],
        "orderIds": [
          "name",
          "code",
          "budgetNumber",
          "parentName",
          "detailsLocation",
          "manager",
          "status",
          "description"
        ],
        "buttonIds": []
      }

    }*/

    getQuestions() {

        const questions: OptionBase<any>[] = [

            new DropdownOption({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' },
                ],
                order: 3,
            }),

            new TextboxOption({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1,
            }),

            new TextboxOption({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2,
            }),
        ];

        return questions.sort((a, b) => a.order - b.order);
    }

}
