import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseService} from '../../../data/service/base-service';
import {Student} from '../../../data/model';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent {
    columns = [
        {prop: 'studentNumber', name: 'Product Name'},
        {prop: 'firstName', name: 'Description'},
        {prop: 'lastName', name: 'Category'}
    ];
    rows: Observable<any>;
    loadingIndicator = true;
    reorderable = true;

    constructor(private db: BaseService) {
        this.loadList();
    }

    loadList() {
        this.rows = this.db.getStudents();
    }
}
