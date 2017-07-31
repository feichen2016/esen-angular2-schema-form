
import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { DemoService } from './demo.service';
import { DepartmentQueryModel } from './demo.model';
import { ITEMS_PER_PAGE } from '../../../shared/constants/pagination.constants';
import {ActivatedRoute, Router} from '@angular/router';
import {SchemaService} from '../../shared/components/schema.service';
@Component({
  selector: 'esen-sf-demo-app',
  templateUrl: './demo-list.component.html',
  /*encapsulation: ViewEncapsulation.None,*/
 /* providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }],*/
})
export class DemoListComponent implements OnInit {

  routeData: any;
  schema: any;
  model: any;
  totalItems: any;
  itemsPerPage: any;
  previousPage: any;
  page: any;
  nameOrCode: string;

  queryModel: DepartmentQueryModel;

  constructor(
      private demoService: DemoService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private schemaService: SchemaService,
    ) {
     // this.schema = require('../../../mock-data/demolist.json');
    // this.model = require('../../../mock-data/demolistmodel.json');
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
    this.nameOrCode = 'TEST001';
    this.schemaService.getSchema(this.nameOrCode).subscribe(
        (res: any) => this.onSchemaSuccess(res),
        (res: Response) => this.onError(res),
    );
    this.loadAll();
  }

  loadAll() {
    this.queryModel = new DepartmentQueryModel();
    // this.queryModel.nameOrCode = '';
    this.queryModel.page = this.page - 1;
    this.queryModel.size = this.itemsPerPage;
    this.demoService.query(this.queryModel).subscribe(
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
      this.router.navigate(['modules/detail', val.item.organizationId]);
    } else if (val.name === 'edit') {
      this.router.navigate(['modules/edit', val.item.organizationId]);
    } else {
      alert(val.name + '***' + val.item.organizationId);
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
    alert('出错啦');
  }
}

