
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartFormService } from './smart-form.service';
import { ITEMS_PER_PAGE } from '../../../shared/constants/pagination.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { SchemaService } from '../../shared/components/schema.service';
import { OpenModalService } from '../../modal.service';
import { SmartFormDeleteComponent } from './smart-form-delete.component';
import { JhiEventManager } from 'ng-jhipster';
@Component({
  selector: 'esen-smart-form-list',
  templateUrl: './smart-form-list.component.html',
  styleUrls: ['../general-list.component.scss'],
})
export class SmartFormListComponent implements OnInit {

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
    private smartFormService: SmartFormService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private schemaService: SchemaService,
    private openModalService: OpenModalService,
    private eventManager: JhiEventManager,
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
    this.nameOrCode = 'SF001';
    this.schemaService.getSchema(this.nameOrCode).subscribe(
      (res: any) => this.onSchemaSuccess(res),
      (res: Response) => this.onError(res),
    );
    this.loadAll();
    this.registerChangeInForms();
  }

  loadAll() {
    this.queryModel = {};
    this.queryModel.page = this.page - 1;
    this.queryModel.size = this.itemsPerPage;
    this.smartFormService.query(this.queryModel).subscribe(
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
      this.router.navigate(['modules/smart-form/detail', val.item.id]);
    } else if (val.name === 'edit') {
      this.router.navigate(['modules/smart-form/edit', val.item.id]);
    } else {
      const modalRef = this.openModalService.openModal(SmartFormDeleteComponent);
      modalRef.componentInstance.id = val.item.id;
    }
  }

  registerChangeInForms() {
    this.eventManager.subscribe('smartFormListModification', (response) => this.loadAll());
  }

  private onSchemaSuccess(data) {
    this.schema = data;
  }
  private onSuccess(data, headers) {
    this.totalItems = headers.get('X-Total-Count');
    this.model = data;
  }
  private onError(error) {
    alert('出错啦');
  }
}

