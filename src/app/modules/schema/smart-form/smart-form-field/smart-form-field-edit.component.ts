import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartFormFieldService } from './smart-form-field.service';
import { SchemaService } from '../../../shared/components/schema.service';
import { ActivatedRoute } from '@angular/router';
import { SmartFormFieldModel } from './smart-form-field.model';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'esen-smart-form-field-edit',
  templateUrl: `./smart-form-field-edit.component.html`,
  styleUrls: ['../../general-edit.component.scss'],
})
export class SmartFormFieldEditComponent implements OnInit {

  editId: any;
  schema: any;
  model: any;
  isSaving: boolean;
  constructor(
    private smartFormFieldService: SmartFormFieldService,
    private schemaService: SchemaService,
    private route: ActivatedRoute,
    private eventManager: JhiEventManager,
  ) {
  }
  ngOnInit() {
    this.isSaving = false;
    this.route.params.subscribe((params) => {
      this.editId = params['id'];
      this.load(this.editId);
    });
    this.schema = this.schemaService.getSchema('SFF002').subscribe(
      (res: any) => this.onSchemaSuccess(res),
      (res: Response) => this.onError(res),
    );
  }
  load(id: any) {
    if (id) {
      this.smartFormFieldService.find(id).subscribe((model) => {
        this.model = model;
      });
    } else {
      this.model = new SmartFormFieldModel();
    }
  }

  save() {
    this.isSaving = true;
       this.smartFormFieldService.save(this.model)
         .subscribe((res: String) =>
           this.onSaveSuccess((res)), (res: Response) => this.onSaveError(res));
  }

  changeModel(item: any) {
    this.model = item;
  }

  private onSchemaSuccess(data) {
    this.schema = data;
  }

  private onSaveSuccess(result: String) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(error) {
    try {
      error.json();
    } catch (exception) {
      error.message = error.text();
    }
    this.isSaving = false;
    console.log('error:' + error.message);
    this.onError(error);
  }
  private onError(error) {
    alert('出错啦');
  }

  previousState() {
    window.history.back();
  }
}

