import {Component} from '@angular/core';
import {XPageEditComponent} from '../../../framework/page/x-page-edit.component';
import {Profile} from '../../../data/model';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProfileApi} from '../../../data/api/profile.api';

@Component({
    selector: 'app-profile-entry',
    templateUrl: './profile-entry.component.html',
    styleUrls: ['./profile-entry.component.scss']
})

export class ProfileEntryComponent extends XPageEditComponent {
    model: Profile;

    constructor(private db: ProfileApi,
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
    }

    save() {
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
                        this.showSuccess();
                        this.router.navigate(['/profiles']);
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
        return true;
    }
}
