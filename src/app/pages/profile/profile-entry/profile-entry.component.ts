import {AfterViewInit, Component} from '@angular/core';
import {XPageEditComponent} from '../../../framework/page/x-page-edit.component';
import {Profile} from '../../../data/model';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProfileApi} from '../../../data/api/profile.api';
import {StudentApi} from '../../../data/api/student.api';

@Component({
    selector: 'app-profile-entry',
    templateUrl: './profile-entry.component.html',
    styleUrls: ['./profile-entry.component.scss']
})

export class ProfileEntryComponent extends XPageEditComponent {
    model: Profile;
    studentList = [];

    constructor(private db: ProfileApi,
                private dbStudent: StudentApi,
                public activatedRoute: ActivatedRoute,
                public modalService: NgbModal,
                private router: Router) {
        super(modalService, activatedRoute, 'Profile');
        this.model = new Profile();
        if (this.editMode) {
            this.db.getProfile(this.editId).subscribe(
                data => {
                    this.model = data;
                    return true;
                },
                error => {
                    this.showError();
                    this.router.navigate(['/profiles']);
                    return Observable.throw(error);
                }
            );
        }
        this.loadStudentList();
    }

    save() {
        this.model.status = 'Initial';
        this.model.userId = '';
        this.model.msInterview = '';
        this.model.dsInterview = '';
        this.model.sdInterview = '';

        if (this.validateInput()) {
            if (this.editMode) {
                this.db.updateProfile(this.model).subscribe(
                    data => {
                        this.showSuccess();
                        this.router.navigate(['/profiles']);
                        return true;
                    },
                    error => {
                        this.showError();
                        return Observable.throw(error);
                    }
                );
            } else {
                this.db.addProfile(this.model).subscribe(
                    data => {
                        if (data['message'] === 'Object exists.') {
                            this.showMessage('Profile for the student already exists.');
                        } else {
                            this.showSuccess();
                            this.router.navigate(['/profiles']);
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

    loadStudentList() {
        this.dbStudent.getStudents().subscribe(data => this.studentList = data);
    }

    validateInput(): boolean {
        return true;
    }
}
