import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseService} from '../../../data/service/base-service';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.scss']
})

export class ProfileListComponent {
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
