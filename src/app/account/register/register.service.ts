import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Register {

    constructor(private http: Http) { }
    // 注册1st：发送验证码到手机
    sendcode(account: any): Observable<any> {
        return this.http.post('esenuaa/api/register/pin?mobile=' + account, {});
    }
    // 注册2ed：填写验证码
    save(account: any): Observable<any> {
        return this.http.post('esenuaa/api/register/verify/pin', account);
    }
    // 注册3th：完成注册
    register(code, account: any): Observable<any> {
        return this.http.post('esenuaa/api/register?code=' + code, account);
    }
}
