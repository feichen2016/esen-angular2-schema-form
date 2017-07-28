import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { valueToLabel } from '../util';
import { DatePipe } from '@angular/common';
import { JhiDateUtils } from 'ng-jhipster';

@Component({
    selector: 'detail-dynamic-form',
    templateUrl: 'detail-dynamic-form.component.html',
    styleUrls: ['./detail.scss'],
})
export class DetailDynamicFormComponent implements OnInit {
    @Input()
    model: any;
    @Input()
    schema: any;
    @Output()
    public callback = new EventEmitter();

    constructor(private datePipe: DatePipe, private dateUtils: JhiDateUtils) {
    }
    ngOnInit() {
    }

    flag(itemId: any): boolean {
        let flag = false;
        this.schema.fields.forEach(
            item => {
                if (item.name === itemId) {
                    if (item.colspan > 1) {
                        flag = true;
                    }
                }
            },
        );
        return flag;
    }
    /**
     * @description 根据字段定义进行处理后显示到页面上.
     * @param field schema中对应该值的属性.
     * @return label 显示值.
     */
    showTitle(itemId: any): any {
        let title = '';
        this.schema.fields.forEach(
            item => {
                if (item.name === itemId) {
                    title = item.displayName;
                }
            },
        );
        return title;
    }

    /**
     * @description 根据字段定义的type，format对值进行处理后显示到页面上.
     * @param value model中取得的值.
     * @param itemId schema中对应该值的属性.
     * @return label 显示值.
     */
    showLabel(itemId: any): any {
        let value = '';
        if (this.model) {
            value = this.model[itemId];
        }
        let field = [];
        this.schema.fields.forEach(
            item => {
                if (item.name === itemId) {
                    field = item;
                }
            },
        );
        return valueToLabel(value, field, this.datePipe, this.dateUtils);
    }
}
