import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
// Library
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NvD3Module} from 'ng2-nvd3';
import 'd3';
import 'nvd3'

// Framework
import {XNavComponent} from './framework/nav/x-nav.component';
import {XFooterComponent} from './framework/footer/x-footer.component';
import {XPageComponent} from './framework/page/x-page.component';

// DB
import {BaseService} from './data/service/base-service';

// Pages
import {AppComponent} from './app.component';
import {MainComponent} from './pages/main.component';
import {StudentListComponent} from './pages/students/student-list/student-list.component';
import {StudentEditComponent} from './pages/students/student-edit/student-edit.component';
import {CourseTrackListComponent} from './pages/course-tracks/course-track-list/course-track-list.component';
import {ReportListComponent} from './pages/reports/report-list/report-list.component';

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
      ReportListComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule ,
      NgbModule.forRoot(),
      FormsModule,
      NgxDatatableModule,
      NvD3Module,
      RouterModule,
      AppRoutingModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
