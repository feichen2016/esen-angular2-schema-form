 import { DatePipe } from '@angular/common';
 import { JhiDateUtils } from 'ng-jhipster';
 /**
 * @description 根据字段定义的type，format对值进行处理后显示到页面上.
 * @param value model中取得的值.
 * @param field schema中对应该值的属性.
 * @return label 显示值.
 */
 export function valueToLabel(value: any, field: any, datepipe: DatePipe, dateUtils: JhiDateUtils): any {
     if (field) {
         let label = value || field.defaultValue || '';
         if ('OPTION' === field.valueType) {
             field.dictionaries.forEach((option) => {
                 if (label === option.value) {
                     label = option.name;
                 }
             });
         } else if ('LOCALDATE' === field.valueType) {
             label = dateUtils.convertLocalDateFromServer(label);
             label = datepipe.transform(label, 'yyyy/MM/dd');
         } else if ('DATETIME' === field.valueType) {
             label = dateUtils
                 .convertDateTimeFromServer(label);
             label = datepipe.transform(label, 'yyyy/MM/dd');
         }

         return label;
     } else {
         return '';
     }
}
