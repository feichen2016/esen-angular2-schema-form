import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchemaService } from '../../../shared/components/schema.service';
import { SmartFormFieldService } from './smart-form-field.service';

@Component({
    selector: 'esen-smart-form-field-detail',
    templateUrl: `./smart-form-field-detail.component.html`,
    styleUrls: ['../../general-detail.component.scss'],
})
export class SmartFormFieldDetailComponent implements OnInit {

    schema: any;
    model: any;
    nameOrCode: string;

    private subscription: any;
    queryModel: any;

    constructor(private smartFormFieldService: SmartFormFieldService,
        private schemaService: SchemaService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.schemaService.getSchema('SFF002').subscribe(
            (res: Response) => this.onSchemaSuccess(res, res.headers),
            (res: Response) => this.onError(res.json()),
        );
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
    }

    load(id) {
        this.smartFormFieldService.find(id).subscribe((item) => {
            this.model = item;
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

