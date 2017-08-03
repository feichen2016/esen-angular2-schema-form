import { Component, OnInit, } from '@angular/core';
import { SmartFormService } from './smart-form.service';
import { ActivatedRoute } from '@angular/router';
import {SchemaService} from '../../shared/components/schema.service';

@Component({
    selector: 'esen-smart-form-detail',
    templateUrl: `./smart-form-detail.component.html`,
    styleUrls: ['../general-detail.component.scss'],
})
export class SmartFormDetailComponent implements OnInit {

    schema: any;
    model: any;
    nameOrCode: string;

    private subscription: any;
    queryModel: any;

    constructor(private smartFormService: SmartFormService,
                private schemaService: SchemaService,
                private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
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
        this.smartFormService.find(id).subscribe((item) => {
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

