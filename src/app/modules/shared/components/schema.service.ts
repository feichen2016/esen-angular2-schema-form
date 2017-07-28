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
