import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main.component';
import {StudentListComponent} from './pages/students/student-list/student-list.component';
import {StudentEditComponent} from './pages/students/student-edit/student-edit.component';

const routes: Routes =
[
    {
        path: '',
        component: MainComponent,
        children: [
            {path: '', redirectTo: 'student-list', pathMatch: 'full' },
            {path: 'student-list', component: StudentListComponent},
            {path: 'student-entry', component: StudentEditComponent}
       ]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
