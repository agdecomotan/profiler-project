import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseService} from '../../../data/service/base-service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-track-list.component.html',
    styleUrls: ['./course-track-list.component.scss']
})

export class CourseTrackListComponent {
    columns = [
        {prop: 'title', name: 'Product Name'},
        {prop: 'description', name: 'Description'},
        {prop: 'category', name: 'Category'}
    ];
    rows: Observable<any>;
    loadingIndicator = true;
    reorderable = true;

    constructor(private db: BaseService) {
        this.loadList();
    }

    loadList() {
        this.rows = this.db.getProducts();
    }
}