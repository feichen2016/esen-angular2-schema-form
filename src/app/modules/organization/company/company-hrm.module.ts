import { NgModule } from '@angular/core';
import { JhipsterSharedModule } from '../../../shared';
import { CompanyHrmComponent } from './company-hrm.component';
import { CompanyHrmDeleteComponent } from './company-hrm-delete.component';
import { CompanyHrmDetailComponent } from './company-hrm-detail.component';
import { CompanyHrmEditComponent } from './company-hrm-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompanyHrmService } from './company-hrm.service';
import { MyDatePickerModule } from 'mydatepicker';
import { companyRoute } from './company-hrm.route';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    JhipsterSharedModule,
    MyDatePickerModule,
    RouterModule,
    NgbModule,
    // RouterModule.forChild(companyRoute),
  ],
  exports: [CompanyHrmComponent],
  declarations: [
    CompanyHrmComponent,
    CompanyHrmDeleteComponent,
    CompanyHrmDetailComponent,
    CompanyHrmEditComponent,
  ],
  providers: [CompanyHrmService],
})
export class CompanyHrmModule { }
