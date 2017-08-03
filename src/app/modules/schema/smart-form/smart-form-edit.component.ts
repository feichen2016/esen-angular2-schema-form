import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartFormService } from './smart-form.service';
import { SchemaService } from '../../shared/components/schema.service';
import { ActivatedRoute } from '@angular/router';
import { SmartFormModel } from './smart-form.model';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'esen-smart-form-edit',
  templateUrl: `./smart-form-edit.component.html`,
  styleUrls: ['../general-edit.component.scss'],
})
export class SmartFormEditComponent implements OnInit {

  editId: any;
  schema: any;
  model: any;
  isSaving: boolean;
  constructor(
    private smartFormService: SmartFormService,
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
    this.schema = this.schemaService.getSchema('SF002').subscribe(
      (res: any) => this.onSchemaSuccess(res),
      (res: Response) => this.onError(res),
    );
    this.model = this.smartFormService.getModel();
  }
  load(id: any) {
    if (id) {
      this.smartFormService.find(id).subscribe((model) => {
        this.model = model;
      });
    } else {
      this.model = new SmartFormModel();
    }
  }

  save() {
    this.isSaving = true;
    if (this.editId) {
      // this.smartFormService.update(this.)
      //   .subscribe((res: String) =>
      //     this.onSaveSuccess((res)), (res: Response) => this.onSaveError(res));
      alert(JSON.stringify(this.model));
    } else {
      // debugger;
      // this.departmentService.create(this.department)
      //   .subscribe((res: String) =>
      //     this.onSaveSuccess((res)), (res: Response) => this.onSaveError(res));
    }
  }

  changeModel(item: any) {
    this.model = item;
    alert(JSON.stringify(this.model));
  }

  private onSchemaSuccess(data) {
    this.schema = data;
  }

  private onSaveSuccess(result: String) {
    this.eventManager.broadcast({ name: 'departmentListModification', content: 'OK' });
    this.isSaving = false;
    this.previousState();
    // this.activeModal.dismiss(result);
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

