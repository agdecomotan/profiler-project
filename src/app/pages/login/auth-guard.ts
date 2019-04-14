import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {StudentApi} from '../../data/api/student.api';

@Injectable()
export class AuthGuard {

    constructor(private router: Router,
                private db: StudentApi) {
    }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        const user =  localStorage.getItem('user');
        if (user) {
            return true;
        }  else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}