
const enum OrgType {
    'COMPANY',
    'DEPARTMENT',

}
export class CompanyHrm {
    constructor(
        public id?: any,
        public type?: OrgType,
        public name?: string,
        public code?: string,
        public logoUrl?: string,
        public status?: string,
        public description?: string,
        public companyNo?: string,
        public effectiveDate?: any,
        public lastModifiedBy?: string,
        public lastModifiedTime?: any,
        public createdBy?: string,
        public createdTime?: any,
        public delFlag?: boolean,
        public version?: number,
        public locationId?: any,
        public companyId?: any,
        public childrenId?: any,
        public parentId?: any,
        public legalPerson?: string,
        public registeredCapital?: string,
        public registrationAuthority?: string,
        public phone?: string,
        public faxNumber?: string,
        public dateOfEstablishment?: any,
        public scale?: string,
        public webSite?: string,
        public location?: string,
        public zipCode?: string,
        public email?: string,
        public properties?: string,
    ) {
        this.delFlag = false;
    }
}

export class CompanyQueryModel {
    constructor(
        public nameOrCode?: string,
        public page?: number,
        public size?: number,
        public status?: string,
    ) {
    }
}

export class CompanyQueryResultModel {
    constructor(
        public name?: string,
        public companyNo?: string,
        public effectiveDate?: any,
        public lastModifiedBy?: string,
        public lastModifiedTime?: any,
        public companyId?: any,
        public companyExtId?: any,
        public legalPerson?: string,
        public parentName?: string,
        public status?: string,
    ) {
    }
}

export class CompanyDetailModel {
    constructor(
        public companyNo?: string,
        public dateOfEstablishment?: any,
        public effectiveDate?: any,
        public description?: string,
        public email?: string,
        public faxNumber?: string,
        public legalPerson?: string,
        public location?: string,
        public name?: string,
        public companyId?: any,
        public parentId?: any,
        public parentName?: string,
        public phone?: string,
        public properties?: string,
        public registeredCapital?: string,
        public registrationAuthority?: string,
        public scale?: string,
        public status?: string,
        public webSite?: string,
        public zipCode?: string,
        public version?: number,
    ) {

    }
}
