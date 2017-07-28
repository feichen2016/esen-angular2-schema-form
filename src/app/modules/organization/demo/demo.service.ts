import {Injectable} from '@angular/core';
import {Http, Response, } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DepartmentDetailModel, DepartmentQueryModel } from './demo.model';
import { JhiDateUtils } from 'ng-jhipster';

@Injectable()
export class DemoService {
    public samplemodelURL = 'mock-data/samplemodel.json';
    public sampleschemaURL = 'mock-data/sampleschema.json';

    private testSchemaUrl = 'metas/api/smart-forms';
    private resourceUrl = 'esenhrm/api/org/departments/list-info';

    private resourceFindUrl = 'esenhrm/api/org/department/detail';

    constructor(private http: Http, private dateUtils: JhiDateUtils) {
    }

    public getSamplemodel(): any {
        return this.http.get(this.samplemodelURL)
            .map((res: Response) => res.json());
    }

    public getsampleschema(): any {
        return this.http.get(this.sampleschemaURL)
            .map((res: Response) => res.json());
    }

    query(req?: any): Observable<Response> {
        const copy: DepartmentQueryModel = Object.assign({}, req);
        return this.http.post(this.resourceUrl, copy)
            .map((res: any) => this.convertResponse(res));
    }

    find(id: any): Observable<DepartmentDetailModel> {
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
