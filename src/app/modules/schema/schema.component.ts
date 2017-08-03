import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'esen-schema',
    templateUrl: './schema.component.html',
    styleUrls: ['./schema.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SchemaComponent implements OnInit {

    private components: Array<String>;

    ngOnInit() {
    }
}
