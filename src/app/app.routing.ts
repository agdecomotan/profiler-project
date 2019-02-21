import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main.component';
import {StudentListComponent} from './pages/students/student-list/student-list.component';
import {StudentEditComponent} from './pages/students/student-edit/student-edit.component';
import {CourseTrackListComponent} from './pages/course-tracks/course-track-list/course-track-list.component';
import {ReportListComponent} from './pages/reports/report-list/report-list.component';

const routes: Routes =
[
    {
        path: '',
        component: MainComponent,
        children: [
            {path: '', redirectTo: 'students', pathMatch: 'full' },
            {path: 'students', component: StudentListComponent},
            {path: 'student-entry', component: StudentEditComponent},
            {path: 'course-tracks', component: CourseTrackListComponent},
            {path: 'reports', component: ReportListComponent}
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
