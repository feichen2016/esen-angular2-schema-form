import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiLanguageService } from 'ng-jhipster';

import { Register } from './register.service';
import { LoginModalService } from '../../shared';

@Component({
    selector: 'esen-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, AfterViewInit {

    confirmPassword: string;
    doNotMatch: string;
    error: string;
    errorpinExists: string;
    errorUserExists: string;
    registerAccount: any;
    success: boolean;
    registersuccess: boolean;
    modalRef: NgbModalRef;
    finishRegister: any;
    constructor(
        private languageService: JhiLanguageService,
        private loginModalService: LoginModalService,
        private registerService: Register,
        private elementRef: ElementRef,
        private renderer: Renderer
    ) {
    }

    ngOnInit() {
        this.success = false;
        this.registersuccess = false;
        this.registerAccount = {
            mobile: '',
            code: '',
            pin: ''
        };
        this.finishRegister = {
            mobile: '',
            password: '',
            code: ''
        }
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    }
    // 1st：发送手机验证码
    sendcode() {
        this.registerService.sendcode(this.registerAccount.mobile).subscribe((res) => {
            this.success = true;
            this.errorUserExists = null;
            console.log(res.json().code);
            this.registerAccount.code = res.json().code;
        }, (response) => this.processError(response)
        );
    };
    // 2st：填写验证码
    save() {
        this.registerService.save(this.registerAccount).subscribe((res) => {
            this.success = null;
            this.errorpinExists = null;
            this.finishRegister.code = res.json().code;
        }, (response) => this.processError(response)
        );
    }
    // 3st：注册
    register() {
        this.finishRegister.mobile = this.registerAccount.mobile;
        if (this.finishRegister.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
            alert(1);
        } else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorpinExists = null;
            this.registerService.register(this.finishRegister.code, this.finishRegister).subscribe((res) => {
                this.success = null;
                this.registersuccess = true;
                alert(res);
            }, (response) => this.processError(response));
        }
    }

    openLogin() {
        this.modalRef = this.loginModalService.open();
    }

    private processError(response) {
        this.success = null;
        if (response.status === 400 && response.json().code === 2001) {
            this.errorUserExists = 'ERROR';    // 手机已经注册过
        } else if (response.status === 400 && response.json().code === 2003) {
            this.errorpinExists = 'ERROR';     // 验证码错误
        } else {
            this.error = 'ERROR';
        }
    }
}
