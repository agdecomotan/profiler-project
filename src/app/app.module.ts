import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
// Library
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NvD3Module} from 'ng2-nvd3';
import { NgSelectModule } from '@ng-select/ng-select';
import 'd3';
import 'nvd3'

// Framework
import {XNavComponent} from './framework/nav/x-nav.component';
import {XFooterComponent} from './framework/footer/x-footer.component';
import {XPageComponent} from './framework/page/x-page.component';

// DB
import {BaseService} from './data/service/base-service';
import {StudentApi} from './data/api/student.api';

// Pages
import {AppComponent} from './app.component';
import {MainComponent} from './pages/main.component';
import {StudentListComponent} from './pages/students/student-list/student-list.component';
import {StudentEditComponent} from './pages/students/student-edit/student-edit.component';
import {CourseTrackListComponent} from './pages/course-tracks/course-track-list/course-track-list.component';
import {ReportListComponent} from './pages/reports/report-list/report-list.component';
import {ProfileDetailComponent} from './pages/profile/profile-detail/profile-detail.component';
import {ProfileEntryComponent} from './pages/profile/profile-entry/profile-entry.component';
import {ProfileListComponent} from './pages/profile/profile-list/profile-list.component';
import {ProfileUpdateComponent} from './pages/profile/profile-update/profile-update.component';
import {AdministrationComponent} from './pages/administration/administration.component';
import {UserApi} from './data/api/user.api';
import {CourseApi} from './data/api/course.api';
import {GradeApi} from './data/api/grade.api';
import {ProfileApi} from './data/api/profile.api';
import { LoginComponent } from './pages/login/login.component';
import {AuthGuard} from './pages/login/auth-guard';
import {SettingApi} from './data/api/setting.api';

@NgModule({
  declarations: [
      AppComponent,
      MainComponent,
      XNavComponent,
      XFooterComponent,
      XPageComponent,
      StudentListComponent,
      StudentEditComponent,
      CourseTrackListComponent,
      ReportListComponent,
      ProfileDetailComponent,
      ProfileEntryComponent,
      ProfileListComponent,
      ProfileUpdateComponent,
      AdministrationComponent,
      LoginComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule ,
      NgbModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      NgxDatatableModule,
      NvD3Module,
      RouterModule,
      AppRoutingModule,
      NgSelectModule
  ],
  providers: [
      BaseService,
      StudentApi,
      UserApi,
      CourseApi,
      GradeApi,
      ProfileApi,
      SettingApi,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
