import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CompanyHrm, CompanyQueryModel, CompanyDetailModel } from './company-hrm.model';
import { JhiDateUtils } from 'ng-jhipster';

@Injectable()
export class CompanyHrmService {

    private resourceDeleteUrl = 'esenhrm/api/organization-exts/delete';
    private resourceCreateUrl = 'esenhrm/api/organization-exts/create';
    private resourceUpdateUrl = 'esenhrm/api/organization-exts/update';
    private resourceFindUrl = 'esenhrm/api/organization-exts/find';

    private resourceQueryUrl = 'esenhrm/api/organization-exts/query';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(company: CompanyDetailModel): Observable<String> {

        const copy: CompanyDetailModel = Object.assign({}, company);
        if (company.effectiveDate) {
            copy.effectiveDate = this.dateUtils
                .convertLocalDateToServer(company.effectiveDate);
        }
        if (company.dateOfEstablishment) {
            copy.dateOfEstablishment = this.dateUtils.convertLocalDateToServer(company.dateOfEstablishment.date);
        }
        return this.http.post(this.resourceCreateUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(company: CompanyDetailModel): Observable<String> {
        const copy: CompanyDetailModel = Object.assign({}, company);
        if (company.effectiveDate) {
            copy.effectiveDate = this.dateUtils
                .convertLocalDateToServer(company.effectiveDate);
        }

        if (company.dateOfEstablishment) {
            copy.dateOfEstablishment = this.dateUtils.convertLocalDateToServer(company.dateOfEstablishment.date);
        }

        return this.http.post(this.resourceUpdateUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: any): Observable<CompanyDetailModel> {
        return this.http.get(`${this.resourceFindUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            jsonResponse.dateOfEstablishment = this.dateUtils
                .convertLocalDateFromServer(jsonResponse.dateOfEstablishment);
            return jsonResponse;
        });
    }

    query(req: CompanyQueryModel): Observable<Response> {
        const copy: CompanyQueryModel = Object.assign({}, req);
        return this.http.post(this.resourceQueryUrl, copy)
            .map((res: any) => this.convertResponse(res))
            ;
    }

    delete(id: any): Observable<Response> {
        const copy: CompanyDetailModel = Object.assign({}, id);

        return this.http.post(`${this.resourceDeleteUrl}/${id}`, copy);
    }

    private convertResponse(res: any): any {
        const jsonResponse = res.json();
        res._body = jsonResponse;
        return res;
    }

    private createRequestOption(req?: any): BaseRequestOptions {
        const options: BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            const params: URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);

            options.search = params;
        }
        return options;
    }
}
