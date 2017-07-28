import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyHrm, CompanyQueryResultModel, CompanyQueryModel } from './company-hrm.model';
import { JhiLanguageService, JhiParseLinks, JhiAlertService, JhiEventManager, JhiPaginationUtil } from 'ng-jhipster';
import { CompanyHrmService } from './company-hrm.service';
import { Principal } from '../../../shared/auth/principal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationConfig } from '../../../blocks/config/uib-pagination.config';
import { OpenModalService } from '../../modal.service';
import { Subscription } from 'rxjs/Rx';
import { CompanyHrmDeleteComponent } from './company-hrm-delete.component';
import { ITEMS_PER_PAGE } from '../../../shared/constants/pagination.constants';

@Component({
  selector: 'esen-company-hrm',
  templateUrl: './company-hrm.component.html',
  styleUrls: ['../general-list.component.scss']
})

export class CompanyHrmComponent implements OnInit, OnDestroy {

  currentAccount: any;
  organizations: CompanyQueryResultModel[];
  error: any;
  success: any;
  eventSubscriber: Subscription;
  routeData: any;
  links: any;
  totalItems: any;
  queryCount: any;
  itemsPerPage: any;
  page: any;
  predicate: any;
  previousPage: any;
  reverse: any;
  queryModel: CompanyQueryModel;
  searchNameOrCode: string;
  selectedStatus: string;

  constructor(
    private jhiLanguageService: JhiLanguageService,
    private organizationService: CompanyHrmService,
    private parseLinks: JhiParseLinks,
    private alertService: JhiAlertService,
    private principal: Principal,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventManager: JhiEventManager,
    private paginationUtil: JhiPaginationUtil,
    private paginationConfig: PaginationConfig,
    private openModalService: OpenModalService,
  ) {
    this.itemsPerPage = ITEMS_PER_PAGE;
    this.routeData = this.activatedRoute.data.subscribe((data) => {
      this.page = 1;
      this.previousPage = 1;
      this.reverse = 1;
      this.predicate = 1;
    });
  }

  showStatus() {
    // alert(this.selectedStatus);
    this.queryModel.status = this.selectedStatus;
    this.queryModel.nameOrCode = this.searchNameOrCode;
    this.queryModel.page = 0;
    this.queryModel.size = this.itemsPerPage;
    this.organizationService.query(this.queryModel).subscribe(
      (res) => this.onSuccess(res.json(), res.headers),
      (res) => this.onError(res.json()),
    );
  }

  loadAll() {
    this.queryModel = new CompanyQueryModel();
    // this.queryModel.nameOrCode = '';
    this.queryModel.status = this.selectedStatus;
    this.queryModel.nameOrCode = this.searchNameOrCode;
    this.queryModel.page = this.page - 1;
    this.queryModel.size = this.itemsPerPage;
    this.organizationService.query(this.queryModel).subscribe(
      (res) => this.onSuccess(res.json(), res.headers),
      (res) => this.onError(res.json())
    );
  }
  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.transition();
    }
  }
  transition() {
    this.router.navigate(['/modules/organization/hrm-organization-list'], {
      queryParams:
      {
        page: this.page,
        size: this.itemsPerPage,
        sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
      }
    });
    this.loadAll();
  }

  clear() {
    this.page = 0;
    this.router.navigate(['/modules/organization/hrm-organization-list', {
      page: this.page,
      sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
    }]);
    this.loadAll();
  }
  ngOnInit() {
    this.selectedStatus = '1';
    this.loadAll();
    this.principal.identity().then((account) => {
      this.currentAccount = account;
    });
    this.registerChangeInOrganizations();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: CompanyHrm) {
    return item.id;
  }
  registerChangeInOrganizations() {
    this.eventSubscriber = this.eventManager.subscribe('organizationListModification', (response) => this.loadAll());
  }

  sort() {
    const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private onSuccess(data, headers) {
    this.links = this.parseLinks.parse(headers.get('link'));
    this.totalItems = headers.get('X-Total-Count');
    this.queryCount = this.totalItems;
    // this.page = pagingParams.page;
    this.organizations = data;
  }
  private onError(error) {
    this.alertService.error(error.message, null, null);
  }

  openDelete(id) {
    this.organizationService.delete(id).subscribe((res) =>
      this.onSaveSuccess(res, id), (res: Response) => this.onSaveError(res));

  }
  private onSaveError(error) {
    const errorMsg = error.json();
  }
  private onSaveSuccess(error, id) {
    const modalRef = this.openModalService.openModal(CompanyHrmDeleteComponent);
    modalRef.componentInstance.id = id;
  }
}
