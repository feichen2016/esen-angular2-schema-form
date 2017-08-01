import { Component, OnInit, } from '@angular/core';
import { DemoService } from './demo.service';
import { DepartmentQueryModel } from './demo.model';
import { ActivatedRoute } from '@angular/router';
import {SchemaService} from '../../shared/components/schema.service';

@Component({
    selector: 'demo-detail',
    templateUrl: `./demo-detail.component.html`,
    styleUrls: ['../general-detail.component.scss'],
})
export class DemoDetailComponent implements OnInit {

    schema: any;
    model: any;
    nameOrCode: string;

    private subscription: any;
    queryModel: DepartmentQueryModel;

    constructor(private demoService: DemoService,
                private schemaService: SchemaService,
                private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.queryModel = new DepartmentQueryModel();
        this.nameOrCode = 'TEST002';
        this.schemaService.getSchema(this.nameOrCode).subscribe(
            (res: Response) => this.onSchemaSuccess(res, res.headers),
            (res: Response) => this.onError(res.json()),
        );
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
    }

    load(id) {
        this.demoService.find(id).subscribe((department) => {
            this.model = department;
        });
    }
    private onSchemaSuccess(data, headers) {
        this.schema = data;
    }

    private onSuccess(data, headers) {
        this.model = data;
    }

    private onError(error) {
        alert('出错啦');
    }

    previousState() {
        window.history.back();
    }
}

