import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {StudentApi} from '../../../data/api/student.api';
import {Grade, Student} from '../../../data/model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {XPageEditComponent} from '../../../framework/page/x-page-edit.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-student-edit',
    templateUrl: './student-edit.component.html',
    styleUrls: ['./student-edit.component.scss']
})

export class StudentEditComponent extends XPageEditComponent {
    columns = [
        {prop: 'title', name: 'Course'},
        {prop: 'category', name: 'Grade'}
    ];

    model: Student;
    gradeModel: Grade;
    rows: Observable<any>;

    constructor(private db: StudentApi,
                public activatedRoute: ActivatedRoute,
                public modalService: NgbModal,
                private router: Router) {
        super(modalService, activatedRoute, 'Student');
        this.gradeModel = new Grade();
        this.model = new Student();
        this.model.grades = new Array();
        if (this.editMode) {
            this.db.getStudent(this.editId).subscribe(
                data => {
                    this.model = data;
                    return true;
                },
                error => {
                    this.showError();
                    this.router.navigate(['/students']);
                    return Observable.throw(error);
                }
            );
        }
    }

    save() {
        if (this.validateInput()) {
            if (this.editMode) {
                this.db.updateStudent(this.model).subscribe(
                    data => {
                        this.showSuccess();
                        this.router.navigate(['/students']);
                        return true;
                    },
                    error => {
                        this.showError();
                        return Observable.throw(error);
                    }
                );
            } else {
                this.db.addStudent(this.model).subscribe(
                    data => {
                        this.showSuccess();
                        this.router.navigate(['/students']);
                        return true;
                    },
                    error => {
                        this.showError();
                        return Observable.throw(error);
                    }
                );
            }
        } else {
            this. showValidationError();
        }
    }

    validateInput(): boolean {
        if (this.model.studentNumber === undefined || this.model.studentNumber === '') {
            return false;
        } if (this.model.firstName === undefined || this.model.firstName === '') {
            return false;
        } if (this.model.lastName === undefined || this.model.lastName === '') {
            return false;
        } if (this.model.yearLevel === undefined || this.model.yearLevel === '') {
            return false;
        } if (this.model.program === undefined || this.model.program === '') {
            return false;
        } if (this.model.email === undefined || this.model.email === '') {
            return false;
        } else {
            return true;
        }
    }
}
