import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Course, User} from '../../data/model';
import {UserApi} from '../../data/api/user.api';
import {XPageEditComponent} from '../../framework/page/x-page-edit.component';
import {ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CourseApi} from '../../data/api/course.api';

@Component({
    selector: 'app-administration',
    templateUrl: './administration.component.html',
    styleUrls: ['./administration.component.scss']
})

export class AdministrationComponent extends XPageEditComponent implements OnInit {
    @ViewChild('actionsTemplate') actionsTemplate: TemplateRef<any>;
    disabled: boolean;

    userColumns = [];
    userRows: Observable<any>;
    userModel: User;

    courseColumns = [];
    courseRows: Observable<any>;
    courseModel: Course;

    currentTab: '';
    constructor(private userApi: UserApi,
                private courseApi: CourseApi,
                public activatedRoute: ActivatedRoute,
                public modalService: NgbModal) {
        super(modalService, activatedRoute, '');
        this.userModel = new User();
        this.courseModel = new Course();
        this.loadUserList();
        this.loadCourseList();
    }

    ngOnInit() {
        this.userColumns = [
            {prop: 'firstName', name: 'First Name'},
            {prop: 'lastName', name: 'Last Name'},
            {prop: 'id', name: 'Actions', cellTemplate: this.actionsTemplate}
        ];

        this.courseColumns = [
            {prop: 'courseNumber', name: 'Course Number'},
            {prop: 'title', name: 'Title'},
            {prop: 'id', name: 'Actions', cellTemplate: this.actionsTemplate}
        ];
    }

    tabChange($event) {
        this.currentTab = $event.nextId;
        this.disabled = true;
    }

    loadUserList() {
        this.disabled = true;
        this.userRows = this.userApi.getUsers();
    }

    loadCourseList() {
        this.disabled = true;
        this.courseRows = this.courseApi.getCourses();
    }

    delete() {
        this.confirmModal.close();
        if (this.currentTab.indexOf('ngb-tab-1') >= 0) {
            this.modelName = 'User';
            this.userApi.deleteUser(this.currentModel).subscribe(
                data => {
                    this.showDeleted();
                    this.loadUserList();
                    return true;
                },
                error => {
                    this.showError();
                    return Observable.throw(error);
                }
            );
        } else if (this.currentTab.indexOf('ngb-tab-2') >= 0) {
            this.modelName = 'Course';
            this.courseApi.deleteCourse(this.currentModel).subscribe(
                data => {
                    this.showDeleted();
                    this.loadCourseList();
                    return true;
                },
                error => {
                    this.showError();
                    return Observable.throw(error);
                }
            );
        }
    }

    new() {
        this.editMode = false;
        this.disabled = false;
        this.userModel = new User();
        this.courseModel = new Course();
    }

    edit(id) {
        this.editMode = true;
        this.disabled = false;
        if (this.currentTab.indexOf('ngb-tab-1') >= 0) {
            this.editUser(id);
        } else if (this.currentTab.indexOf('ngb-tab-2') >= 0) {
            this.editCourse(id);
        }
    }

    editUser(id) {
        this.userApi.getUser(id).subscribe(
            data => {
                this.userModel = data;
                return true;
            },
            error => {
                this.showError();
                return Observable.throw(error);
            }
        );
    }

    editCourse(id) {
        this.courseApi.getCourse(id).subscribe(
            data => {
                this.courseModel = data;
                return true;
            },
            error => {
                this.showError();
                return Observable.throw(error);
            }
        );
    }

    save() {
        if (this.currentTab.indexOf('ngb-tab-1') >= 0) {
            this.saveUser();
        } else if (this.currentTab.indexOf('ngb-tab-2') >= 0) {
            this.saveCourse();
        }
    }

    saveUser() {
        this.modelName = 'User';
        if (this.validateUserInput()) {
            if (this.editMode) {
                this.userApi.updateUser(this.userModel).subscribe(
                    data => {
                        this.showSuccess();
                        this.loadUserList();
                        return true;
                    },
                    error => {
                        this.showError();
                        return Observable.throw(error);
                    }
                );
            } else {
                this.userApi.addUser(this.userModel).subscribe(
                    data => {
                        this.showSuccess();
                        this.loadUserList();
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

    saveCourse() {
        this.modelName = 'Course';
        if (this.validateUserInput()) {
            if (this.editMode) {
                this.courseApi.updateCourse(this.courseModel).subscribe(
                    data => {
                        this.showSuccess();
                        this.loadCourseList();
                        return true;
                    },
                    error => {
                        this.showError();
                        return Observable.throw(error);
                    }
                );
            } else {
                this.courseApi.addCourse(this.courseModel).subscribe(
                    data => {
                        this.showSuccess();
                        this.loadCourseList();
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

    cancel() {
        this.disabled = true;
    }

    validateUserInput(): boolean {
        return true;
    }
}
