import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';
import { OpenModalService } from '../modal.service';

@Component({
    selector: 'esen-organization-hrm',
    templateUrl: './organization-hrm.component.html',
    styleUrls: ['./organization-hrm.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OrganizationHrmComponent implements OnInit {

    private components: Array<String>;

    ngOnInit() {
    }
}
