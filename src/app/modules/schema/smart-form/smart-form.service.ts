import {Injectable} from '@angular/core';
import {Http, Response, } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { JhiDateUtils } from 'ng-jhipster';
import { SmartFormModel } from './smart-form.model';

@Injectable()
export class SmartFormService {

    private resourceUrl = 'metas/api/smart-forms/list-info';
    private resourceFindUrl = 'metas/api/smart-forms/detail';
    private resourceSaveUrl = 'metas/api/smart-forms/save';
    private resourceDeleteUrl = 'metas/api/smart-forms/delete';

    constructor(private http: Http, private dateUtils: JhiDateUtils) {
    }

    query(req?: any): Observable<Response> {
        const copy: SmartFormModel = Object.assign({}, req);
        return this.http.post(this.resourceUrl, copy)
            .map((res: any) => this.convertResponse(res));
    }

    find(id: any): Observable<SmartFormModel> {
        return this.http.get(`${this.resourceFindUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            jsonResponse.effectiveDate = this.dateUtils
                .convertLocalDateFromServer(jsonResponse.effectiveDate);
            jsonResponse.lastModifiedTime = this.dateUtils
                .convertDateTimeFromServer(jsonResponse.lastModifiedTime);
            jsonResponse.createdTime = this.dateUtils
                .convertDateTimeFromServer(jsonResponse.createdTime);
            return jsonResponse;
        });
    }

    save(item: SmartFormModel): Observable<string> {
        const copy: SmartFormModel = Object.assign({}, item);
        return this.http.post(this.resourceSaveUrl, copy).map((res: Response) => {
            return res.json();
        });
    }
    delete(id: any): Observable<Response> {
        const copy: SmartFormModel = Object.assign({}, id);
        return this.http.post(`${this.resourceDeleteUrl}/${id}`, copy);
    }
    private convertResponse(res: any): any {
        const jsonResponse = res.json();
        res._body = jsonResponse;
        return res;
    }

}
