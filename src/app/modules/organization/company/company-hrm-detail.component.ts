import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiLanguageService } from 'ng-jhipster';

import { CompanyDetailModel } from './company-hrm.model';
import { CompanyHrmService } from './company-hrm.service';

@Component({
    selector: 'esen-company-hrm-detail',
    templateUrl: './company-hrm-detail.component.html'
})
export class CompanyHrmDetailComponent implements OnInit, OnDestroy {

    company: CompanyDetailModel;
    private subscription: any;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private jhiLanguageService: JhiLanguageService,
        private companyService: CompanyHrmService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInOrganizations();
    }

    load(id?: any) {
        this.companyService.find(id).subscribe((company) => {
            this.company = company;
        });
    }

    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInOrganizations() {
        this.eventSubscriber = this.eventManager.subscribe('organizationListModification', (response) => this.load(this.company.companyId));
    }
}
