import {Injectable} from '@angular/core';
import {Http, Response, } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { JhiDateUtils } from 'ng-jhipster';
import { SmartFormModel } from './smart-form.model';

@Injectable()
export class SmartFormService {

    private testSchemaUrl = 'metas/api/smart-forms';
    private resourceUrl = 'metas/api/smart-forms/list-info';

    private resourceFindUrl = 'metas/api/smart-forms/detail';

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

    private convertResponse(res: any): any {
        const jsonResponse = res.json();
        /*for (let i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].effectiveDate = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].effectiveDate);
            jsonResponse[i].lastModifiedTime = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].lastModifiedTime);
            jsonResponse[i].createdTime = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].createdTime);
        }*/
        res._body = jsonResponse;
        return res;
    }

    getModel(): any {
        return {firstName: 'fei chen',
            brave: 'Solid',

        };
    }

}
