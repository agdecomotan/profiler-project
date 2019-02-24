import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseService} from '../../data/service/base-service';

@Component({
    selector: 'app-administration',
    templateUrl: './administration.component.html',
    styleUrls: ['./administration.component.scss']
})

export class AdministrationComponent {
    columns = [
        {prop: 'title', name: 'Product Name'},
        {prop: 'description', name: 'Description'},
        {prop: 'category', name: 'Category'}
    ];

    model = [
        {id: 'number', name: 'Student Number', value: ''},
        {id: 'firstName', name: 'First Name', value: ''},
        {id: 'lastName', name: 'Last Name', value: ''},
        {id: 'yearLevel', name: 'Year Level', value: ''},
        {id: 'program', name: 'Program', value: ''}
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
