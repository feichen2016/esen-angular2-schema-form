import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiLanguageService } from 'ng-jhipster';

import { CompanyHrm } from './company-hrm.model';
import { CompanyHrmService } from './company-hrm.service';

@Component({
    selector: 'esen-company-hrm-delete-dialog',
    templateUrl: './company-hrm-delete.component.html',
})
export class CompanyHrmDeleteComponent implements OnInit {

    @Input() id;
    company: CompanyHrm;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private companyService: CompanyHrmService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager,

    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    ngOnInit() {
        this.company = new CompanyHrm();
        this.company.id = this.id;
    }

    confirmDelete(id: any) {
        // this.companyService.delete(id).subscribe((response) => {
        //     this.eventManager.broadcast({
        //         name: 'companyListModification',
        //         content: 'Deleted an company',
        //     });
        //     this.activeModal.dismiss(true);
        // });
        this.companyService.delete(id).subscribe((res) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveError(error) {
        const errorMsg = error.json();
        // switch(errorMsg.code){
        //     case "400":
        //         alert(errorMsg.message);
        //         break;
        //     default:
        //         alert("内部服务器错误");
        // }
    }
    private onSaveSuccess(error) {
        this.eventManager.broadcast({
            name: 'companyListModification',
            content: 'Deleted an organization',
        });
        this.activeModal.dismiss(true);
    }
}
