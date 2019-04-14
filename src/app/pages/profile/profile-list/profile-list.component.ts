import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ProfileApi} from '../../../data/api/profile.api';
import {NgbModal, NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Rx';
import {XPageEditComponent} from '../../../framework/page/x-page-edit.component';
import {StudentApi} from '../../../data/api/student.api';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../../../data/model';
import { DatePipe } from '@angular/common';
import {GradeApi} from '../../../data/api/grade.api';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.scss']
})

export class ProfileListComponent extends XPageEditComponent {
    columns = [
        {prop: 'dateCreated', name: 'Date'},
        {prop: 'studentId', name: 'Student ID'},
        {prop: 'status', name: 'Status'},
        {prop: 'studentFirstName', name: 'First Name'},
        {prop: 'studentLastName', name: 'Last Name'},
        {prop: 'id', name: 'Actions'}
    ];
    rows = [];
    rowsStageInitial = [];
    rowsStageInitialCompleted = [];
    rowsStageFinal = [];
    loadingIndicator = true;
    reorderable = true;
    currentTab = 'all';
    model: Profile;
    initialProfileModel: Profile;

    @ViewChild('inputTemplate') inputTemplate: TemplateRef<any>;
    @ViewChild('initialProfileTemplate') initialProfileTemplate: TemplateRef<any>;

    constructor(private db: ProfileApi,
                private gradeDb: GradeApi,
                public activatedRoute: ActivatedRoute,
                public modalService: NgbModal) {
        super(modalService, activatedRoute, 'Profile');
        this.loadList();
    }

    tabChange($event: NgbTabChangeEvent) {
        this.currentTab = $event.nextId;
        if (this.currentTab === 'all') {
            this.loadList();
        } else if (this.currentTab === 'initial') {
            this.loadInitialList();
        } else if (this.currentTab === 'initialcompleted') {
            this.loadInitialCompletedList();
        } else if (this.currentTab === 'finalcompleted') {
            this.loadFinalList();
        }
    }

    loadList() {
        this.db.getProfiles().subscribe(data => this.rows = data);
    }

    loadInitialList() {
        this.db.getProfileByStatus('Initial').subscribe(data => this.rowsStageInitial = data);
    }

    loadInitialCompletedList() {
        this.db.getProfileByStatus('Initial Completed').subscribe(data => this.rowsStageInitialCompleted = data);
    }

    loadFinalList() {
        this.db.getProfileByStatus('Final Completed').subscribe(data => this.rowsStageFinal = data);
    }

    loadInitialProfileList() {
        let count = this.rowsStageInitial.length;
        const profiles = [];
        for (const x of this.rowsStageInitial) {
            this.gradeDb.getGrade(x.studentId).subscribe(
                data => {
                    count--;
                    x.grades = data;
                    profiles.push(x);
                    if (count === 0) {
                        this.performInitialProfile(profiles);
                    }
                }
            );
        }
    }

    performInitialProfile(list) {
        // get result
        for (const x of list) {
            let sdResult = 0;
            let dsResult = 0;
            let msResult = 0;
            const getSDGrade = x.grades.filter(c => c.courseSpecialization === 'SD').forEach(f => sdResult += Number(f.value));
            const getDSGrade = x.grades.filter(c => c.courseSpecialization === 'DS').forEach(f => dsResult += Number(f.value));
            const getMSGrade = x.grades.filter(c => c.courseSpecialization === 'MS').forEach(f => msResult += Number(f.value));

            sdResult += Number(x.sdExam);
            dsResult += Number(x.dsExam);
            msResult += Number(x.msExam);
            const result = [{'result': 'SD', 'value': sdResult},
                            {'result': 'DS', 'value': dsResult},
                            {'result': 'MS', 'value': msResult}];
            result.sort((a, b) => b.value - a.value);

            x.initialResult1 = result[0];
            x.initialResult2 = result[1];
            x.initialResult3 = result[2];
        }

        const updateList = [];
        const sdList = list.filter(sd => sd.initialResult1['result'] === 'SD');
        sdList.sort((a, b) => b.initialResult1['value'] - a.initialResult1['value']);
        let count = 0;
        for (const x of sdList) {
            count++;
            x.initialResultRank = count;
        }
        updateList.push(...sdList);

        const msList = list.filter(sd => sd.initialResult1['result'] === 'MS');
        msList.sort((a, b) => b.initialResult1['value'] - a.initialResult1['value']);
        count = 0;
        for (const x of msList) {
            count++;
            x.initialResultRank = count;
        }
        updateList.push(...msList);

        const dsList = list.filter(sd => sd.initialResult1['result'] === 'DS');
        dsList.sort((a, b) => b.initialResult1['value'] - a.initialResult1['value']);
        count = 0;
        for (const x of dsList) {
            count++;
            x.initialResultRank = count;
        }
        updateList.push(...dsList);

        count = updateList.length;
        for (const x of updateList) {
            const datePipe = new DatePipe('en-US');
            x.status = 'Initial Completed';
            x.initialDate = datePipe.transform(Date.now(), 'dd/MM/yyyy');
            x.initialResult1 = JSON.stringify(x.initialResult1);
            x.initialResult2 = JSON.stringify(x.initialResult2);
            x.initialResult3 = JSON.stringify(x.initialResult3);
            this.db.updateProfile(x).subscribe(
                data => {
                    count--;
                    if (count === 0) {
                        this.showMessage('Completed initial profiling.');
                    }
                },
                error => {
                    this.showError();
                    return Observable.throw(error);
                }
            );
        }
        this.loadInitialList();
    }

    initialProfile() {
        this.loadInitialProfileList();
    }

    finalProfile() {
        const profile = this.rowsStageInitialCompleted.filter(x => x.sdInterview !== '' && x.dsInterview !== '' && x.msInterview !== '');
        let count = profile.length;
        for (const x of profile) {
            x.status = 'Final Completed';
            x.finalResult = 'Distributed Systems';
            const datePipe = new DatePipe('en-US');
            x.finalDate = datePipe.transform(Date.now(), 'dd/MM/yyyy');
            this.db.updateProfile(x).subscribe(
                data => {
                    count--;
                    if (count === 0) {
                        this.showMessage('Completed final profiling.');
                    }
                },
                error => {
                    this.showError();
                    return Observable.throw(error);
                }
            );
        }
        this.loadInitialCompletedList();
    }

    updateProfile(value) {
        this.model = value;
        this.modalService.open(this.inputTemplate);
    }

    initialProfileResult(value) {
        this.initialProfileModel = value;
        const result1 = JSON.parse(value.initialResult1)['result'];
        const result2 = JSON.parse(value.initialResult2)['result'];
        const result3 = JSON.parse(value.initialResult3)['result'];

        this.initialProfileModel.initialResult1Label = result1 === 'SD' ? 'Software Development' :
            (result1 === 'MS' ? 'Multimedia Studies' : 'Distributed Systems');
        this.initialProfileModel.initialResult2Label = result2 === 'SD' ? 'Software Development' :
            (result2 === 'MS' ? 'Multimedia Studies' : 'Distributed Systems');
        this.initialProfileModel.initialResult3Label = result3 === 'SD' ? 'Software Development' :
            (result3 === 'MS' ? 'Multimedia Studies' : 'Distributed Systems');
        this.modalService.open(this.initialProfileTemplate);
    }

    emailResult(value) {
        this.db.emailProfile(value.studentId).subscribe(
            data => {
                this.showMessage('Email sent!');
            },
            error => {
                this.showError();
                return Observable.throw(error);
            }
        );
    }

    save() {
        this.db.updateProfile(this.model).subscribe(
            data => {
                this.showMessage('Updated profile');
                this.modalService.dismissAll();
                this.loadInitialCompletedList();
            },
            error => {
                this.showError();
                return Observable.throw(error);
            }
        );
    }
}
