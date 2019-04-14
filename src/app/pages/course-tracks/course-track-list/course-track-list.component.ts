import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseService} from '../../../data/service/base-service';
import {ProfileApi} from '../../../data/api/profile.api';
import {DatePipe} from '@angular/common';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-track-list.component.html',
    styleUrls: ['./course-track-list.component.scss']
})

export class CourseTrackListComponent {
    columns = [
        {prop: 'studentNumber', name: 'Student Number'},
        {prop: 'studentFirstName', name: 'First Name'},
        {prop: 'studentLastName', name: 'Last Name'}
    ];
    sdRows = [];
    dsRows = [];
    msRows = [];
    loadingIndicator = true;
    reorderable = true;
    dateSelect = '2019';
    currentTab = 'sd';
    currentTrack = 'Software Development'

    constructor(private db: ProfileApi) {
        this.loadList();
    }

    tabChange($event: NgbTabChangeEvent) {
        if ($event.nextId === 'sd') {
            this.currentTrack = 'Software Development';
        } else if ($event.nextId === 'ds') {
            this.currentTrack = 'Distributed Systems';
        } else if ($event.nextId === 'ms') {
            this.currentTrack = 'Multimedia Studies';
        }
        this.currentTab = $event.nextId;
        this.loadList();
    }

    loadList() {
        this.db.getProfileByResult(this.currentTrack, this.dateSelect).subscribe(data => {
            if (this.currentTab === 'sd') {
                this.sdRows = data;
            } else if (this.currentTab === 'ds') {
                this.dsRows = data;
            } else if (this.currentTab === 'ms') {
                this.msRows = data;
            }
        });
    }

    changeDate() {
        this.loadList();
    }
}
