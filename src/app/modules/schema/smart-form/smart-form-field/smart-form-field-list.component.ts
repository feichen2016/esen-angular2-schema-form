
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { SmartFormFieldService } from './smart-form-field.service';
import { ITEMS_PER_PAGE } from '../../../../shared/index';
import { ActivatedRoute, Router } from '@angular/router';
import { SchemaService } from '../../../shared/components/schema.service';
import { OpenModalService } from '../../../modal.service';
import { SmartFormFieldDeleteComponent } from './smart-form-field-delete.component';
@Component({
  selector: 'esen-smart-form-field-list',
  templateUrl: './smart-form-field-list.component.html',
  styleUrls: ['../../general-list.component.scss'],
})
export class SmartFormFieldListComponent implements OnInit {

  @Input() formId: any;
  routeData: any;
  schema: any;
  model: any;
  totalItems: any;
  itemsPerPage: any;
  previousPage: any;
  page: any;
  nameOrCode: string;
  queryModel: any;

  constructor(
    private smartFormFieldService: SmartFormFieldService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private schemaService: SchemaService,
    private openModalService: OpenModalService,
  ) {
    this.itemsPerPage = ITEMS_PER_PAGE;
    this.page = 1;
    this.previousPage = 1;
    this.routeData = this.activatedRoute.data.subscribe((data) => {
      if (data['pagingParams']) {
        this.page = data['pagingParams'].page;
        this.previousPage = data['pagingParams'].page;
      }
    });
  }

  ngOnInit() {
    this.model = [];
    this.nameOrCode = 'SFF001';
    this.schemaService.getSchema(this.nameOrCode).subscribe(
      (res: any) => this.onSchemaSuccess(res),
      (res: Response) => this.onError(res),
    );
    this.loadAll();
  }

  loadAll() {
    this.queryModel = {};
    this.queryModel.formId = this.formId;
    this.queryModel.page = this.page - 1;
    this.queryModel.size = this.itemsPerPage;
    this.smartFormFieldService.query(this.queryModel).subscribe(
      (res) => this.onSuccess(res.json(), res.headers),
      (res: Response) => this.onError(res.json()),
    );
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.page = page;
      this.loadAll();
    }
  }

  buttonClick(val: any) {
    if (val.name === 'detail') {
      this.router.navigate(['modules/smart-form-field/detail', val.item.id]);
    } else if (val.name === 'edit') {
      this.router.navigate(['modules/smart-form-field/edit', val.item.id]);
    } else {
      const modalRef = this.openModalService.openModal(SmartFormFieldDeleteComponent);
      modalRef.componentInstance.id = val.item.id;
    }
  }

  private onSchemaSuccess(data) {
    this.schema = data;
  }
  private onSuccess(data, headers) {
    this.totalItems = headers.get('X-Total-Count');
    this.model = data;
  }
  private onError(error) {
    alert('接口异常');
  }
}

