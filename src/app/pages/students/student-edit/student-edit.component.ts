import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseService} from '../../../data/service/base-service';

@Component({
    selector: 'app-student-edit',
    templateUrl: './student-edit.component.html',
    styleUrls: ['./student-edit.component.scss']
})

export class StudentEditComponent {
    model = [
        {id: 'number', name: 'Student Number', value: ''},
        {id: 'firstName', name: 'First Name', value: ''},
        {id: 'lastName', name: 'Last Name', value: ''},
        {id: 'yearLevel', name: 'Year Level', value: ''},
        {id: 'program', name: 'Program', value: ''}
    ];

    columns = [
        {prop: 'title', name: 'Product Name'},
        {prop: 'category', name: 'Category'}
    ];
    rows: Observable<any>;
    loadingIndicator = true;
    reorderable = true;

    constructor(private db: BaseService) {
        this.loadList();
    }

    loadList() {
        this.rows = this.db.getProducts();
    }
}
