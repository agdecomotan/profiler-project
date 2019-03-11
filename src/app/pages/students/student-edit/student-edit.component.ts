import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {StudentApi} from '../../../data/api/student.api';
import {Grade, Student} from '../../../data/model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {XPageEditComponent} from '../../../framework/page/x-page-edit.component';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseApi} from '../../../data/api/course.api';
import {GradeApi} from '../../../data/api/grade.api';

@Component({
    selector: 'app-student-edit',
    templateUrl: './student-edit.component.html',
    styleUrls: ['./student-edit.component.scss']
})

export class StudentEditComponent extends XPageEditComponent {
    columns = [
        {prop: 'title', name: 'Course'},
        {prop: 'value', name: 'Grade'}
    ];

    model: Student;
    gradeModel: Grade;
    rows: Observable<any>;
    courseList = [];
    gradeList = [];

    constructor(private db: StudentApi,
                private dbCourse: CourseApi,
                private dbGrade: GradeApi,
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

           this.loadGradeList();
        }
        this.loadCourseList();
    }

    save() {
        if (this.validateInput()) {
            if (this.editMode) {
                this.db.updateStudent(this.model).subscribe(
                    data => {
                        this.model = data;
                        if (this.gradeList.length > 0) {
                            this.saveGrade();
                        } else {
                            this.showSuccess();
                            this.router.navigate(['/students']);
                        }
                    },
                    error => {
                        this.showError();
                        return Observable.throw(error);
                    }
                );
            } else {
                this.db.addStudent(this.model).subscribe(
                    data => {
                        this.model = data;
                        if (this.gradeList.length > 0) {
                            this.saveGrade();
                        } else {
                            this.showSuccess();
                            this.router.navigate(['/students']);
                        }
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

    saveGrade() {
        const newGradeList = this.gradeList.filter(x => x.id === 0);
        let count = newGradeList.length;
        for (const x of newGradeList) {
            x.studentId = this.model.id;
            this.dbGrade.addGrade(x).subscribe(
                data => {
                    count--;
                    if (count === 0) {
                        this.showSuccess();
                        this.router.navigate(['/students']);
                    }
                },
                error => {
                    this.showError();
                    return Observable.throw(error);
                }
            );
        }
    }

    getGrade() {

    }

    addGrade() {
        this.gradeModel.id = 0;
        this.gradeList.push(this.gradeModel);
        this.gradeList = [...this.gradeList]
        this.showMessage('Added grade.');
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

    loadCourseList() {
        this.dbCourse.getCourses().subscribe(data => this.courseList = data);
    }

    loadGradeList() {
        this.dbGrade.getGrade(this.editId).subscribe(data => this.gradeList = data);
    }
}
