import { Component, OnInit, Input } from '@angular/core';
import { SmartFormFieldService } from './smart-form-field.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'esen-smart-form-field-delete',
  templateUrl: `./smart-form-field-delete.component.html`,
  styleUrls: [
    '../../schema-delete.scss'
  ],
})

export class SmartFormFieldDeleteComponent implements OnInit {
  @Input() id;
  constructor(
    public activeModal: NgbActiveModal,
    private smartFormFieldService: SmartFormFieldService,
    private eventManager: JhiEventManager,
  ) { }

  ngOnInit() { }

  clear() {
    this.activeModal.dismiss('cancel');
  }
  delete() {
    this.smartFormFieldService.delete(this.id).subscribe((res) =>
      this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
  }
  private onSaveError(error) {
    const errorMsg = error.json();
    switch (errorMsg.code) {
      case '400':
        alert(errorMsg.message);
        break;
      default:
        alert('内部服务器错误');
    }
    this.activeModal.dismiss(true);
  }
  private onSaveSuccess(error) {
     this.eventManager.broadcast({
       name: 'smartFormListModification',
       content: 'Deleted an form',
     });
    this.activeModal.dismiss(true);
  }
}
