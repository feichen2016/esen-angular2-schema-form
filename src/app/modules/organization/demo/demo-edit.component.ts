import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DemoService } from './demo.service';
import { SchemaService } from '../../shared/components/schema.service';
import {ActivatedRoute} from '@angular/router';
import {DepartmentNewModel} from './demo.model';

@Component({
  selector: 'demo-edit',
  templateUrl: `./demo-edit.component.html`,
  styleUrls: ['../general-edit.component.scss'],
})
export class DemoEditComponent implements OnInit {

  schema: any;
  model: any;
  constructor(
    private demoService: DemoService,
    private schemaService: SchemaService,
    private route: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.load(params['id']);
    });
    this.schema = this.schemaService.getSchema('TEST002').subscribe(
      (res: any) => this.onSchemaSuccess(res),
      (res: Response) => this.onError(res),
    );
    this.model = this.demoService.getModel();
  }
  load(id: any) {
    if (id) {
      this.demoService.find(id).subscribe((model) => {
        this.model = model;
      });
    } else {
      this.model = new DepartmentNewModel();
      this.model.status = '1';
    }
  }
  private onSchemaSuccess(data) {
    this.schema = data;
  }
  private onError(error) {
    alert('出错啦');
  }

  previousState() {
    window.history.back();
  }
}

