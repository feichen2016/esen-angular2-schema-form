import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DemoService } from './demo.service';
import { DepartmentQueryModel } from './demo.model';
import { ITEMS_PER_PAGE } from '../../../shared/constants/pagination.constants';
import { ActivatedRoute } from '@angular/router';
import {SchemaService} from '../../shared/components/schema.service';

@Component({
    selector: 'demo-edit',
    templateUrl: `./demo-edit.component.html`,
})
export class DemoEditComponent {

    questions: any[];
    model: any;
    constructor(private demoService: DemoService,
                private schemaService: SchemaService,
    ) {
        this.questions = schemaService.getQuestions();
        this.model = demoService.getModel();
    }

}

