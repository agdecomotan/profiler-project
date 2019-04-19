import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ProfileApi} from '../../../data/api/profile.api';
import {NgbModal, NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Rx';
import {XPageEditComponent} from '../../../framework/page/x-page-edit.component';
import {ActivatedRoute} from '@angular/router';
import {Profile} from '../../../data/model';
import {DatePipe} from '@angular/common';
import {GradeApi} from '../../../data/api/grade.api';
import {SettingApi} from '../../../data/api/setting.api';

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
    initial = true;
    profileModel: Profile;
    dsList = [];
    msList = [];
    sdList = [];
    quota = 0;
    letterSign = '';

    @ViewChild('inputTemplate') inputTemplate: TemplateRef<any>;
    @ViewChild('profileTemplate') profileTemplate: TemplateRef<any>;

    constructor(private db: ProfileApi,
                private gradeDb: GradeApi,
                private settingApi: SettingApi,
                public activatedRoute: ActivatedRoute,
                public modalService: NgbModal) {
        super(modalService, activatedRoute, 'Profile');
        this.loadList();
        this.loadSetting();
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

    loadSetting() {
        this.settingApi.getSettings().subscribe(
            data => {
                this.quota = Number(data.filter(x => x.name === 'quota')[0].value);
                this.letterSign = data.filter(x => x.name === 'lettersign')[0].value;
            },
            error => {
                this.showError();
                return Observable.throw(error);
            }
        );
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

    getResultForTrack(track, initialResult1, initialResult2, initialResult3){
        if (initialResult1['result'] === track) {
           return initialResult1['value'];
        } else if (initialResult2['result'] === track) {
            return initialResult2['value'];
        } else if (initialResult3['result'] === track) {
            return initialResult3['value'];
        }
    }

    finalProfile() {
        const list = this.rowsStageInitialCompleted.filter(x => x.sdInterview !== '' && x.dsInterview !== '' && x.msInterview !== '');
        const count = list.length;
        const quoata = 1;
        if (count === this.rowsStageInitialCompleted.length) {
            const computedList = this.computeFinal(list);
            const updateList = [];
            this.sdList = computedList.filter(sd => sd.finalResult1['result'] === 'SD');
            this.msList = computedList.filter(sd => sd.finalResult1['result'] === 'MS');
            this.dsList = computedList.filter(sd => sd.finalResult1['result'] === 'DS');
            this.applyRank();
            this.applyQuoata(1);
            this.applyRank();
            this.applyQuoata(2);
            this.saveFinal();
        } else {
            this.showMessage('Input interview result in all profiles.');
        }
    }

    applyRank() {
        let count = 0;
        this.sdList.sort((a, b) => b.finalResult1['value'] - a.finalResult1['value']);
        count = 0;
        for (const xx of this.sdList) {
            count++;
            xx.finalResultRank = count;
        }

        this.msList.sort((a, b) => b.finalResult1['value'] - a.finalResult1['value']);
        count = 0;
        for (const xx of this.msList) {
            count++;
            xx.finalResultRank = count;
        }

        this.dsList.sort((a, b) => b.finalResult1['value'] - a.finalResult1['value']);
        count = 0;
        for (const xx of this.dsList) {
            count++;
            xx.finalResultRank = count;
        }
    }

    applyQuoata(level) {
        const acceptExceedQuota = (this.dsList.length >= this.quota && this.msList.length >= this.quota && this.sdList.length >= this.quota) ? true : false;
        const quoataMs = [];
        const quoataDs = [];
        const quoataSd = [];

        let countMs = this.msList.length;
        let countDs = this.dsList.length;
        let countSd = this.sdList.length;

        if (!acceptExceedQuota) {
            if (this.dsList.length > this.quota) {
                const cutoff = this.dsList.splice(this.quota);
                this.dsList = this.dsList.splice(0, this.quota);
                for (const xx of cutoff) {
                    const final1 = xx.finalResult1;
                    const final2 = level === 1 ? xx.finalResult2 : xx.finalResult3;
                    const value = final2['result'];
                    xx.finalResult1 = final2;
                    if (level === 1) {
                        xx.finalResult2 = final1;
                    } else {
                        xx.finalResult3 = final1;
                    }

                    if (value === 'MS' && countMs < this.quota) {
                        quoataMs.push(xx);
                        countMs++;
                    } else if (value === 'SD' && countSd < this.quota) {
                        quoataSd.push(xx);
                        countSd++
                    } else {
                        xx.finalResult1 = final1;
                        if (level === 1) {
                            xx.finalResult2 = final2;
                        } else {
                            xx.finalResult3 = final2;
                        }
                        quoataDs.push(xx);
                    }
                }
            }

            if (this.msList.length > this.quota) {
                const cutoff = this.msList.splice(this.quota);
                this.msList = this.msList.splice(0, this.quota);
                for (const xx of cutoff) {
                    const final1 = xx.finalResult1;
                    const final2 = level === 1 ? xx.finalResult2 : xx.finalResult3;
                    const value = final2['result'];
                    xx.finalResult1 = final2;
                    if (level === 1) {
                        xx.finalResult2 = final1;
                    } else {
                        xx.finalResult3 = final1;
                    }

                    if (value === 'SD' && countSd < this.quota) {
                        quoataSd.push(xx);
                        countSd++;
                    } else if (value === 'DS' && countDs < this.quota) {
                        quoataDs.push(xx);
                        countDs++;
                    } else {
                        xx.finalResult1 = final1;
                        if (level === 1) {
                            xx.finalResult2 = final2;
                        } else {
                            xx.finalResult3 = final2;
                        }
                        quoataMs.push(xx);
                    }
                }
            }

            if (this.sdList.length > this.quota) {
                const cutoff = this.sdList.splice(this.quota);
                this.sdList = this.sdList.splice(0, this.quota);
                for (const xx of cutoff) {
                    const final1 = xx.finalResult1;
                    const final2 = level === 1 ? xx.finalResult2 : xx.finalResult3;
                    const value = final2['result'];
                    xx.finalResult1 = final2;
                    if (level === 1) {
                        xx.finalResult2 = final1;
                    } else {
                        xx.finalResult3 = final1;
                    }

                    if (value === 'MS' && countMs < this.quota) {
                        quoataMs.push(xx);
                        countMs++;
                    } else if (value === 'DS' && countDs < this.quota) {
                        quoataDs.push(xx);
                        countDs++;
                    } else {
                        xx.finalResult1 = final1;
                        if (level === 1) {
                            xx.finalResult2 = final2;
                        } else {
                            xx.finalResult3 = final2;
                        }
                        quoataSd.push(xx);
                    }
                }
            }

            this.sdList.push(...quoataSd);
            this.msList.push(...quoataMs);
            this.dsList.push(...quoataDs);
        }
    }

    saveFinal() {
        const finalList = [];
        finalList.push(...this.sdList);
        finalList.push(...this.dsList);
        finalList.push(...this.msList);
        let count = finalList.length;

        for (const x of finalList) {
            x.status = 'Final Completed';
            const datePipe = new DatePipe('en-US');
            x.finalDate = datePipe.transform(Date.now(), 'dd/MM/yyyy');
            x.finalResult1 = JSON.stringify(x.finalResult1);
            x.finalResult2 = JSON.stringify(x.finalResult2);
            x.finalResult3 = JSON.stringify(x.finalResult3);
            this.db.updateProfile(x).subscribe(
                data => {
                    count--;
                    if (count === 0) {
                        this.showMessage('Completed final profiling.');
                        this.loadInitialCompletedList();
                    }
                },
                error => {
                    this.showError();
                    this.loadInitialCompletedList();
                    return Observable.throw(error);
                }
            );
        }
    }

    computeFinal(list) {
        for (const x of list) {
            const result1 = JSON.parse(x.initialResult1);
            const result2 = JSON.parse(x.initialResult2);
            const result3 = JSON.parse(x.initialResult3);

            const sdResult = this.getResultForTrack('SD', result1, result2, result3) + x.sdInterview;
            const msResult = this.getResultForTrack('MS', result1, result2, result3) + x.msInterview;
            const dsResult = this.getResultForTrack('DS', result1, result2, result3) + x.dsInterview;

            const result = [{'result': 'SD', 'value': sdResult},
                {'result': 'DS', 'value': dsResult},
                {'result': 'MS', 'value': msResult}];
            result.sort((a, b) => b.value - a.value);

            x.finalResult1 = result[0];
            x.finalResult2 = result[1];
            x.finalResult3 = result[2];
        }
        return list;
    }

    updateProfile(value) {
        this.model = value;
        this.modalService.open(this.inputTemplate);
    }

    initialProfileResult(value) {
        this.initial = true;
        this.profileResult(value);
    }

    finalProfileResult(value) {
        this.initial = false;
        this.profileResult(value);
    }

    profileResult(value) {
        const result1 = JSON.parse(this.initial ? value.initialResult1 : value.finalResult1)['result'];
        const result2 = JSON.parse(this.initial ? value.initialResult2 : value.finalResult2)['result'];
        const result3 = JSON.parse(this.initial ? value.initialResult3 : value.finalResult3)['result'];
        const rank = this.initial ? value.initialResultRank : value.finalResultRank;

        this.profileModel = value;
        this.profileModel.result1Label = result1 === 'SD' ? 'Software Development' :
            (result1 === 'MS' ? 'Multimedia Studies' : 'Distributed Systems');
        this.profileModel.result2Label = result2 === 'SD' ? 'Software Development' :
            (result2 === 'MS' ? 'Multimedia Studies' : 'Distributed Systems');
        this.profileModel.result3Label = result3 === 'SD' ? 'Software Development' :
            (result3 === 'MS' ? 'Multimedia Studies' : 'Distributed Systems');
        this.profileModel.resultRankLabel = rank;
        this.modalService.open(this.profileTemplate);
    }

    emailResult(value) {
        this.db.emailProfile(value.studentId, this.letterSign).subscribe(
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
