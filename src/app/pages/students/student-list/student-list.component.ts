import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {StudentApi} from '../../../data/api/student.api';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Student} from '../../../data/model';
import {XPageEditComponent} from '../../../framework/page/x-page-edit.component';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent extends XPageEditComponent implements OnInit {
    rowValue = [
        {studentNumber: 'studentNumber', firstName: 'firstName', lastName: 'lastName', id: 2}
    ];

    rows: Observable<any>;
    columns = [];
    loadingIndicator = true;
    reorderable = true;

    constructor(private db: StudentApi,
                public activatedRoute: ActivatedRoute,
                public modalService: NgbModal,
                private router: Router) {
        super(modalService, activatedRoute, 'Student');
        this.loadList();
    }

    ngOnInit() {
        this.columns = [
            {prop: 'studentNumber', name: 'Student Number'},
            {prop: 'firstName', name: 'First Name'},
            {prop: 'lastName', name: 'Last Name'},
            {prop: 'id', name: 'Actions', cellTemplate: this.actionsTemplate}
        ];
    }

    loadList() {
        this.rows = this.db.getStudents();
    }

    edit(value) {
        this.router.navigate(['/student-entry'], {queryParams: {id: value}});
    }

    delete() {
        this.confirmModal.close();
        this.db.deleteStudent(this.currentModel).subscribe(
            data => {
                this.showDeleted();
                this.loadList();
                return true;
            },
            error => {
                this.showError();
                return Observable.throw(error);
            }
        );
    }
}
