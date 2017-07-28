import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { valueToLabel } from '../util';
import { DatePipe } from '@angular/common';
import {JhiDateUtils} from 'ng-jhipster';

@Component({
    selector: 'list-dynamic-form',
    templateUrl: 'list-dynamic-form.component.html',
    styleUrls: ['../general-list.component.scss']
})
export class ListDynamicFormComponent implements OnInit {
    @Input()
    model: any;
    @Input()
    schema: any;
    @Input()
    collectionSize: any;
    @Input()
    actions: any;
    @Input()
    page: any;

    @Output()
    public callback = new EventEmitter();
    @Output()
    public callbackClick = new EventEmitter();

    constructor(private datePipe: DatePipe, private dateUtils: JhiDateUtils) {}
    ngOnInit() {
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
    showLabel(value: any, itemId: any): any {
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

    /**
     * @description 点击的按钮ID及所需的数据.
     * @param name button类别,schema中的button的name.
     * @param item 点击button对应的当前model.
     */
    buttonClick(name: any, item: any) {
        this.callbackClick.emit({ name: name, item: item });
    }

    /**
     * @description 分页加载回调
     * @param page 当前点击的页数
     */
    loadPage(page: number) {
        this.callback.emit(page);
    }
}
