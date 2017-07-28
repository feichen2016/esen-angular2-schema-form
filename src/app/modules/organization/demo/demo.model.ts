
const enum OrgType {
    'COMPANY',
    'DEPARTMENT',

};

export class DepartmentHrm {
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
        public organizationId?: any,
        public childrenId?: any,
        public parentId?: any,
        public parentOrganizationId?: any,
    ) {
        this.delFlag = false;
    }
}

export class DepartmentList {
    constructor(
        public name?: string,
        public code?: string,
        public status?: string,
        public companyName?: string,
        public effectiveDate?: any,
        public lastModifiedBy?: string,
        public lastModifiedTime?: any,
        public manager?: string,
        public delFlag?: boolean,
        public organizationId?: any,
    ) {
        this.delFlag = false;
    }
}

export class DepartmentDetailModel {
    constructor(
        public budgetNumber?: string,
        public businessUnit?: string,
        public city?: string,
        public district?: string,
        public description?: string,
        public detailsLocation?: string,
        public name?: string,
        public code?: string,
        public status?: string,
        public parentName?: string,
        public parentOrganizationName?: string,
        public manager?: string,
        public delFlag?: boolean,
        public province?: string,
        public organizationId?: any,
        public version?: number,
    ) {
        this.delFlag = false;
    }
}

export class DepartmentNewModel {
    constructor(
        public budgetNumber?: string,
        public businessUnit?: string,
        public description?: string,
        public name?: string,
        public code?: string,
        public status?: string,
        public locationId?: any,
        public managerId?: any,
        public manager?: string,
        public delFlag?: boolean,
        public parentId?: any,
        public parentName?: string,
        public parentOrganizationId?: any,
        public parentOrganizationName?: string,
        public detailsLocation?: string,
        public organizationId?: any,
        public version?: number,
    ) {
        this.delFlag = false;
    }
}

export class LocationModel {
    constructor(
        public city?: string,
        public code?: string,
        public status?: string,
        public detailsLocation?: string,
        public locationId?: any,
        public province?: string,
        public effectiveDate?: any,
        public lastModifiedBy?: string,
        public lastModifiedTime?: any,
        public district?: string,
        public delFlag?: boolean,
    ) {
        this.delFlag = false;
    }
}

export class DepartmentQueryModel {
    constructor(
        public nameOrCode?: string,
        public status?: string,
        public page?: number,
        public size?: number,
    ) {
      this.size = 10;
    }
}

export class EmployeeQueryModel {
    constructor(
        public nameOrCode?: string,
        public page?: number,
        public size?: number,
    ) {
    }
}
