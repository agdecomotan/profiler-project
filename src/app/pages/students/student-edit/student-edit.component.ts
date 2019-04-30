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
    gradeValue = [
        {grade: 1, value: 100},
        {grade: 1.25, value: 96},
        {grade: 1.5, value: 92},
        {grade: 1.75, value: 88},
        {grade: 2, value: 86},
        {grade: 2.25, value: 84},
        {grade: 2.5, value: 82},
        {grade: 2.75, value: 79},
        {grade: 3, value: 76}
    ];

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
            const gradeValue = this.gradeValue.filter(gv => gv.grade.toString() === x.value.toString())[0];
            x.studentId = this.model.id;
            x.value = gradeValue.value;
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

    addGrade() {
        const course = this.courseList.filter(x => x.id.toString() === this.gradeModel.courseId)[0];
        this.gradeModel.id = 0;
        this.gradeModel.title = course.title;
        this.gradeList.push(this.gradeModel);
        this.gradeList = [...this.gradeList]
        this.showMessage('Added grade.');
        this.gradeModel = new Grade();
    }

    validateInput(): boolean {
        let valid = true;
        if (this.model.studentNumber === undefined || this.model.studentNumber === '') {
            valid = false;
        } else if (this.model.firstName === undefined || this.model.firstName === '') {
            valid = false;
        } else if (this.model.lastName === undefined || this.model.lastName === '') {
            valid = false;
        } else if (this.model.yearLevel === undefined || this.model.yearLevel === '') {
            valid = false;
        } else if (this.model.program === undefined || this.model.program === '') {
            valid = false;
        } else if (this.model.email === undefined || this.model.email === '') {
            valid = false;
        }

        return valid;
    }

    loadCourseList() {
        this.dbCourse.getActiveCourse().subscribe(data => this.courseList = data);
    }

    loadGradeList() {
        this.dbGrade.getGrade(this.editId).subscribe(data => {
            for (const d of data) {
                const gradeValue = this.gradeValue.filter(x => x.value.toString() === d.value)[0];
                d.value = gradeValue.grade.toString();
                this.gradeList.push(d);
            }
        });
    }
}
