import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { JhiEventManager, JhiAlertService, JhiLanguageService, JhiParseLinks } from 'ng-jhipster';

import { CompanyHrmService } from './company-hrm.service';
import { CompanyQueryResultModel, CompanyDetailModel, CompanyQueryModel } from './company-hrm.model';

import { OpenModalService } from '../../modal.service';

import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { IMyDpOptions } from 'mydatepicker';

@Component({
    selector: 'esen-company-hrm-edit',
    templateUrl: './company-hrm-edit.component.html',
    styleUrls: ['../general-edit.component.scss']
})

export class CompanyHrmEditComponent implements OnInit, OnDestroy {
    editForm: FormGroup;
    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'yyyy-mm-dd',
    };
    authorities: any[];
    isSaving: boolean;
    private subscription: any;
    links: any;
    totalItems: number;
    eventSubscriber: Subscription;

    // locations: LocationHrm[];
    query: CompanyQueryModel;
    companies: CompanyQueryResultModel[];
    options: NgbModalOptions;
    company: CompanyDetailModel;
    constructor(
        private jhiLanguageService: JhiLanguageService,
        private alertService: JhiAlertService,
        private companyService: CompanyHrmService,
        // private locationService: LocationHrmService,
        private eventManager: JhiEventManager,
        private openModalService: OpenModalService,
        private datePipe: DatePipe,
        private route: ActivatedRoute,
        private parseLinks: JhiParseLinks,
    ) {
        this.editForm = new FormGroup({
            phone: new FormControl('', CustomValidators.range([11, 11])),
            webSite: new FormControl('', CustomValidators.url),
            email: new FormControl('', CustomValidators.email),
            zipCode: new FormControl('', CustomValidators.number)
        });
    }

    ngOnInit() {
        this.company = new CompanyDetailModel();
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.registerChangeParentOrganization();
        // this.organizationService.query().subscribe(
        //     (res: Response) => { this.organizations = res.json(); }, (res: Response) => this.onError(res.json()));
    }

    registerChangeParentOrganization() {
        this.eventSubscriber = this.eventManager.subscribe('changeParentOrganization', (response) => {
            this.company.parentId = response.content.id;
            this.company.parentName = response.content.name;
        });
    }

    load(id: any) {
        if (id) {
            this.companyService.find(id).subscribe((company) => {
                if (company.dateOfEstablishment) {
                    company.dateOfEstablishment = {
                        date: {
                            year: company.dateOfEstablishment.getFullYear(),
                            month: company.dateOfEstablishment.getMonth() + 1,
                            day: company.dateOfEstablishment.getDate(),
                        }
                    };
                }
                this.company = company;
            });
        } else {
            this.company = new CompanyDetailModel();
            this.company.status = '1';
        }
    }

    save() {
        this.isSaving = true;
        if (this.company.companyId !== undefined) {
            this.companyService.update(this.company)
                .subscribe(
                (res: String) => this.onSaveSuccess(res),
                (res: Response) => this.onSaveError(res));
        } else {
            this.companyService.create(this.company)
                .subscribe(
                (res: String) => this.onSaveSuccess(res),
                (res: Response) => this.onSaveError(res));
        }
    }

    loadQueryData(query: CompanyQueryModel) {
        this.companyService.query(this.query).subscribe(
            (res: Response) => this.onSuccess(res.json(), res.headers),
            (res: Response) => this.onError(res.json()),
        );
    }

    private onSuccess(data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        for (let i = 0; i < data.length; i++) {
            this.companies.push(data[i]);
        }
    }

    private onSaveSuccess(result: String) {
        this.eventManager.broadcast({ name: 'organizationListModification', content: 'OK' });
        this.isSaving = false;
        window.history.back();
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.showAlert(error.json().message);
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
    // 错误信息跑出
    showAlert(msg) {
        // if(msg !== undefined){
        //    const modalRef = this.openModalService.openModal(ErrorModalComponent);
        //      modalRef.componentInstance.msg = msg;
        // }else{
        //     const modalRef = this.openModalService.openModal(ErrorModalComponent);
        //     modalRef.componentInstance.msg = "网络故障，请重新操作！";
        // }
        // console.log("错误信息：:"+msg);

        if (msg === 'error.internalServerError') {
        } else if (msg === 'undefined') {
        } else {
        }

        console.log('错误信息：:' + msg);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.subscription);

        this.eventSubscriber.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    previousState() {
        window.history.back();
    }

    openParent() {
        // const modalRef = this.openModalService.openModal(OrganizationHrmModalComponent);
        // modalRef.componentInstance.selectedId = this.company.parentId;
    }

}
