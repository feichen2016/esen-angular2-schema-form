import { Component, Injectable } from '@angular/core';

import {NgbModal, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class OpenModalService {

    private isOpen = false;
    constructor(private modalService: NgbModal) {
    }

    openModal(component: Component, options?: NgbModalOptions): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        const modalRef = this.modalService.open(component, { size: 'lg' });
        modalRef.result.then((result) => {
            this.isOpen = false;
        }, (reason) => {
            this.isOpen = false;
        });
        return modalRef;
    }
}
