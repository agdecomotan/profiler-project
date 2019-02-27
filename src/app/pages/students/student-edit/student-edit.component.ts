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
        {id: 'studentNumber', name: 'Student Number', value: ''},
        {id: 'firstName', name: 'First Name', value: ''},
        {id: 'lastName', name: 'Last Name', value: ''},
        {id: 'yearLevel', name: 'Year Level', value: ''},
        {id: 'email', name: 'E-mail', value: ''},
        {id: 'program', name: 'Program', value: ''}
    ];

    gradeModel = [
        {id: 'courseId', name: 'Course', value: ''},
        {id: 'value', name: 'Grade', value: ''}
    ];

    columns = [
        {prop: 'title', name: 'Product Name'},
        {prop: 'category', name: 'Category'}
    ];
    rows: Observable<any>;
    loadingIndicator = true;
    reorderable = true;
    pageTitle = 'Student Entry';

    constructor(private db: BaseService) {
        this.loadList();
    }

    loadList() {
        this.rows = this.db.getProducts();
    }

    save() {

        const value = {
            'studentNumber': '2017-30211',
            'firstName': 'Jane',
            'lastName': 'Cruz',
            'yearLevel': '1',
            'program': 'MIS',
            'email': 'a@y.com'
        };
        // this.model.forEach(x => value[x.id] = x.value);

        this.db.addStudent(value).subscribe(
            data => {
                this.loadList();
                return true;
            },
            error => {
                return Observable.throw(error);
            }
        );
    }
}
