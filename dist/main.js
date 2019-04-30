(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-nvd3 */ "./node_modules/ng2-nvd3/build/index.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_nvd3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _framework_nav_x_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./framework/nav/x-nav.component */ "./src/app/framework/nav/x-nav.component.ts");
/* harmony import */ var _framework_footer_x_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./framework/footer/x-footer.component */ "./src/app/framework/footer/x-footer.component.ts");
/* harmony import */ var _framework_page_x_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./framework/page/x-page.component */ "./src/app/framework/page/x-page.component.ts");
/* harmony import */ var _data_service_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data/service/base-service */ "./src/app/data/service/base-service.ts");
/* harmony import */ var _data_api_student_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data/api/student.api */ "./src/app/data/api/student.api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/main.component */ "./src/app/pages/main.component.ts");
/* harmony import */ var _pages_students_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/students/student-list/student-list.component */ "./src/app/pages/students/student-list/student-list.component.ts");
/* harmony import */ var _pages_students_student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/students/student-edit/student-edit.component */ "./src/app/pages/students/student-edit/student-edit.component.ts");
/* harmony import */ var _pages_course_tracks_course_track_list_course_track_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/course-tracks/course-track-list/course-track-list.component */ "./src/app/pages/course-tracks/course-track-list/course-track-list.component.ts");
/* harmony import */ var _pages_reports_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/reports/report-list/report-list.component */ "./src/app/pages/reports/report-list/report-list.component.ts");
/* harmony import */ var _pages_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/profile/profile-detail/profile-detail.component */ "./src/app/pages/profile/profile-detail/profile-detail.component.ts");
/* harmony import */ var _pages_profile_profile_entry_profile_entry_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/profile/profile-entry/profile-entry.component */ "./src/app/pages/profile/profile-entry/profile-entry.component.ts");
/* harmony import */ var _pages_profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/profile/profile-list/profile-list.component */ "./src/app/pages/profile/profile-list/profile-list.component.ts");
/* harmony import */ var _pages_profile_profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/profile/profile-update/profile-update.component */ "./src/app/pages/profile/profile-update/profile-update.component.ts");
/* harmony import */ var _pages_administration_administration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/administration/administration.component */ "./src/app/pages/administration/administration.component.ts");
/* harmony import */ var _data_api_user_api__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./data/api/user.api */ "./src/app/data/api/user.api.ts");
/* harmony import */ var _data_api_course_api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./data/api/course.api */ "./src/app/data/api/course.api.ts");
/* harmony import */ var _data_api_grade_api__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./data/api/grade.api */ "./src/app/data/api/grade.api.ts");
/* harmony import */ var _data_api_profile_api__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./data/api/profile.api */ "./src/app/data/api/profile.api.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_login_auth_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/login/auth-guard */ "./src/app/pages/login/auth-guard.ts");
/* harmony import */ var _data_api_setting_api__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./data/api/setting.api */ "./src/app/data/api/setting.api.ts");








// Library





// Framework



// DB


// Pages


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _pages_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"],
                _framework_nav_x_nav_component__WEBPACK_IMPORTED_MODULE_13__["XNavComponent"],
                _framework_footer_x_footer_component__WEBPACK_IMPORTED_MODULE_14__["XFooterComponent"],
                _framework_page_x_page_component__WEBPACK_IMPORTED_MODULE_15__["XPageComponent"],
                _pages_students_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_20__["StudentListComponent"],
                _pages_students_student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_21__["StudentEditComponent"],
                _pages_course_tracks_course_track_list_course_track_list_component__WEBPACK_IMPORTED_MODULE_22__["CourseTrackListComponent"],
                _pages_reports_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_23__["ReportListComponent"],
                _pages_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_24__["ProfileDetailComponent"],
                _pages_profile_profile_entry_profile_entry_component__WEBPACK_IMPORTED_MODULE_25__["ProfileEntryComponent"],
                _pages_profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_26__["ProfileListComponent"],
                _pages_profile_profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_27__["ProfileUpdateComponent"],
                _pages_administration_administration_component__WEBPACK_IMPORTED_MODULE_28__["AdministrationComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                ng2_nvd3__WEBPACK_IMPORTED_MODULE_9__["NvD3Module"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"]
            ],
            providers: [
                _data_service_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"],
                _data_api_student_api__WEBPACK_IMPORTED_MODULE_17__["StudentApi"],
                _data_api_user_api__WEBPACK_IMPORTED_MODULE_29__["UserApi"],
                _data_api_course_api__WEBPACK_IMPORTED_MODULE_30__["CourseApi"],
                _data_api_grade_api__WEBPACK_IMPORTED_MODULE_31__["GradeApi"],
                _data_api_profile_api__WEBPACK_IMPORTED_MODULE_32__["ProfileApi"],
                _data_api_setting_api__WEBPACK_IMPORTED_MODULE_35__["SettingApi"],
                _pages_login_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main.component */ "./src/app/pages/main.component.ts");
/* harmony import */ var _pages_students_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/students/student-list/student-list.component */ "./src/app/pages/students/student-list/student-list.component.ts");
/* harmony import */ var _pages_students_student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/students/student-edit/student-edit.component */ "./src/app/pages/students/student-edit/student-edit.component.ts");
/* harmony import */ var _pages_course_tracks_course_track_list_course_track_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/course-tracks/course-track-list/course-track-list.component */ "./src/app/pages/course-tracks/course-track-list/course-track-list.component.ts");
/* harmony import */ var _pages_reports_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/reports/report-list/report-list.component */ "./src/app/pages/reports/report-list/report-list.component.ts");
/* harmony import */ var _pages_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/profile/profile-detail/profile-detail.component */ "./src/app/pages/profile/profile-detail/profile-detail.component.ts");
/* harmony import */ var _pages_profile_profile_entry_profile_entry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/profile/profile-entry/profile-entry.component */ "./src/app/pages/profile/profile-entry/profile-entry.component.ts");
/* harmony import */ var _pages_profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/profile/profile-list/profile-list.component */ "./src/app/pages/profile/profile-list/profile-list.component.ts");
/* harmony import */ var _pages_profile_profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/profile/profile-update/profile-update.component */ "./src/app/pages/profile/profile-update/profile-update.component.ts");
/* harmony import */ var _pages_administration_administration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/administration/administration.component */ "./src/app/pages/administration/administration.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_login_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/login/auth-guard */ "./src/app/pages/login/auth-guard.ts");

















var routes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    {
        path: '',
        component: _pages_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        canActivate: [_pages_login_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'students', pathMatch: 'full' },
            { path: 'students', component: _pages_students_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_6__["StudentListComponent"] },
            { path: 'student-entry', component: _pages_students_student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_7__["StudentEditComponent"] },
            { path: 'course-tracks', component: _pages_course_tracks_course_track_list_course_track_list_component__WEBPACK_IMPORTED_MODULE_8__["CourseTrackListComponent"] },
            { path: 'reports', component: _pages_reports_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_9__["ReportListComponent"] },
            { path: 'profiles', component: _pages_profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_12__["ProfileListComponent"] },
            { path: 'profile-detail', component: _pages_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProfileDetailComponent"] },
            { path: 'profile-entry', component: _pages_profile_profile_entry_profile_entry_component__WEBPACK_IMPORTED_MODULE_11__["ProfileEntryComponent"] },
            { path: 'profile-update', component: _pages_profile_profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUpdateComponent"] },
            { path: 'administration', component: _pages_administration_administration_component__WEBPACK_IMPORTED_MODULE_14__["AdministrationComponent"] }
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/data/api/course.api.ts":
/*!****************************************!*\
  !*** ./src/app/data/api/course.api.ts ***!
  \****************************************/
/*! exports provided: CourseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseApi", function() { return CourseApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.api */ "./src/app/data/api/rest.api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CourseApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseApi, _super);
    function CourseApi(http) {
        var _this = _super.call(this, http) || this;
        _this.baseUrl = 'course/';
        _this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return _this;
    }
    CourseApi.prototype.getCourses = function () {
        return this.get(this.baseUrl + 'get.php');
    };
    CourseApi.prototype.getCourse = function (id) {
        return this.get(this.baseUrl + 'get.php?id=' + id);
    };
    CourseApi.prototype.getActiveCourse = function () {
        return this.get(this.baseUrl + 'get.php?status=true');
    };
    CourseApi.prototype.addCourse = function (object) {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    };
    CourseApi.prototype.updateCourse = function (object) {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    };
    CourseApi.prototype.deleteCourse = function (object) {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    };
    CourseApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CourseApi);
    return CourseApi;
}(_rest_api__WEBPACK_IMPORTED_MODULE_2__["RestApi"]));



/***/ }),

/***/ "./src/app/data/api/grade.api.ts":
/*!***************************************!*\
  !*** ./src/app/data/api/grade.api.ts ***!
  \***************************************/
/*! exports provided: GradeApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeApi", function() { return GradeApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.api */ "./src/app/data/api/rest.api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GradeApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GradeApi, _super);
    function GradeApi(http) {
        var _this = _super.call(this, http) || this;
        _this.baseUrl = 'grade/';
        _this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return _this;
    }
    GradeApi.prototype.getGrades = function () {
        return this.get(this.baseUrl + 'get.php');
    };
    GradeApi.prototype.getGrade = function (id) {
        return this.get(this.baseUrl + 'get.php?id=' + id);
    };
    GradeApi.prototype.getSDGrade = function (id) {
        return this.get(this.baseUrl + 'get.php?specialization=SD&id=' + id);
    };
    GradeApi.prototype.addGrade = function (object) {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    };
    GradeApi.prototype.updateGrade = function (object) {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    };
    GradeApi.prototype.deleteGrade = function (object) {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    };
    GradeApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GradeApi);
    return GradeApi;
}(_rest_api__WEBPACK_IMPORTED_MODULE_2__["RestApi"]));



/***/ }),

/***/ "./src/app/data/api/profile.api.ts":
/*!*****************************************!*\
  !*** ./src/app/data/api/profile.api.ts ***!
  \*****************************************/
/*! exports provided: ProfileApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileApi", function() { return ProfileApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.api */ "./src/app/data/api/rest.api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ProfileApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileApi, _super);
    function ProfileApi(http) {
        var _this = _super.call(this, http) || this;
        _this.baseUrl = 'profile/';
        _this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return _this;
    }
    ProfileApi.prototype.getProfiles = function () {
        return this.get(this.baseUrl + 'get.php');
    };
    ProfileApi.prototype.getProfile = function (id) {
        return this.get(this.baseUrl + 'get.php?id=' + id);
    };
    ProfileApi.prototype.emailProfile = function (id, sign) {
        return this.get(this.baseUrl + 'email.php?id=' + id + '&sign=' + sign);
    };
    ProfileApi.prototype.getProfileByStatus = function (status) {
        return this.get(this.baseUrl + 'get.php?status=' + status);
    };
    ProfileApi.prototype.getProfileByResult = function (result, finalDate) {
        return this.get(this.baseUrl + 'get.php?result=' + result + '&finalDate=' + finalDate);
    };
    ProfileApi.prototype.addProfile = function (object) {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    };
    ProfileApi.prototype.updateProfile = function (object) {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    };
    ProfileApi.prototype.deleteProfile = function (object) {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    };
    ProfileApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProfileApi);
    return ProfileApi;
}(_rest_api__WEBPACK_IMPORTED_MODULE_2__["RestApi"]));



/***/ }),

/***/ "./src/app/data/api/rest.api.ts":
/*!**************************************!*\
  !*** ./src/app/data/api/rest.api.ts ***!
  \**************************************/
/*! exports provided: RestApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApi", function() { return RestApi; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var RestApi = /** @class */ (function () {
    function RestApi(http) {
        this.http = http;
    }
    RestApi.prototype.get = function (apiUrl, options) {
        return this.http.get(RestApi.API_URL + apiUrl, options);
    };
    RestApi.prototype.getUrl = function (apiUrl, options) {
        return this.http.get(apiUrl, options);
    };
    RestApi.prototype.delete = function (apiUrl, options) {
        return this.http.delete(RestApi.API_URL + apiUrl, options);
    };
    RestApi.prototype.post = function (apiUrl, data, options) {
        return this.http.post(RestApi.API_URL + apiUrl, data, options);
    };
    RestApi.prototype.put = function (apiUrl, data, options) {
        return this.http.put(RestApi.API_URL + apiUrl, data, options);
    };
    RestApi.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    return RestApi;
}());



/***/ }),

/***/ "./src/app/data/api/setting.api.ts":
/*!*****************************************!*\
  !*** ./src/app/data/api/setting.api.ts ***!
  \*****************************************/
/*! exports provided: SettingApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingApi", function() { return SettingApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.api */ "./src/app/data/api/rest.api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SettingApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SettingApi, _super);
    function SettingApi(http) {
        var _this = _super.call(this, http) || this;
        _this.baseUrl = 'setting/';
        _this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return _this;
    }
    SettingApi.prototype.getSettings = function () {
        return this.get(this.baseUrl + 'get.php');
    };
    SettingApi.prototype.getSetting = function (name) {
        return this.get(this.baseUrl + 'get.php?name=' + name);
    };
    SettingApi.prototype.addSetting = function (object) {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    };
    SettingApi.prototype.updateSetting = function (object) {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    };
    SettingApi.prototype.deleteSetting = function (object) {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    };
    SettingApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SettingApi);
    return SettingApi;
}(_rest_api__WEBPACK_IMPORTED_MODULE_2__["RestApi"]));



/***/ }),

/***/ "./src/app/data/api/student.api.ts":
/*!*****************************************!*\
  !*** ./src/app/data/api/student.api.ts ***!
  \*****************************************/
/*! exports provided: StudentApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentApi", function() { return StudentApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rest_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.api */ "./src/app/data/api/rest.api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var StudentApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentApi, _super);
    function StudentApi(http) {
        var _this = _super.call(this, http) || this;
        _this.baseUrl = 'student/';
        _this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return _this;
    }
    StudentApi.prototype.getStudents = function () {
        return this.get(this.baseUrl + 'get.php');
    };
    StudentApi.prototype.getStudent = function (id) {
        return this.get(this.baseUrl + 'get.php?id=' + id);
    };
    StudentApi.prototype.addStudent = function (object) {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    };
    StudentApi.prototype.updateStudent = function (object) {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    };
    StudentApi.prototype.deleteStudent = function (object) {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    };
    StudentApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StudentApi);
    return StudentApi;
}(_rest_api__WEBPACK_IMPORTED_MODULE_2__["RestApi"]));



/***/ }),

/***/ "./src/app/data/api/user.api.ts":
/*!**************************************!*\
  !*** ./src/app/data/api/user.api.ts ***!
  \**************************************/
/*! exports provided: UserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.api */ "./src/app/data/api/rest.api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserApi, _super);
    function UserApi(http) {
        var _this = _super.call(this, http) || this;
        _this.baseUrl = 'user/';
        _this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return _this;
    }
    UserApi.prototype.getUsers = function () {
        return this.get(this.baseUrl + 'get.php');
    };
    UserApi.prototype.getUser = function (id) {
        return this.get(this.baseUrl + 'get.php?id=' + id);
    };
    UserApi.prototype.login = function (username, password) {
        return this.get(this.baseUrl + 'login.php?username=' + username + '&password=' + password);
    };
    UserApi.prototype.addUser = function (object) {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    };
    UserApi.prototype.updateUser = function (object) {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    };
    UserApi.prototype.deleteUser = function (object) {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    };
    UserApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserApi);
    return UserApi;
}(_rest_api__WEBPACK_IMPORTED_MODULE_2__["RestApi"]));



/***/ }),

/***/ "./src/app/data/model.ts":
/*!*******************************!*\
  !*** ./src/app/data/model.ts ***!
  \*******************************/
/*! exports provided: Student, Course, Setting, Grade, User, Profile, Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Setting", function() { return Setting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grade", function() { return Grade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());

var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());

var Setting = /** @class */ (function () {
    function Setting() {
    }
    return Setting;
}());

var Grade = /** @class */ (function () {
    function Grade() {
    }
    return Grade;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());

var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    return Configuration;
}());



/***/ }),

/***/ "./src/app/data/service/base-service.ts":
/*!**********************************************!*\
  !*** ./src/app/data/service/base-service.ts ***!
  \**********************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BaseService = /** @class */ (function () {
    function BaseService(http, router) {
        this.http = http;
        this.router = router;
        this.jsonOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.apiURL = 'https://imjustpureblood.ml/profiler-api/';
    }
    // Student
    BaseService.prototype.getStudents = function (value) {
        var url = this.apiURL + 'student/get.php';
        if (value) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                .set('id', value);
            return this.http.get(url, { params: params });
        }
        else {
            return this.http.get(url);
        }
    };
    BaseService.prototype.updateStudent = function (value) {
        var url = this.apiURL + 'student/update.php';
        return this.http.post(url, value);
    };
    BaseService.prototype.addStudent = function (value) {
        var url = this.apiURL + 'student/add.php';
        return this.http.post(url, value, this.jsonOptions);
    };
    BaseService.prototype.deleteProduct = function (value) {
        var url = this.apiURL + 'api/product/delete.php';
        return this.http.post(url, value);
    };
    BaseService.prototype.getProducts = function (value) {
        return null;
    };
    BaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/framework/footer/x-footer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/framework/footer/x-footer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/framework/footer/x-footer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/framework/footer/x-footer.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 20px;\n  background: #336699;\n  display: flex;\n  position: fixed;\n  width: 100%;\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWV3b3JrL2Zvb3Rlci9DOlxcVXNlcnNcXDAwMzU3XFxEb2N1bWVudHNcXERvY3VtZW50c1xcTUlTXFxUaGVzaXNcXHByb2ZpbGVyLXByb2plY3Qvc3JjXFxhcHBcXGZyYW1ld29ya1xcZm9vdGVyXFx4LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZnJhbWV3b3JrL2Zvb3Rlci9DOlxcVXNlcnNcXDAwMzU3XFxEb2N1bWVudHNcXERvY3VtZW50c1xcTUlTXFxUaGVzaXNcXHByb2ZpbGVyLXByb2plY3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQVk7RUFDWixtQkNKdUI7RURLdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZnJhbWV3b3JrL2Zvb3Rlci94LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50XCI7XHJcblxyXG46aG9zdHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogJHgtZGVmYXVsdC1jb2xvcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcbn0iLCIkeC1kZWZhdWx0LWNvbG9yOiAjMzM2Njk5OyJdfQ== */"

/***/ }),

/***/ "./src/app/framework/footer/x-footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/framework/footer/x-footer.component.ts ***!
  \********************************************************/
/*! exports provided: XFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XFooterComponent", function() { return XFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XFooterComponent = /** @class */ (function () {
    function XFooterComponent() {
    }
    XFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./x-footer.component.html */ "./src/app/framework/footer/x-footer.component.html"),
            styles: [__webpack_require__(/*! ./x-footer.component.scss */ "./src/app/framework/footer/x-footer.component.scss")]
        })
    ], XFooterComponent);
    return XFooterComponent;
}());



/***/ }),

/***/ "./src/app/framework/nav/x-nav.component.html":
/*!****************************************************!*\
  !*** ./src/app/framework/nav/x-nav.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #dialog let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-body\">\r\n    <p>Are you sure you want to logout?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"logout()\">Confirm</button>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Cancel</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<nav class=\"navbar navbar-expand-lg\" color-on-scroll=\"300\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-translate\">\r\n      <a class=\"navbar-brand\">Track Profiler</a>\r\n      <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n        <span class=\"navbar-toggler-bar\"></span>\r\n        <span class=\"navbar-toggler-bar\"></span>\r\n        <span class=\"navbar-toggler-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a href=\"#\" class=\"nav-link\" routerLink=\"/profiles\"><i class=\"nc-icon nc-circle-10\"></i>Profile</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#\" class=\"nav-link\" routerLink=\"/students\"><i class=\"nc-icon nc-single-02\"></i>Student</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#\" class=\"nav-link\" routerLink=\"/course-tracks\"><i class=\"nc-icon nc-paper\"></i>Course Track</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#\" class=\"nav-link\" routerLink=\"/reports\"><i class=\"nc-icon nc-layout-11\"></i>Reports</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#\" class=\"nav-link\" routerLink=\"/administration\"><i class=\"nc-icon nc-settings\"></i>Administration</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"confirmLogout(dialog)\"><i class=\"nc-icon nc-button-power\"></i></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/framework/nav/x-nav.component.scss":
/*!****************************************************!*\
  !*** ./src/app/framework/nav/x-nav.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background: #336699; }\n\n.navbar .navbar-brand,\n.navbar .navbar-nav .nav-item .nav-link {\n  color: #ffffff; }\n\n.navbar .navbar-toggler .navbar-toggler-bar {\n  background: #ffffff; }\n\n.nav-item, .navbar-brand {\n  cursor: pointer; }\n\n.navbar-brand {\n  cursor: context-menu; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWV3b3JrL25hdi9DOlxcVXNlcnNcXDAwMzU3XFxEb2N1bWVudHNcXERvY3VtZW50c1xcTUlTXFxUaGVzaXNcXHByb2ZpbGVyLXByb2plY3Qvc3JjXFxhcHBcXGZyYW1ld29ya1xcbmF2XFx4LW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZnJhbWV3b3JrL25hdi9DOlxcVXNlcnNcXDAwMzU3XFxEb2N1bWVudHNcXERvY3VtZW50c1xcTUlTXFxUaGVzaXNcXHByb2ZpbGVyLXByb2plY3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0h1QixFQUFBOztBRE16Qjs7RUFFRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZnJhbWV3b3JrL25hdi94LW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50XCI7XHJcblxyXG4ubmF2YmFye1xyXG4gIGJhY2tncm91bmQ6ICR4LWRlZmF1bHQtY29sb3I7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZCxcclxuLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5re1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItYmFye1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSwgLm5hdmJhci1icmFuZHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiJHgtZGVmYXVsdC1jb2xvcjogIzMzNjY5OTsiXX0= */"

/***/ }),

/***/ "./src/app/framework/nav/x-nav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/framework/nav/x-nav.component.ts ***!
  \**************************************************/
/*! exports provided: XNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XNavComponent", function() { return XNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var XNavComponent = /** @class */ (function () {
    function XNavComponent(element, modalService, router) {
        this.element = element;
        this.modalService = modalService;
        this.router = router;
        //public location: Location, private element: ElementRef, private modalService: NgbModal
        this.sidebarVisible = false;
    }
    XNavComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    XNavComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    XNavComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    XNavComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    XNavComponent.prototype.confirmLogout = function (dialog) {
        this.confirmModal = this.modalService.open(dialog);
    };
    XNavComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
        this.confirmModal.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], XNavComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], XNavComponent.prototype, "searchMobileEnabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], XNavComponent.prototype, "searchTemplate", void 0);
    XNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./x-nav.component.html */ "./src/app/framework/nav/x-nav.component.html"),
            styles: [__webpack_require__(/*! ./x-nav.component.scss */ "./src/app/framework/nav/x-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], XNavComponent);
    return XNavComponent;
}());



/***/ }),

/***/ "./src/app/framework/page/x-page-edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/framework/page/x-page-edit.component.ts ***!
  \*********************************************************/
/*! exports provided: XPageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPageEditComponent", function() { return XPageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XPageEditComponent = /** @class */ (function () {
    function XPageEditComponent(modalService, activatedRoute, name) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.name = name;
        this.editMode = false;
        this.editId = '';
        this.reorderable = true;
        this.modelName = '';
        this.pageTitle = '';
        this.editId = this.activatedRoute.snapshot.queryParams['id'];
        this.editMode = this.editId !== undefined ? true : false;
        this.modelName = name;
        this.pageTitle = this.editMode ? this.modelName + ' Edit' : this.modelName + ' Entry';
    }
    XPageEditComponent.prototype.showSuccess = function () {
        this.showMessage(this.editMode ? this.modelName + ' updated successfully.' : this.modelName + ' added successfully.');
    };
    XPageEditComponent.prototype.showDeleted = function () {
        this.showMessage(this.modelName + ' deleted successfully.');
    };
    XPageEditComponent.prototype.showValidationError = function () {
        this.showMessage('Error: Some fields are empty.');
    };
    XPageEditComponent.prototype.showError = function () {
        this.showMessage('Error encountered.');
    };
    XPageEditComponent.prototype.showMessage = function (message) {
        this.alertMessage = message;
        this.showDialog();
    };
    XPageEditComponent.prototype.showDialog = function () {
        this.modalService.open(this.alertTemplate);
    };
    XPageEditComponent.prototype.confirmDelete = function (value, dialog) {
        this.confirmModal = this.modalService.open(dialog);
        this.currentModel = value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionsTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], XPageEditComponent.prototype, "actionsTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alertTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], XPageEditComponent.prototype, "alertTemplate", void 0);
    return XPageEditComponent;
}());



/***/ }),

/***/ "./src/app/framework/page/x-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/framework/page/x-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"header-panel\">\r\n        <h3>{{headerText}}</h3>\r\n        <div class=\"header-control\">\r\n            <ng-container [ngTemplateOutlet]=\"headerPanel\"></ng-container>\r\n        </div>\r\n    </div>\r\n    <ng-container [ngTemplateOutlet]=\"contentPanel\"></ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/framework/page/x-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/framework/page/x-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 87%;\n  display: flex;\n  overflow: auto; }\n\n.header-panel {\n  display: flex; }\n\n.header-control {\n  margin-left: auto;\n  padding: 20px 0 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWV3b3JrL3BhZ2UvQzpcXFVzZXJzXFwwMDM1N1xcRG9jdW1lbnRzXFxEb2N1bWVudHNcXE1JU1xcVGhlc2lzXFxwcm9maWxlci1wcm9qZWN0L3NyY1xcYXBwXFxmcmFtZXdvcmtcXHBhZ2VcXHgtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZyYW1ld29yay9wYWdlL3gtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIGhlaWdodDogODclO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXItcGFuZWx7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmhlYWRlci1jb250cm9se1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/framework/page/x-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/framework/page/x-page.component.ts ***!
  \****************************************************/
/*! exports provided: XPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPageComponent", function() { return XPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XPageComponent = /** @class */ (function () {
    function XPageComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], XPageComponent.prototype, "headerPanel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], XPageComponent.prototype, "contentPanel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], XPageComponent.prototype, "headerText", void 0);
    XPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./x-page.component.html */ "./src/app/framework/page/x-page.component.html"),
            styles: [__webpack_require__(/*! ./x-page.component.scss */ "./src/app/framework/page/x-page.component.scss")]
        })
    ], XPageComponent);
    return XPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/administration/administration.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/administration/administration.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page [headerPanel]=\"headerPanel\" [contentPanel]=\"contentPanel\" [headerText]=\"'Administration'\"></app-page>\r\n<ng-template #headerPanel>\r\n    <button type=\"button\" *ngIf=\"currentTab == 'user-tab' || currentTab == 'course-tab'\" [disabled]=\"!disabled\" class=\"btn btn-secondary\" (click)=\"new()\">New</button>\r\n    <button type=\"button\" *ngIf=\"currentTab == 'user-tab' || currentTab == 'course-tab' || currentTab == 'config-tab'\" [disabled]=\"disabled\" class=\"btn btn-secondary\" (click)=\"save()\">Save</button>\r\n    <button type=\"button\" *ngIf=\"currentTab == 'user-tab' || currentTab == 'course-tab'\" [disabled]=\"disabled\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\r\n</ng-template>\r\n\r\n<ng-template #contentPanel>\r\n    <ngb-tabset [justify]=\"'left'\" (tabChange)=\"tabChange($event)\">\r\n        <ngb-tab title=\"Configuration\" id=\"config-tab\">\r\n            <ng-template ngbTabContent >\r\n                <div class=\"items-panel\">\r\n                    <div>\r\n                        <label>Quota</label>\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"quota.value\" placeholder=\"Quota\">\r\n                    </div>\r\n                    <div>\r\n                        <label>Letter Sign</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"letterSign.value\" placeholder=\"Letter Sign\">\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Users\" id=\"user-tab\">\r\n            <ng-template ngbTabContent>\r\n                <div class=\"content-panel\">\r\n                    <div class=\"items-panel\">\r\n                        <div>\r\n                            <label>First Name</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"userModel.firstName\" placeholder=\"First Name\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Last Name</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"userModel.lastName\" placeholder=\"Last Name\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Position</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"userModel.position\" placeholder=\"Position\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Email</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" type=\"email\" [(ngModel)]=\"userModel.email\" placeholder=\"Email\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Username</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"userModel.username\" placeholder=\"Username\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Password</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" type=\"password\" [(ngModel)]=\"userModel.password\" placeholder=\"Password\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"items-panel\">\r\n                        <ngx-datatable\r\n                                class=\"bootstrap\"\r\n                                [rows]=\"userRows | async\"\r\n                                [loadingIndicator]=\"true\"\r\n                                [columns]=\"userColumns\"\r\n                                [columnMode]=\"'force'\"\r\n                                [limit]=\"10\"\r\n                                [rowHeight]=\"'auto'\"\r\n                                [headerHeight]=\"40\"\r\n                                [footerHeight]=\"40\">\r\n                        </ngx-datatable>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Courses\" id=\"course-tab\">\r\n            <ng-template ngbTabContent >\r\n                <div class=\"content-panel\">\r\n                    <div class=\"items-panel\">\r\n                        <div>\r\n                            <label>Course Number</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"courseModel.courseNumber\" placeholder=\"Course Number\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Title</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"courseModel.title\" placeholder=\"Title\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Specialization</label>\r\n                            <select [disabled]=\"disabled\" [(ngModel)]='courseModel.specialization' class=\"form-control\" placeholder=\"Specialization\">\r\n                                <option value=\"\" disabled selected>Specialization</option>\r\n                                <option value=\"SD\">Software Development</option>\r\n                                <option value=\"MS\">Multimedia Studies</option>\r\n                                <option value=\"DS\">Distributed Systems</option>\r\n                            </select>\r\n                        </div>\r\n                        <div>\r\n                            <label>Credit</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"courseModel.credit\" placeholder=\"Credit\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Active</label>\r\n                            <select [disabled]=\"disabled\" [(ngModel)]='courseModel.active' class=\"form-control\" placeholder=\"Active\">\r\n                                <option value=\"\" disabled selected>Active</option>\r\n                                <option value=\"true\">Yes</option>\r\n                                <option value=\"false\">False</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"items-panel\">\r\n                        <ngx-datatable\r\n                                class=\"bootstrap\"\r\n                                [rows]=\"courseRows | async\"\r\n                                [loadingIndicator]=\"true\"\r\n                                [columns]=\"courseColumns\"\r\n                                [columnMode]=\"'force'\"\r\n                                [limit]=\"10\"\r\n                                [rowHeight]=\"'auto'\"\r\n                                [headerHeight]=\"40\"\r\n                                [footerHeight]=\"40\">\r\n                        </ngx-datatable>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</ng-template>\r\n\r\n<ng-template #dialog let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete selected data?</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"delete()\">Confirm</button>\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Cancel</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #actionsTemplate class=\"row-actions\" let-row=\"row\" let-value=\"value\">\r\n    <button md-icon-button [disabled]=\"!disabled\" (click)=\"edit(row.id)\">\r\n        <i class=\"fa fa-edit\"></i>\r\n    </button>\r\n    <button md-icon-button [disabled]=\"!disabled\" (click)=\"confirmDelete(row, dialog)\">\r\n        <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n</ng-template>\r\n\r\n<ng-template #alertTemplate let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>{{alertMessage}}</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">OK</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/administration/administration.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/administration/administration.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYXRpb24vQzpcXFVzZXJzXFwwMDM1N1xcRG9jdW1lbnRzXFxEb2N1bWVudHNcXE1JU1xcVGhlc2lzXFxwcm9maWxlci1wcm9qZWN0L3NyY1xcYXBwXFxwYWdlc1xcYWRtaW5pc3RyYXRpb25cXGFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbmlzdHJhdGlvbi9hZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/administration/administration.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/administration/administration.component.ts ***!
  \******************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _data_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/model */ "./src/app/data/model.ts");
/* harmony import */ var _data_api_user_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/api/user.api */ "./src/app/data/api/user.api.ts");
/* harmony import */ var _framework_page_x_page_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/page/x-page-edit.component */ "./src/app/framework/page/x-page-edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _data_api_course_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/api/course.api */ "./src/app/data/api/course.api.ts");
/* harmony import */ var _data_api_setting_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/api/setting.api */ "./src/app/data/api/setting.api.ts");










var AdministrationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdministrationComponent, _super);
    function AdministrationComponent(userApi, courseApi, settingApi, activatedRoute, modalService) {
        var _this = _super.call(this, modalService, activatedRoute, '') || this;
        _this.userApi = userApi;
        _this.courseApi = courseApi;
        _this.settingApi = settingApi;
        _this.activatedRoute = activatedRoute;
        _this.modalService = modalService;
        _this.userColumns = [];
        _this.courseColumns = [];
        _this.currentTab = 'config-tab';
        _this.userModel = new _data_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        _this.courseModel = new _data_model__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        _this.quota = new _data_model__WEBPACK_IMPORTED_MODULE_3__["Setting"]();
        _this.letterSign = new _data_model__WEBPACK_IMPORTED_MODULE_3__["Setting"]();
        _this.loadUserList();
        _this.loadCourseList();
        _this.loadSetting();
        return _this;
    }
    AdministrationComponent.prototype.ngOnInit = function () {
        this.userColumns = [
            { prop: 'firstName', name: 'First Name' },
            { prop: 'lastName', name: 'Last Name' },
            { prop: 'id', name: 'Actions', cellTemplate: this.actionsTemplate }
        ];
        this.courseColumns = [
            { prop: 'courseNumber', name: 'Course Number' },
            { prop: 'title', name: 'Title' },
            { prop: 'id', name: 'Actions', cellTemplate: this.actionsTemplate }
        ];
    };
    AdministrationComponent.prototype.tabChange = function ($event) {
        this.currentTab = $event.nextId;
        this.disabled = true;
        if (this.currentTab === 'config-tab') {
            this.disabled = false;
        }
    };
    AdministrationComponent.prototype.loadUserList = function () {
        this.disabled = true;
        this.userRows = this.userApi.getUsers();
    };
    AdministrationComponent.prototype.loadCourseList = function () {
        this.disabled = true;
        this.courseRows = this.courseApi.getCourses();
    };
    AdministrationComponent.prototype.loadSetting = function () {
        var _this = this;
        this.disabled = false;
        this.settingApi.getSettings().subscribe(function (data) {
            _this.quota = data.filter(function (x) { return x.name === 'quota'; })[0];
            _this.letterSign = data.filter(function (x) { return x.name === 'lettersign'; })[0];
        }, function (error) {
            _this.showError();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    AdministrationComponent.prototype.delete = function () {
        var _this = this;
        this.confirmModal.close();
        if (this.currentTab.indexOf('user-tab') >= 0) {
            this.modelName = 'User';
            this.userApi.deleteUser(this.currentModel).subscribe(function (data) {
                _this.showDeleted();
                _this.loadUserList();
                return true;
            }, function (error) {
                _this.showError();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
            });
        }
        else if (this.currentTab.indexOf('course-tab') >= 0) {
            this.modelName = 'Course';
            this.courseApi.deleteCourse(this.currentModel).subscribe(function (data) {
                _this.showDeleted();
                _this.loadCourseList();
                return true;
            }, function (error) {
                _this.showError();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
            });
        }
    };
    AdministrationComponent.prototype.new = function () {
        this.editMode = false;
        this.disabled = false;
        this.userModel = new _data_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.courseModel = new _data_model__WEBPACK_IMPORTED_MODULE_3__["Course"]();
    };
    AdministrationComponent.prototype.edit = function (id) {
        this.editMode = true;
        this.disabled = false;
        if (this.currentTab.indexOf('user-tab') >= 0) {
            this.editUser(id);
        }
        else if (this.currentTab.indexOf('course-tab') >= 0) {
            this.editCourse(id);
        }
    };
    AdministrationComponent.prototype.editUser = function (id) {
        var _this = this;
        this.userApi.getUser(id).subscribe(function (data) {
            _this.userModel = data;
            return true;
        }, function (error) {
            _this.showError();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    AdministrationComponent.prototype.editCourse = function (id) {
        var _this = this;
        this.courseApi.getCourse(id).subscribe(function (data) {
            _this.courseModel = data;
            return true;
        }, function (error) {
            _this.showError();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    AdministrationComponent.prototype.save = function () {
        if (this.currentTab.indexOf('user-tab') >= 0) {
            this.saveUser();
        }
        else if (this.currentTab.indexOf('course-tab') >= 0) {
            this.saveCourse();
        }
        else if (this.currentTab.indexOf('config-tab') >= 0) {
            this.saveConfig();
        }
    };
    AdministrationComponent.prototype.saveConfig = function () {
        var _this = this;
        var configCount = 2;
        this.settingApi.updateSetting(this.quota).subscribe(function (data) {
            configCount--;
            if (configCount === 0) {
                _this.showMessage('Updated configuration.');
            }
            return true;
        }, function (error) {
            _this.showError();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
        this.settingApi.updateSetting(this.letterSign).subscribe(function (data) {
            configCount--;
            if (configCount === 0) {
                _this.showMessage('Updated configuration.');
            }
            return true;
        }, function (error) {
            _this.showError();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    AdministrationComponent.prototype.saveUser = function () {
        var _this = this;
        this.modelName = 'User';
        if (this.validateUserInput()) {
            if (this.editMode) {
                this.userApi.updateUser(this.userModel).subscribe(function (data) {
                    _this.showSuccess();
                    _this.loadUserList();
                    return true;
                }, function (error) {
                    _this.showError();
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
                });
            }
            else {
                this.userApi.addUser(this.userModel).subscribe(function (data) {
                    _this.showSuccess();
                    _this.loadUserList();
                    return true;
                }, function (error) {
                    _this.showError();
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
                });
            }
        }
        else {
            this.showValidationError();
        }
    };
    AdministrationComponent.prototype.saveCourse = function () {
        var _this = this;
        this.modelName = 'Course';
        if (this.validateUserInput()) {
            if (this.editMode) {
                this.courseApi.updateCourse(this.courseModel).subscribe(function (data) {
                    _this.showSuccess();
                    _this.loadCourseList();
                    return true;
                }, function (error) {
                    _this.showError();
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
                });
            }
            else {
                this.courseApi.addCourse(this.courseModel).subscribe(function (data) {
                    _this.showSuccess();
                    _this.loadCourseList();
                    return true;
                }, function (error) {
                    _this.showError();
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
                });
            }
        }
        else {
            this.showValidationError();
        }
    };
    AdministrationComponent.prototype.cancel = function () {
        this.disabled = true;
    };
    AdministrationComponent.prototype.validateUserInput = function () {
        return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionsTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AdministrationComponent.prototype, "actionsTemplate", void 0);
    AdministrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-administration',
            template: __webpack_require__(/*! ./administration.component.html */ "./src/app/pages/administration/administration.component.html"),
            styles: [__webpack_require__(/*! ./administration.component.scss */ "./src/app/pages/administration/administration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_api_user_api__WEBPACK_IMPORTED_MODULE_4__["UserApi"],
            _data_api_course_api__WEBPACK_IMPORTED_MODULE_8__["CourseApi"],
            _data_api_setting_api__WEBPACK_IMPORTED_MODULE_9__["SettingApi"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], AdministrationComponent);
    return AdministrationComponent;
}(_framework_page_x_page_edit_component__WEBPACK_IMPORTED_MODULE_5__["XPageEditComponent"]));



/***/ }),

/***/ "./src/app/pages/course-tracks/course-track-list/course-track-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/course-tracks/course-track-list/course-track-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page [headerPanel]=\"headerPanel\" [contentPanel]=\"contentPanel\" [headerText]=\"'Course Track'\"></app-page>\r\n<ng-template #headerPanel>\r\n    <select  [(ngModel)]='dateSelect' (change)=\"changeDate()\" class=\"form-control\">\r\n        <option value=\"\" disabled selected>Year Admitted to Track</option>\r\n        <option value=\"2018\">2018</option>\r\n        <option value=\"2019\">2019</option>\r\n    </select>\r\n</ng-template>\r\n\r\n<ng-template #contentPanel>\r\n    <ngb-tabset [justify]=\"'left'\" (tabChange)=\"tabChange($event)\">\r\n        <ngb-tab title=\"Software Development\" id=\"sd\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"sdRows\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Distributed Systems\" id=\"ds\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"dsRows\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Multimedia Studies\" id=\"ms\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"msRows\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/course-tracks/course-track-list/course-track-list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/course-tracks/course-track-list/course-track-list.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXJzZS10cmFja3MvY291cnNlLXRyYWNrLWxpc3QvY291cnNlLXRyYWNrLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/course-tracks/course-track-list/course-track-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/course-tracks/course-track-list/course-track-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CourseTrackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseTrackListComponent", function() { return CourseTrackListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_api_profile_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/api/profile.api */ "./src/app/data/api/profile.api.ts");



var CourseTrackListComponent = /** @class */ (function () {
    function CourseTrackListComponent(db) {
        this.db = db;
        this.columns = [
            { prop: 'studentNumber', name: 'Student Number' },
            { prop: 'studentFirstName', name: 'First Name' },
            { prop: 'studentLastName', name: 'Last Name' }
        ];
        this.sdRows = [];
        this.dsRows = [];
        this.msRows = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.dateSelect = '2019';
        this.currentTab = 'sd';
        this.currentTrack = 'Software Development';
        this.loadList();
    }
    CourseTrackListComponent.prototype.tabChange = function ($event) {
        if ($event.nextId === 'sd') {
            this.currentTrack = 'SD';
        }
        else if ($event.nextId === 'ds') {
            this.currentTrack = 'DS';
        }
        else if ($event.nextId === 'ms') {
            this.currentTrack = 'MS';
        }
        this.currentTab = $event.nextId;
        this.loadList();
    };
    CourseTrackListComponent.prototype.loadList = function () {
        var _this = this;
        this.db.getProfileByResult(this.currentTrack, this.dateSelect).subscribe(function (data) {
            if (_this.currentTab === 'sd') {
                _this.sdRows = data;
            }
            else if (_this.currentTab === 'ds') {
                _this.dsRows = data;
            }
            else if (_this.currentTab === 'ms') {
                _this.msRows = data;
            }
        });
    };
    CourseTrackListComponent.prototype.changeDate = function () {
        this.loadList();
    };
    CourseTrackListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-track-list.component.html */ "./src/app/pages/course-tracks/course-track-list/course-track-list.component.html"),
            styles: [__webpack_require__(/*! ./course-track-list.component.scss */ "./src/app/pages/course-tracks/course-track-list/course-track-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_api_profile_api__WEBPACK_IMPORTED_MODULE_2__["ProfileApi"]])
    ], CourseTrackListComponent);
    return CourseTrackListComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/auth-guard.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/auth-guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_api_student_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/api/student.api */ "./src/app/data/api/student.api.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, db) {
        this.router = router;
        this.db = db;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var user = localStorage.getItem('user');
        if (user) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_api_student_api__WEBPACK_IMPORTED_MODULE_3__["StudentApi"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n            <div class=\"card card-register\">\n                <h3>Track Profiler</h3>\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                    <div class=\"form-group\">\n                        <label>Username</label>\n                        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"loginError\" class=\"invalid\">\n                        Invalid login.\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-block btn-round\">Login</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-register, .title {\n  background-color: #FFFFFF;\n  color: #000000; }\n\n.navbar-brand {\n  color: #FFFFFF !important; }\n\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  flex-grow: 1;\n  min-width: 0;\n  background: #336699; }\n\nh3 {\n  text-align: center; }\n\n.invalid {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFwwMDM1N1xcRG9jdW1lbnRzXFxEb2N1bWVudHNcXE1JU1xcVGhlc2lzXFxwcm9maWxlci1wcm9qZWN0L3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXJlZ2lzdGVyLCAudGl0bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAwO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgYmFja2dyb3VuZDogIzMzNjY5OTtcclxufVxyXG5cclxuaDN7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW52YWxpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICBmb250LXNpemU6IDgwJTtcclxuICBjb2xvcjogI2RjMzU0NTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_api_user_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/api/user.api */ "./src/app/data/api/user.api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, db, formBuilder) {
        this.router = router;
        this.db = db;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.loginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        var loginObj = this.loginForm.value;
        if (this.loginForm.invalid) {
            return;
        }
        this.db.login(loginObj['username'], loginObj['password'])
            .subscribe(function (data) {
            if (data != null) {
                localStorage.setItem('user', data['username']);
                _this.router.navigate(['/students']);
            }
            else {
                _this.loginError = true;
            }
        }, function (error) {
            _this.loginError = true;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_api_user_api__WEBPACK_IMPORTED_MODULE_3__["UserApi"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/main.component.html":
/*!*******************************************!*\
  !*** ./src/app/pages/main.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"x-main-body-content\">\r\n    <app-nav></app-nav>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/main.component.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/main.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  flex-grow: 1;\n  min-width: 0; }\n\n.x-main-body-content {\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFwwMDM1N1xcRG9jdW1lbnRzXFxEb2N1bWVudHNcXE1JU1xcVGhlc2lzXFxwcm9maWxlci1wcm9qZWN0L3NyY1xcYXBwXFxwYWdlc1xcbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLngtbWFpbi1ib2R5LWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/main.component.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/main.component.ts ***!
  \*****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/pages/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/pages/main.component.scss")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile-detail/profile-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/profile-detail/profile-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/profile/profile-detail/profile-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/profile-detail/profile-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS1kZXRhaWwvcHJvZmlsZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile-detail/profile-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/profile-detail/profile-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailComponent", function() { return ProfileDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileDetailComponent = /** @class */ (function () {
    function ProfileDetailComponent() {
    }
    ProfileDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-detail',
            template: __webpack_require__(/*! ./profile-detail.component.html */ "./src/app/pages/profile/profile-detail/profile-detail.component.html"),
            styles: [__webpack_require__(/*! ./profile-detail.component.scss */ "./src/app/pages/profile/profile-detail/profile-detail.component.scss")]
        })
    ], ProfileDetailComponent);
    return ProfileDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile-entry/profile-entry.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/profile-entry/profile-entry.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page [headerPanel]=\"headerPanel\" [contentPanel]=\"contentPanel\" [headerText]=\"pageTitle\"></app-page>\r\n<ng-template #headerPanel>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"save()\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/profiles\">Cancel</button>\r\n</ng-template>\r\n\r\n<ng-template #contentPanel>\r\n    <div class=\"content-panel\">\r\n        <div class=\"items-panel\">\r\n            <label>Student</label>\r\n            <ng-select [items]=\"studentList\"\r\n                       bindLabel=\"studentNumber\"\r\n                       bindValue=\"id\"\r\n                       placeholder=\"Select Student Number\"\r\n                       [(ngModel)]=\"model.studentId\">\r\n            </ng-select>\r\n\r\n            <br>\r\n            <label>Exam Result</label>\r\n            <div class=\"result-div\">\r\n                Software Development\r\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.sdExam\" min=\"0\" max=\"30\" required\r\n                       #name=\"ngModel\">\r\n            </div>\r\n            <div class=\"result-div\">\r\n                Distributed Systems\r\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.dsExam\" min=\"0\" max=\"30\" required\r\n                       #name=\"ngModel\">\r\n            </div>\r\n            <div class=\"result-div\">\r\n                Multimedia Studies\r\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.msExam\" min=\"0\" max=\"30\" required\r\n                       #name=\"ngModel\">\r\n            </div>\r\n\r\n            <br>\r\n\r\n            <div class=\"result-div\">\r\n                Student Choice\r\n                <select  [(ngModel)]='model.studentChoice' class=\"form-control\">\r\n                    <option value=\"Software Development\">Software Development</option>\r\n                    <option value=\"Distributed Systems\">Distributed Systems</option>\r\n                    <option value=\"Multimedia Studies\">Multimedia Studies</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #alertTemplate let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>{{alertMessage}}</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">OK</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/profile/profile-entry/profile-entry.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/profile-entry/profile-entry.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  padding-top: 10px; }\n\n.result-div {\n  display: flex;\n  padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLWVudHJ5L0M6XFxVc2Vyc1xcMDAzNTdcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxNSVNcXFRoZXNpc1xccHJvZmlsZXItcHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUtZW50cnlcXHByb2ZpbGUtZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUtZW50cnkvcHJvZmlsZS1lbnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnJlc3VsdC1kaXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile-entry/profile-entry.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/profile-entry/profile-entry.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfileEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryComponent", function() { return ProfileEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _framework_page_x_page_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/page/x-page-edit.component */ "./src/app/framework/page/x-page-edit.component.ts");
/* harmony import */ var _data_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/model */ "./src/app/data/model.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _data_api_profile_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/api/profile.api */ "./src/app/data/api/profile.api.ts");
/* harmony import */ var _data_api_student_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/api/student.api */ "./src/app/data/api/student.api.ts");









var ProfileEntryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileEntryComponent, _super);
    function ProfileEntryComponent(db, dbStudent, activatedRoute, modalService, router) {
        var _this = _super.call(this, modalService, activatedRoute, 'Profile') || this;
        _this.db = db;
        _this.dbStudent = dbStudent;
        _this.activatedRoute = activatedRoute;
        _this.modalService = modalService;
        _this.router = router;
        _this.studentList = [];
        _this.model = new _data_model__WEBPACK_IMPORTED_MODULE_3__["Profile"]();
        if (_this.editMode) {
            _this.db.getProfile(_this.editId).subscribe(function (data) {
                _this.model = data;
                return true;
            }, function (error) {
                _this.showError();
                _this.router.navigate(['/profiles']);
                return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
            });
        }
        _this.loadStudentList();
        return _this;
    }
    ProfileEntryComponent.prototype.save = function () {
        var _this = this;
        this.model.status = 'Initial';
        this.model.userId = '';
        this.model.msInterview = '';
        this.model.dsInterview = '';
        this.model.sdInterview = '';
        if (this.validateInput()) {
            if (this.editMode) {
                this.db.updateProfile(this.model).subscribe(function (data) {
                    _this.showSuccess();
                    _this.router.navigate(['/profiles']);
                    return true;
                }, function (error) {
                    _this.showError();
                    return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
                });
            }
            else {
                this.db.addProfile(this.model).subscribe(function (data) {
                    if (data['message'] === 'Object exists.') {
                        _this.showMessage('Profile for the student already exists.');
                    }
                    else {
                        _this.showSuccess();
                        _this.router.navigate(['/profiles']);
                    }
                }, function (error) {
                    _this.showError();
                    return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
                });
            }
        }
        else {
            this.showValidationError();
        }
    };
    ProfileEntryComponent.prototype.loadStudentList = function () {
        var _this = this;
        this.dbStudent.getStudents().subscribe(function (data) { return _this.studentList = data; });
    };
    ProfileEntryComponent.prototype.validateInput = function () {
        return true;
    };
    ProfileEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-entry',
            template: __webpack_require__(/*! ./profile-entry.component.html */ "./src/app/pages/profile/profile-entry/profile-entry.component.html"),
            styles: [__webpack_require__(/*! ./profile-entry.component.scss */ "./src/app/pages/profile/profile-entry/profile-entry.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_api_profile_api__WEBPACK_IMPORTED_MODULE_7__["ProfileApi"],
            _data_api_student_api__WEBPACK_IMPORTED_MODULE_8__["StudentApi"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProfileEntryComponent);
    return ProfileEntryComponent;
}(_framework_page_x_page_edit_component__WEBPACK_IMPORTED_MODULE_2__["XPageEditComponent"]));



/***/ }),

/***/ "./src/app/pages/profile/profile-list/profile-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/profile-list/profile-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page [headerPanel]=\"headerPanel\" [contentPanel]=\"contentPanel\" [headerText]=\"'Profiles'\"></app-page>\r\n<ng-template #headerPanel>\r\n    <button type=\"button\" *ngIf=\"currentTab === 'all'\" class=\"btn btn-secondary\" routerLink=\"/profile-entry\">Add</button>\r\n    <button type=\"button\" *ngIf=\"currentTab === 'initial'\" class=\"btn btn-secondary\" (click)=\"initialProfile()\">Execute Initial Profiling</button>\r\n    <button type=\"button\" *ngIf=\"currentTab === 'initialcompleted'\" class=\"btn btn-secondary\" (click)=\"finalProfile()\">Execute Final Profiling</button>\r\n</ng-template>\r\n\r\n<ng-template #contentPanel>\r\n    <ngb-tabset [justify]=\"'left'\" (tabChange)=\"tabChange($event)\">\r\n        <ngb-tab title=\"All\" id=\"all\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"rows\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                    <ngx-datatable-column prop=\"dateCreated\">\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Date\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date: 'MM/dd/yyyy'}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column>\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Student\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            {{row.studentFirstName}} {{row.studentLastName}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column prop=\"status\">\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Status\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Initial\" id=\"initial\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"rowsStageInitial\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                    <ngx-datatable-column prop=\"dateCreated\">\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Date\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date: 'MM/dd/yyyy'}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column>\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Student\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            {{row.studentFirstName}} {{row.studentLastName}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column prop=\"status\">\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Status\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Initial Completed\" id=\"initialcompleted\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"rowsStageInitialCompleted\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                    <ngx-datatable-column prop=\"dateCreated\">\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Date\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date: 'MM/dd/yyyy'}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column>\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Student\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            {{row.studentFirstName}} {{row.studentLastName}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column prop=\"status\">\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Status\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <span *ngIf=\"row.sdInterview !== '' && row.dsInterview !== '' && row.msInterview !== ''\">Profile Updated</span>\r\n                            <span *ngIf=\"row.sdInterview === '' && row.dsInterview === '' && row.msInterview === ''\">{{row.status}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column>\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            <div class=\"center-header\">\r\n                                Initial Profile Result\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <div class=\"center-header\">\r\n                                <button md-icon-button (click)=\"initialProfileResult(row)\">\r\n                                    <i class=\"fa fa-sticky-note\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column>\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            <div class=\"center-header\">\r\n                                Interview Result\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <div class=\"center-header\">\r\n                                <button md-icon-button (click)=\"updateProfile(row)\">\r\n                                    <i class=\"fa fa-edit\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Final Completed\" id=\"finalcompleted\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"rowsStageFinal\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                    <ngx-datatable-column prop=\"dateCreated\">\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Date\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date: 'MM/dd/yyyy'}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column>\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Student\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            {{row.studentFirstName}} {{row.studentLastName}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column prop=\"status\">\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            Status\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column>\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            <div class=\"center-header\">\r\n                                Final Profile Result\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <div class=\"center-header\">\r\n                                <button md-icon-button (click)=\"finalProfileResult(row)\">\r\n                                    <i class=\"fa fa-sticky-note\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column align=\"center\">\r\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                            <div class=\"center-header\">\r\n                                Email Result\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <div class=\"center-header\">\r\n                                <button md-icon-button (click)=\"emailResult(row)\">\r\n                                    <i class=\"fa fa-envelope\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</ng-template>\r\n\r\n<ng-template #inputTemplate let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <label>Interview Result</label>\r\n        <div class=\"result-div\">\r\n            Software Development\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.sdInterview\" required\r\n                   #name=\"ngModel\">\r\n        </div>\r\n        <div class=\"result-div\">\r\n            Distributed Systems\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.dsInterview\" required\r\n                   #name=\"ngModel\">\r\n        </div>\r\n        <div class=\"result-div\">\r\n            Multimedia Studies\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.msInterview\" required\r\n                   #name=\"ngModel\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"save()\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Cancel</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #profileTemplate let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>1st: {{profileModel.result1Label}} </p>\r\n        <p>Rank: {{profileModel.resultRankLabel}} </p>\r\n        <br/>\r\n        <p>2nd: {{profileModel.result2Label}}</p> <br/>\r\n        <p>3rd: {{profileModel.result3Label}}</p> <br/>\r\n        <br/>\r\n        <p *ngIf=\"this.initial\">Student Choice: {{profileModel.studentChoice}}</p>\r\n        <p *ngIf=\"!this.initial\">Result Accepted by Student: {{profileModel.accepted}}</p>\r\n        <div *ngIf=\"!this.initial\">\r\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"acceptResult('Yes')\">Accept</button>\r\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"acceptResult('No')\">Not accept</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">OK</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #alertTemplate let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>{{alertMessage}}</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">OK</button>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/profile/profile-list/profile-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/profile-list/profile-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLWxpc3QvQzpcXFVzZXJzXFwwMDM1N1xcRG9jdW1lbnRzXFxEb2N1bWVudHNcXE1JU1xcVGhlc2lzXFxwcm9maWxlci1wcm9qZWN0L3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS1saXN0XFxwcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLWxpc3QvcHJvZmlsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1oZWFkZXJcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profile/profile-list/profile-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/profile-list/profile-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileListComponent", function() { return ProfileListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_api_profile_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/api/profile.api */ "./src/app/data/api/profile.api.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _framework_page_x_page_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/page/x-page-edit.component */ "./src/app/framework/page/x-page-edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_api_grade_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/api/grade.api */ "./src/app/data/api/grade.api.ts");
/* harmony import */ var _data_api_setting_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/api/setting.api */ "./src/app/data/api/setting.api.ts");










var ProfileListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileListComponent, _super);
    function ProfileListComponent(db, gradeDb, settingApi, activatedRoute, modalService) {
        var _this = _super.call(this, modalService, activatedRoute, 'Profile') || this;
        _this.db = db;
        _this.gradeDb = gradeDb;
        _this.settingApi = settingApi;
        _this.activatedRoute = activatedRoute;
        _this.modalService = modalService;
        _this.columns = [
            { prop: 'dateCreated', name: 'Date' },
            { prop: 'studentId', name: 'Student ID' },
            { prop: 'status', name: 'Status' },
            { prop: 'studentFirstName', name: 'First Name' },
            { prop: 'studentLastName', name: 'Last Name' },
            { prop: 'id', name: 'Actions' }
        ];
        _this.rows = [];
        _this.rowsStageInitial = [];
        _this.rowsStageInitialCompleted = [];
        _this.rowsStageFinal = [];
        _this.loadingIndicator = true;
        _this.reorderable = true;
        _this.currentTab = 'all';
        _this.initial = true;
        _this.dsList = [];
        _this.msList = [];
        _this.sdList = [];
        _this.quota = 0;
        _this.letterSign = '';
        _this.loadList();
        _this.loadSetting();
        return _this;
    }
    ProfileListComponent.prototype.tabChange = function ($event) {
        this.currentTab = $event.nextId;
        if (this.currentTab === 'all') {
            this.loadList();
        }
        else if (this.currentTab === 'initial') {
            this.loadInitialList();
        }
        else if (this.currentTab === 'initialcompleted') {
            this.loadInitialCompletedList();
        }
        else if (this.currentTab === 'finalcompleted') {
            this.loadFinalList();
        }
    };
    ProfileListComponent.prototype.loadList = function () {
        var _this = this;
        this.db.getProfiles().subscribe(function (data) { return _this.rows = data; });
    };
    ProfileListComponent.prototype.loadInitialList = function () {
        var _this = this;
        this.db.getProfileByStatus('Initial').subscribe(function (data) { return _this.rowsStageInitial = data; });
    };
    ProfileListComponent.prototype.loadInitialCompletedList = function () {
        var _this = this;
        this.db.getProfileByStatus('Initial Completed').subscribe(function (data) { return _this.rowsStageInitialCompleted = data; });
    };
    ProfileListComponent.prototype.loadSetting = function () {
        var _this = this;
        this.settingApi.getSettings().subscribe(function (data) {
            _this.quota = Number(data.filter(function (x) { return x.name === 'quota'; })[0].value);
            _this.letterSign = data.filter(function (x) { return x.name === 'lettersign'; })[0].value;
        }, function (error) {
            _this.showError();
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        });
    };
    ProfileListComponent.prototype.loadFinalList = function () {
        var _this = this;
        this.db.getProfileByStatus('Final Completed').subscribe(function (data) { return _this.rowsStageFinal = data; });
    };
    ProfileListComponent.prototype.loadInitialProfileList = function () {
        var _this = this;
        var count = this.rowsStageInitial.length;
        var profiles = [];
        var _loop_1 = function (x) {
            this_1.gradeDb.getGrade(x.studentId).subscribe(function (data) {
                count--;
                x.grades = data;
                profiles.push(x);
                if (count === 0) {
                    _this.performInitialProfile(profiles);
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.rowsStageInitial; _i < _a.length; _i++) {
            var x = _a[_i];
            _loop_1(x);
        }
    };
    ProfileListComponent.prototype.performInitialProfile = function (list) {
        var _this = this;
        var _loop_2 = function (x) {
            var sdResult = 0;
            var dsResult = 0;
            var msResult = 0;
            var getSDGrade = x.grades.filter(function (c) { return c.courseSpecialization === 'SD'; });
            var getDSGrade = x.grades.filter(function (c) { return c.courseSpecialization === 'DS'; });
            var getMSGrade = x.grades.filter(function (c) { return c.courseSpecialization === 'MS'; });
            getSDGrade.forEach(function (f) { return sdResult += (Number(f.value)); });
            getDSGrade.forEach(function (f) { return dsResult += (Number(f.value)); });
            getMSGrade.forEach(function (f) { return msResult += (Number(f.value)); });
            var sdGrade = sdResult > 0 ? (sdResult / getSDGrade.length) * .5 : 0;
            var dsGrade = dsResult > 0 ? (dsResult / getDSGrade.length) * .5 : 0;
            var msGrade = msResult > 0 ? (msResult / getMSGrade.length) * .5 : 0;
            var sdExam = ((Number(x.sdExam) / 30) * 100) * .5;
            var dsExam = ((Number(x.dsExam) / 30) * 100) * .5;
            var msExam = ((Number(x.msExam) / 30) * 100) * .5;
            var sdFinalResult = (sdGrade + sdExam).toFixed(2);
            var dsFinalResult = (dsGrade + dsExam).toFixed(2);
            var msFinalResult = (msGrade + msExam).toFixed(2);
            var result = [
                { 'result': 'DS', 'value': dsFinalResult },
                { 'result': 'MS', 'value': msFinalResult },
                { 'result': 'SD', 'value': sdFinalResult }
            ];
            result.sort(function (a, b) { return Number(b.value) - Number(a.value); });
            var finalResult1 = result[0];
            var finalResult2 = result[1];
            var finalResult3 = result[2];
            var choice = x.studentChoice.substr(0, 1);
            if (finalResult1.value === finalResult2.value) {
                if (finalResult2.result.startsWith(choice)) {
                    finalResult1 = result[1];
                    finalResult2 = result[0];
                }
            }
            if (finalResult2.value === finalResult3.value) {
                if (finalResult3.result.startsWith(choice)) {
                    var fr2 = finalResult2;
                    var fr3 = finalResult3;
                    finalResult2 = fr3;
                    finalResult3 = fr2;
                }
            }
            x.initialResult1 = finalResult1;
            x.initialResult2 = finalResult2;
            x.initialResult3 = finalResult3;
        };
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var x = list_1[_i];
            _loop_2(x);
        }
        var updateList = [];
        var sdList = list.filter(function (sd) { return sd.initialResult1['result'] === 'SD'; });
        sdList.sort(function (a, b) { return b.initialResult1['value'] - a.initialResult1['value']; });
        var count = 0;
        for (var _a = 0, sdList_1 = sdList; _a < sdList_1.length; _a++) {
            var x = sdList_1[_a];
            count++;
            x.initialResultRank = count;
        }
        updateList.push.apply(updateList, sdList);
        var msList = list.filter(function (sd) { return sd.initialResult1['result'] === 'MS'; });
        msList.sort(function (a, b) { return b.initialResult1['value'] - a.initialResult1['value']; });
        count = 0;
        for (var _b = 0, msList_1 = msList; _b < msList_1.length; _b++) {
            var x = msList_1[_b];
            count++;
            x.initialResultRank = count;
        }
        updateList.push.apply(updateList, msList);
        var dsList = list.filter(function (sd) { return sd.initialResult1['result'] === 'DS'; });
        dsList.sort(function (a, b) { return b.initialResult1['value'] - a.initialResult1['value']; });
        count = 0;
        for (var _c = 0, dsList_1 = dsList; _c < dsList_1.length; _c++) {
            var x = dsList_1[_c];
            count++;
            x.initialResultRank = count;
        }
        updateList.push.apply(updateList, dsList);
        count = updateList.length;
        for (var _d = 0, updateList_1 = updateList; _d < updateList_1.length; _d++) {
            var x = updateList_1[_d];
            var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US');
            x.status = 'Initial Completed';
            x.initialDate = datePipe.transform(Date.now(), 'dd/MM/yyyy');
            x.initialResult1 = JSON.stringify(x.initialResult1);
            x.initialResult2 = JSON.stringify(x.initialResult2);
            x.initialResult3 = JSON.stringify(x.initialResult3);
            this.db.updateProfile(x).subscribe(function (data) {
                count--;
                if (count === 0) {
                    _this.showMessage('Completed initial profiling.');
                }
            }, function (error) {
                _this.showError();
                return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
            });
        }
        this.loadInitialList();
    };
    ProfileListComponent.prototype.initialProfile = function () {
        this.loadInitialProfileList();
    };
    ProfileListComponent.prototype.getResultForTrack = function (track, initialResult1, initialResult2, initialResult3) {
        if (initialResult1['result'] === track) {
            return initialResult1['value'];
        }
        else if (initialResult2['result'] === track) {
            return initialResult2['value'];
        }
        else if (initialResult3['result'] === track) {
            return initialResult3['value'];
        }
    };
    ProfileListComponent.prototype.finalProfile = function () {
        var list = this.rowsStageInitialCompleted.filter(function (x) { return x.sdInterview !== '' && x.dsInterview !== '' && x.msInterview !== ''; });
        var count = list.length;
        var quoata = 1;
        if (count === this.rowsStageInitialCompleted.length) {
            var computedList = this.computeFinal(list);
            var updateList = [];
            this.sdList = computedList.filter(function (sd) { return sd.finalResult1['result'] === 'SD'; });
            this.msList = computedList.filter(function (sd) { return sd.finalResult1['result'] === 'MS'; });
            this.dsList = computedList.filter(function (sd) { return sd.finalResult1['result'] === 'DS'; });
            this.applyRank();
            this.applyQuoata(1);
            this.applyRank();
            this.applyQuoata(2);
            this.saveFinal();
        }
        else {
            this.showMessage('Input interview result in all profiles.');
        }
    };
    ProfileListComponent.prototype.applyRank = function () {
        var count = 0;
        this.sdList.sort(function (a, b) { return b.finalResult1['value'] - a.finalResult1['value']; });
        count = 0;
        for (var _i = 0, _a = this.sdList; _i < _a.length; _i++) {
            var xx = _a[_i];
            count++;
            xx.finalResultRank = count;
        }
        this.msList.sort(function (a, b) { return b.finalResult1['value'] - a.finalResult1['value']; });
        count = 0;
        for (var _b = 0, _c = this.msList; _b < _c.length; _b++) {
            var xx = _c[_b];
            count++;
            xx.finalResultRank = count;
        }
        this.dsList.sort(function (a, b) { return b.finalResult1['value'] - a.finalResult1['value']; });
        count = 0;
        for (var _d = 0, _e = this.dsList; _d < _e.length; _d++) {
            var xx = _e[_d];
            count++;
            xx.finalResultRank = count;
        }
    };
    ProfileListComponent.prototype.applyQuoata = function (level) {
        var _a, _b, _c;
        var acceptExceedQuota = (this.dsList.length >= this.quota && this.msList.length >= this.quota && this.sdList.length >= this.quota) ? true : false;
        var quoataMs = [];
        var quoataDs = [];
        var quoataSd = [];
        var countMs = this.msList.length;
        var countDs = this.dsList.length;
        var countSd = this.sdList.length;
        if (!acceptExceedQuota) {
            if (this.dsList.length > this.quota) {
                var cutoff = this.dsList.splice(this.quota);
                this.dsList = this.dsList.splice(0, this.quota);
                for (var _i = 0, cutoff_1 = cutoff; _i < cutoff_1.length; _i++) {
                    var xx = cutoff_1[_i];
                    var final1 = xx.finalResult1;
                    var final2 = level === 1 ? xx.finalResult2 : xx.finalResult3;
                    var value = final2['result'];
                    xx.finalResult1 = final2;
                    if (level === 1) {
                        xx.finalResult2 = final1;
                    }
                    else {
                        xx.finalResult3 = final1;
                    }
                    if (value === 'MS' && countMs < this.quota) {
                        quoataMs.push(xx);
                        countMs++;
                    }
                    else if (value === 'SD' && countSd < this.quota) {
                        quoataSd.push(xx);
                        countSd++;
                    }
                    else {
                        xx.finalResult1 = final1;
                        if (level === 1) {
                            xx.finalResult2 = final2;
                        }
                        else {
                            xx.finalResult3 = final2;
                        }
                        quoataDs.push(xx);
                    }
                }
            }
            if (this.msList.length > this.quota) {
                var cutoff = this.msList.splice(this.quota);
                this.msList = this.msList.splice(0, this.quota);
                for (var _d = 0, cutoff_2 = cutoff; _d < cutoff_2.length; _d++) {
                    var xx = cutoff_2[_d];
                    var final1 = xx.finalResult1;
                    var final2 = level === 1 ? xx.finalResult2 : xx.finalResult3;
                    var value = final2['result'];
                    xx.finalResult1 = final2;
                    if (level === 1) {
                        xx.finalResult2 = final1;
                    }
                    else {
                        xx.finalResult3 = final1;
                    }
                    if (value === 'SD' && countSd < this.quota) {
                        quoataSd.push(xx);
                        countSd++;
                    }
                    else if (value === 'DS' && countDs < this.quota) {
                        quoataDs.push(xx);
                        countDs++;
                    }
                    else {
                        xx.finalResult1 = final1;
                        if (level === 1) {
                            xx.finalResult2 = final2;
                        }
                        else {
                            xx.finalResult3 = final2;
                        }
                        quoataMs.push(xx);
                    }
                }
            }
            if (this.sdList.length > this.quota) {
                var cutoff = this.sdList.splice(this.quota);
                this.sdList = this.sdList.splice(0, this.quota);
                for (var _e = 0, cutoff_3 = cutoff; _e < cutoff_3.length; _e++) {
                    var xx = cutoff_3[_e];
                    var final1 = xx.finalResult1;
                    var final2 = level === 1 ? xx.finalResult2 : xx.finalResult3;
                    var value = final2['result'];
                    xx.finalResult1 = final2;
                    if (level === 1) {
                        xx.finalResult2 = final1;
                    }
                    else {
                        xx.finalResult3 = final1;
                    }
                    if (value === 'MS' && countMs < this.quota) {
                        quoataMs.push(xx);
                        countMs++;
                    }
                    else if (value === 'DS' && countDs < this.quota) {
                        quoataDs.push(xx);
                        countDs++;
                    }
                    else {
                        xx.finalResult1 = final1;
                        if (level === 1) {
                            xx.finalResult2 = final2;
                        }
                        else {
                            xx.finalResult3 = final2;
                        }
                        quoataSd.push(xx);
                    }
                }
            }
            (_a = this.sdList).push.apply(_a, quoataSd);
            (_b = this.msList).push.apply(_b, quoataMs);
            (_c = this.dsList).push.apply(_c, quoataDs);
        }
    };
    ProfileListComponent.prototype.saveFinal = function () {
        var _this = this;
        var finalList = [];
        finalList.push.apply(finalList, this.sdList);
        finalList.push.apply(finalList, this.dsList);
        finalList.push.apply(finalList, this.msList);
        var count = finalList.length;
        for (var _i = 0, finalList_1 = finalList; _i < finalList_1.length; _i++) {
            var x = finalList_1[_i];
            x.status = 'Final Completed';
            var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US');
            x.finalDate = datePipe.transform(Date.now(), 'dd/MM/yyyy');
            x.finalResult1 = JSON.stringify(x.finalResult1);
            x.finalResult2 = JSON.stringify(x.finalResult2);
            x.finalResult3 = JSON.stringify(x.finalResult3);
            this.db.updateProfile(x).subscribe(function (data) {
                count--;
                if (count === 0) {
                    _this.showMessage('Completed final profiling.');
                    _this.loadInitialCompletedList();
                }
            }, function (error) {
                _this.showError();
                _this.loadInitialCompletedList();
                return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
            });
        }
    };
    ProfileListComponent.prototype.computeFinal = function (list) {
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var x = list_2[_i];
            var result1 = JSON.parse(x.initialResult1);
            var result2 = JSON.parse(x.initialResult2);
            var result3 = JSON.parse(x.initialResult3);
            var sdInitialResult = this.getResultForTrack('SD', result1, result2, result3) * .8;
            var msInitialResult = this.getResultForTrack('MS', result1, result2, result3) * .8;
            var dsInitialResult = this.getResultForTrack('DS', result1, result2, result3) * .8;
            var sdInterviewResult = ((x.sdInterview / 10) * 100) * .2;
            var msInterviewResult = ((x.msInterview / 10) * 100) * .2;
            var dsInterviewResult = ((x.dsInterview / 10) * 100) * .2;
            var sdResult = (sdInitialResult + sdInterviewResult).toFixed(2);
            var msResult = (msInitialResult + msInterviewResult).toFixed(2);
            var dsResult = (dsInitialResult + dsInterviewResult).toFixed(2);
            var result = [
                { 'result': 'DS', 'value': dsResult },
                { 'result': 'MS', 'value': msResult },
                { 'result': 'SD', 'value': sdResult }
            ];
            result.sort(function (a, b) { return Number(b.value) - Number(a.value); });
            var finalResult1 = result[0];
            var finalResult2 = result[1];
            var finalResult3 = result[2];
            var choice = x.studentChoice.substr(0, 1);
            if (finalResult1.value === finalResult2.value) {
                if (finalResult2.result.startsWith(choice)) {
                    finalResult1 = result[1];
                    finalResult2 = result[0];
                }
            }
            if (finalResult2.value === finalResult3.value) {
                if (finalResult3.result.startsWith(choice)) {
                    var fr2 = finalResult2;
                    var fr3 = finalResult3;
                    finalResult2 = fr3;
                    finalResult3 = fr2;
                }
            }
            x.finalResult1 = result[0];
            x.finalResult2 = result[1];
            x.finalResult3 = result[2];
        }
        return list;
    };
    ProfileListComponent.prototype.updateProfile = function (value) {
        this.model = value;
        this.modalService.open(this.inputTemplate);
    };
    ProfileListComponent.prototype.initialProfileResult = function (value) {
        this.initial = true;
        this.profileResult(value);
    };
    ProfileListComponent.prototype.finalProfileResult = function (value) {
        this.initial = false;
        this.profileResult(value);
    };
    ProfileListComponent.prototype.profileResult = function (value) {
        var result1 = JSON.parse(this.initial ? value.initialResult1 : value.finalResult1);
        var result2 = JSON.parse(this.initial ? value.initialResult2 : value.finalResult2);
        var result3 = JSON.parse(this.initial ? value.initialResult3 : value.finalResult3);
        var rank = this.initial ? value.initialResultRank : value.finalResultRank;
        this.profileModel = value;
        this.profileModel.result1Label = result1['result'] === 'SD' ? 'Software Development' :
            (result1['result'] === 'MS' ? 'Multimedia Studies' : 'Distributed Systems');
        this.profileModel.result1Label = this.profileModel.result1Label + ' (' + result1['value'] + ')';
        this.profileModel.result2Label = result2['result'] === 'SD' ? 'Software Development' :
            (result2['result'] === 'MS' ? 'Multimedia Studies' : 'Distributed Systems');
        this.profileModel.result2Label = this.profileModel.result2Label + ' (' + result2['value'] + ')';
        this.profileModel.result3Label = result3['result'] === 'SD' ? 'Software Development' :
            (result3['result'] === 'MS' ? 'Multimedia Studies' : 'Distributed Systems');
        this.profileModel.result3Label = this.profileModel.result3Label + ' (' + result3['value'] + ')';
        this.profileModel.resultRankLabel = rank;
        this.profileModel.accepted = this.profileModel.accepted !== undefined ? this.profileModel.accepted : 'No';
        this.modalService.open(this.profileTemplate);
    };
    ProfileListComponent.prototype.emailResult = function (value) {
        var _this = this;
        this.db.emailProfile(value.studentId, this.letterSign).subscribe(function (data) {
            _this.showMessage('Email sent!');
        }, function (error) {
            _this.showError();
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        });
    };
    ProfileListComponent.prototype.save = function () {
        var _this = this;
        this.db.updateProfile(this.model).subscribe(function (data) {
            _this.showMessage('Updated profile');
            _this.modalService.dismissAll();
            _this.loadInitialCompletedList();
        }, function (error) {
            _this.showError();
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        });
    };
    ProfileListComponent.prototype.acceptResult = function (value) {
        var _this = this;
        this.profileModel.accepted = value;
        this.db.updateProfile(this.profileModel).subscribe(function (data) {
            _this.showMessage('Updated profile');
            _this.modalService.dismissAll();
        }, function (error) {
            _this.showError();
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ProfileListComponent.prototype, "inputTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profileTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ProfileListComponent.prototype, "profileTemplate", void 0);
    ProfileListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-list',
            template: __webpack_require__(/*! ./profile-list.component.html */ "./src/app/pages/profile/profile-list/profile-list.component.html"),
            styles: [__webpack_require__(/*! ./profile-list.component.scss */ "./src/app/pages/profile/profile-list/profile-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_api_profile_api__WEBPACK_IMPORTED_MODULE_2__["ProfileApi"],
            _data_api_grade_api__WEBPACK_IMPORTED_MODULE_8__["GradeApi"],
            _data_api_setting_api__WEBPACK_IMPORTED_MODULE_9__["SettingApi"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], ProfileListComponent);
    return ProfileListComponent;
}(_framework_page_x_page_edit_component__WEBPACK_IMPORTED_MODULE_5__["XPageEditComponent"]));



/***/ }),

/***/ "./src/app/pages/profile/profile-update/profile-update.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/profile-update/profile-update.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/profile/profile-update/profile-update.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/profile-update/profile-update.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS11cGRhdGUvcHJvZmlsZS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile-update/profile-update.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/profile-update/profile-update.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUpdateComponent", function() { return ProfileUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileUpdateComponent = /** @class */ (function () {
    function ProfileUpdateComponent() {
    }
    ProfileUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-update',
            template: __webpack_require__(/*! ./profile-update.component.html */ "./src/app/pages/profile/profile-update/profile-update.component.html"),
            styles: [__webpack_require__(/*! ./profile-update.component.scss */ "./src/app/pages/profile/profile-update/profile-update.component.scss")]
        })
    ], ProfileUpdateComponent);
    return ProfileUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/reports/report-list/report-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/reports/report-list/report-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page [contentPanel]=\"contentPanel\"></app-page>\r\n\r\n<ng-template #contentPanel>\r\n    <div class=\"widget-container\">\r\n        <div class=\"item\">Student Distribution Per Track<nvd3 [options]=\"studentPerTrackChartOptions\" [data]=\"studentPerTrackChartData\"></nvd3></div>\r\n        <div class=\"item\">Gender Distribution Per Track<nvd3 [options]=\"choiceAgainstResultOptions\" [data]=\"choiceAgainstResultData\"></nvd3></div>\r\n        <div class=\"item\">Student Choice Selected As Result<nvd3 [options]=\"genderDistributionOptions\" [data]=\"genderDistributionData\"></nvd3></div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/reports/report-list/report-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/reports/report-list/report-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  overflow-y: auto; }\n\n.item {\n  width: 100%;\n  margin: 20px; }\n\n.widget-container {\n  display: flex;\n  flex-wrap: wrap;\n  height: 80vh;\n  overflow-y: auto; }\n\n.widget-container > div {\n  flex: 0 45%;\n  border: gray solid;\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9yZXBvcnQtbGlzdC9DOlxcVXNlcnNcXDAwMzU3XFxEb2N1bWVudHNcXERvY3VtZW50c1xcTUlTXFxUaGVzaXNcXHByb2ZpbGVyLXByb2plY3Qvc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRzXFxyZXBvcnQtbGlzdFxccmVwb3J0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVwb3J0cy9yZXBvcnQtbGlzdC9yZXBvcnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi53aWRnZXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLndpZGdldC1jb250YWluZXI+ZGl2IHtcclxuICBmbGV4OiAwIDQ1JTtcclxuICBib3JkZXI6IGdyYXkgc29saWQ7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/reports/report-list/report-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/reports/report-list/report-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ReportListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListComponent", function() { return ReportListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_api_profile_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/api/profile.api */ "./src/app/data/api/profile.api.ts");



var ReportListComponent = /** @class */ (function () {
    function ReportListComponent(db) {
        this.db = db;
        this.studentPerTrackChart();
    }
    ReportListComponent.prototype.studentPerTrackChart = function () {
        var _this = this;
        this.studentPerTrackChartOptions = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: false,
                duration: 500,
                valueFormat: function (d) {
                    return d3.format('f')(d);
                },
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        this.choiceAgainstResultOptions = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: false,
                duration: 500,
                valueFormat: function (d) {
                    return d3.format('f')(d);
                },
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        this.genderDistributionOptions = {
            chart: {
                type: 'multiBarChart',
                height: 450,
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function (d) {
                        return d3.format('f')(d);
                    }
                }
            }
        };
        var currentYear = (new Date()).getFullYear();
        this.db.getProfileByResult('result', currentYear.toString()).subscribe(function (data) {
            _this.studentPerTrackChartData = [];
            var dsList = data.filter(function (sd) { return JSON.parse(sd.finalResult1)['result'] === 'DS'; });
            var sdList = data.filter(function (sd) { return JSON.parse(sd.finalResult1)['result'] === 'SD'; });
            var msList = data.filter(function (sd) { return JSON.parse(sd.finalResult1)['result'] === 'MS'; });
            _this.studentPerTrackChartData.push({ key: 'Software Development', y: sdList.length });
            _this.studentPerTrackChartData.push({ key: 'Distributed Systems', y: dsList.length });
            _this.studentPerTrackChartData.push({ key: 'Multimedia Studies', y: msList.length });
            var choiceSelected = data.filter(function (sd) { return (JSON.parse(sd.finalResult1)['result'] === 'SD' && sd.studentChoice === 'Software Development') ||
                (JSON.parse(sd.finalResult1)['result'] === 'MS' && sd.studentChoice === 'Multimedia Studies') ||
                (JSON.parse(sd.finalResult1)['result'] === 'DS' && sd.studentChoice === 'Distributed Systems'); });
            _this.choiceAgainstResultData = [];
            _this.choiceAgainstResultData.push({ key: 'Student Choice Selected as Result', y: choiceSelected.length });
            _this.choiceAgainstResultData.push({ key: 'Student Choice Not Selected as Result', y: data.length - choiceSelected.length });
            var sdFemale = sdList.filter(function (x) { return x['gender'] === 'F'; });
            var sdMale = sdList.filter(function (x) { return x['gender'] === 'M'; });
            var dsFemale = dsList.filter(function (x) { return x['gender'] === 'F'; });
            var dsMale = dsList.filter(function (x) { return x['gender'] === 'M'; });
            var msFemale = msList.filter(function (x) { return x['gender'] === 'F'; });
            var msMale = msList.filter(function (x) { return x['gender'] === 'M'; });
            _this.genderDistributionData = [
                {
                    'key': 'Software Development',
                    'values': [
                        {
                            'label': 'Male',
                            'value': sdMale.length
                        },
                        {
                            'label': 'Female',
                            'value': sdFemale.length
                        }
                    ]
                },
                {
                    'key': 'Multimedia Studies',
                    'values': [
                        {
                            'label': 'Male',
                            'value': msMale.length
                        },
                        {
                            'label': 'Female',
                            'value': msFemale.length
                        }
                    ]
                },
                {
                    'key': 'Distributed Systems',
                    'values': [
                        {
                            'label': 'Male',
                            'value': dsMale.length
                        },
                        {
                            'label': 'Female',
                            'value': dsFemale.length
                        }
                    ]
                }
            ];
        });
    };
    ReportListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-list',
            template: __webpack_require__(/*! ./report-list.component.html */ "./src/app/pages/reports/report-list/report-list.component.html"),
            styles: [__webpack_require__(/*! ./report-list.component.scss */ "./src/app/pages/reports/report-list/report-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_api_profile_api__WEBPACK_IMPORTED_MODULE_2__["ProfileApi"]])
    ], ReportListComponent);
    return ReportListComponent;
}());



/***/ }),

/***/ "./src/app/pages/students/student-edit/student-edit.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/students/student-edit/student-edit.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page [headerPanel]=\"headerPanel\" [contentPanel]=\"contentPanel\" [headerText]=\"pageTitle\"></app-page>\r\n<ng-template #headerPanel>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"save()\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/students\">Cancel</button>\r\n</ng-template>\r\n\r\n<ng-template #contentPanel>\r\n    <ngb-tabset [justify]=\"'left'\">\r\n        <ngb-tab title=\"Details\">\r\n            <ng-template ngbTabContent >\r\n                <div class=\"content-panel\">\r\n                    <div class=\"items-panel\">\r\n                        <!--<div *ngIf=\"name.invalid && (name.dirty || name.touched)\"-->\r\n                             <!--class=\"alert alert-danger\">-->\r\n                            <!--<div *ngIf=\"name.errors.required\">-->\r\n                                <!--Name is required.-->\r\n                            <!--</div>-->\r\n                        <!--</div>-->\r\n                        <div>\r\n                            <label>Student Number</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.studentNumber\" required\r\n                                  #name=\"ngModel\">\r\n                        </div>\r\n                        <div>\r\n                            <label>First Name</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.firstName\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Last Name</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.lastName\">\r\n                        </div>\r\n                        <div>\r\n                        <label>Gender</label>\r\n                        <select class=\"form-control\" [(ngModel)]=\"model.gender\">\r\n                            <option>F</option>\r\n                            <option>M</option>\r\n                        </select>\r\n                        </div>\r\n                        <div>\r\n                            <label>Email</label>\r\n                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"model.email\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"items-panel\">\r\n                        <div>\r\n                            <label>Year Level</label>\r\n                            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.yearLevel\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Program</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.program\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Grade\">\r\n            <ng-template ngbTabContent>\r\n                <div class=\"content-panel\">\r\n                    <div class=\"items-panel\">\r\n                        <label>Year</label>\r\n                        <select class=\"form-control\" [(ngModel)]=\"gradeModel.year\">\r\n                            <option>2015</option>\r\n                            <option>2016</option>\r\n                            <option>2017</option>\r\n                            <option>2018</option>\r\n                            <option>2019</option>\r\n                        </select>\r\n\r\n                        <label>Term</label>\r\n                        <select class=\"form-control\" [(ngModel)]=\"gradeModel.term\">\r\n                            <option>1ST</option>\r\n                            <option>2ND</option>\r\n                        </select>\r\n\r\n                        <label>Course</label>\r\n                        <select class=\"form-control\" [(ngModel)]=\"gradeModel.courseId\">\r\n                            <option *ngFor=\"let item of courseList\" [value]=\"item.id\">\r\n                                {{item.courseNumber}} : {{item.title}}\r\n                            </option>\r\n                        </select>\r\n\r\n                        <label>Grade</label>\r\n                        <select class=\"form-control\" [(ngModel)]=\"gradeModel.value\">\r\n                            <option>1</option>\r\n                            <option>1.25</option>\r\n                            <option>1.5</option>\r\n                            <option>1.75</option>\r\n                            <option>2</option>\r\n                            <option>2.25</option>\r\n                            <option>2.5</option>\r\n                            <option>2.75</option>\r\n                            <option>3</option>\r\n                        </select>\r\n\r\n                        <button type=\"button\" class=\"btn btn-secondary add-grade\" (click)=\"addGrade()\">Add Grade</button>\r\n                    </div>\r\n                    <div class=\"items-panel\">\r\n                        <ngx-datatable\r\n                                class=\"bootstrap\"\r\n                                [rows]=\"gradeList\"\r\n                                [columns]=\"columns\"\r\n                                [columnMode]=\"'force'\"\r\n                                [limit]=\"5\"\r\n                                [rowHeight]=\"'auto'\"\r\n                                [headerHeight]=\"40\"\r\n                                [footerHeight]=\"40\">\r\n                            <ngx-datatable-column>\r\n                                <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                                    Year - Term\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                    {{row.year}} - {{row.term}}\r\n                                </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column>\r\n                                <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                                    Course Title\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                    {{row.title}}\r\n                                </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column align=\"center\">\r\n                                <ng-template let-column=\"column\" ngx-datatable-header-template>\r\n                                    <div class=\"center-header\">\r\n                                        Grade\r\n                                    </div>\r\n                                </ng-template>\r\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                    <div class=\"center-header\">\r\n                                        {{row.value}}\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngx-datatable-column>\r\n                        </ngx-datatable>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</ng-template>\r\n\r\n<ng-template #alertTemplate let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>{{alertMessage}}</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">OK</button>\r\n    </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/students/student-edit/student-edit.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/students/student-edit/student-edit.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  padding-top: 10px; }\n\n.add-grade {\n  margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZGVudHMvc3R1ZGVudC1lZGl0L0M6XFxVc2Vyc1xcMDAzNTdcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxNSVNcXFRoZXNpc1xccHJvZmlsZXItcHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXHN0dWRlbnRzXFxzdHVkZW50LWVkaXRcXHN0dWRlbnQtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnRzL3N0dWRlbnQtZWRpdC9zdHVkZW50LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGQtZ3JhZGV7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/students/student-edit/student-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/students/student-edit/student-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: StudentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEditComponent", function() { return StudentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _data_api_student_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/api/student.api */ "./src/app/data/api/student.api.ts");
/* harmony import */ var _data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/model */ "./src/app/data/model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _framework_page_x_page_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/page/x-page-edit.component */ "./src/app/framework/page/x-page-edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_api_course_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/api/course.api */ "./src/app/data/api/course.api.ts");
/* harmony import */ var _data_api_grade_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/api/grade.api */ "./src/app/data/api/grade.api.ts");










var StudentEditComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentEditComponent, _super);
    function StudentEditComponent(db, dbCourse, dbGrade, activatedRoute, modalService, router) {
        var _this = _super.call(this, modalService, activatedRoute, 'Student') || this;
        _this.db = db;
        _this.dbCourse = dbCourse;
        _this.dbGrade = dbGrade;
        _this.activatedRoute = activatedRoute;
        _this.modalService = modalService;
        _this.router = router;
        _this.columns = [
            { prop: 'title', name: 'Course' },
            { prop: 'year', name: 'Year' },
            { prop: 'term', name: 'Term' },
            { prop: 'value', name: 'Grade' }
        ];
        _this.courseList = [];
        _this.gradeList = [];
        _this.gradeValue = [
            { grade: 1, value: 100 },
            { grade: 1.25, value: 96 },
            { grade: 1.5, value: 92 },
            { grade: 1.75, value: 88 },
            { grade: 2, value: 86 },
            { grade: 2.25, value: 84 },
            { grade: 2.5, value: 82 },
            { grade: 2.75, value: 79 },
            { grade: 3, value: 76 }
        ];
        _this.gradeModel = new _data_model__WEBPACK_IMPORTED_MODULE_4__["Grade"]();
        _this.model = new _data_model__WEBPACK_IMPORTED_MODULE_4__["Student"]();
        _this.model.grades = new Array();
        if (_this.editMode) {
            _this.db.getStudent(_this.editId).subscribe(function (data) {
                _this.model = data;
                return true;
            }, function (error) {
                _this.showError();
                _this.router.navigate(['/students']);
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
            });
            _this.loadGradeList();
        }
        _this.loadCourseList();
        return _this;
    }
    StudentEditComponent.prototype.save = function () {
        var _this = this;
        if (this.validateInput()) {
            if (this.editMode) {
                this.db.updateStudent(this.model).subscribe(function (data) {
                    _this.model = data;
                    if (_this.gradeList.length > 0) {
                        _this.saveGrade();
                    }
                    else {
                        _this.showSuccess();
                        _this.router.navigate(['/students']);
                    }
                }, function (error) {
                    _this.showError();
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
                });
            }
            else {
                this.db.addStudent(this.model).subscribe(function (data) {
                    _this.model = data;
                    if (_this.gradeList.length > 0) {
                        _this.saveGrade();
                    }
                    else {
                        _this.showSuccess();
                        _this.router.navigate(['/students']);
                    }
                }, function (error) {
                    _this.showError();
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
                });
            }
        }
        else {
            this.showValidationError();
        }
    };
    StudentEditComponent.prototype.saveGrade = function () {
        var _this = this;
        var newGradeList = this.gradeList.filter(function (x) { return x.id === 0; });
        var count = newGradeList.length;
        var _loop_1 = function (x) {
            var gradeValue = this_1.gradeValue.filter(function (gv) { return gv.grade.toString() === x.value.toString(); })[0];
            x.studentId = this_1.model.id;
            x.value = gradeValue.value;
            this_1.dbGrade.addGrade(x).subscribe(function (data) {
                count--;
                if (count === 0) {
                    _this.showSuccess();
                    _this.router.navigate(['/students']);
                }
            }, function (error) {
                _this.showError();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
            });
        };
        var this_1 = this;
        for (var _i = 0, newGradeList_1 = newGradeList; _i < newGradeList_1.length; _i++) {
            var x = newGradeList_1[_i];
            _loop_1(x);
        }
    };
    StudentEditComponent.prototype.addGrade = function () {
        var _this = this;
        var course = this.courseList.filter(function (x) { return x.id.toString() === _this.gradeModel.courseId; })[0];
        this.gradeModel.id = 0;
        this.gradeModel.title = course.title;
        this.gradeList.push(this.gradeModel);
        this.gradeList = this.gradeList.slice();
        this.showMessage('Added grade.');
        this.gradeModel = new _data_model__WEBPACK_IMPORTED_MODULE_4__["Grade"]();
    };
    StudentEditComponent.prototype.validateInput = function () {
        var valid = true;
        if (this.model.studentNumber === undefined || this.model.studentNumber === '') {
            valid = false;
        }
        else if (this.model.firstName === undefined || this.model.firstName === '') {
            valid = false;
        }
        else if (this.model.lastName === undefined || this.model.lastName === '') {
            valid = false;
        }
        else if (this.model.yearLevel === undefined || this.model.yearLevel === '') {
            valid = false;
        }
        else if (this.model.program === undefined || this.model.program === '') {
            valid = false;
        }
        else if (this.model.email === undefined || this.model.email === '') {
            valid = false;
        }
        return valid;
    };
    StudentEditComponent.prototype.loadCourseList = function () {
        var _this = this;
        this.dbCourse.getActiveCourse().subscribe(function (data) { return _this.courseList = data; });
    };
    StudentEditComponent.prototype.loadGradeList = function () {
        var _this = this;
        this.dbGrade.getGrade(this.editId).subscribe(function (data) {
            var _loop_2 = function (d) {
                var gradeValue = _this.gradeValue.filter(function (x) { return x.value.toString() === d.value; })[0];
                d.value = gradeValue.grade.toString();
                _this.gradeList.push(d);
            };
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var d = data_1[_i];
                _loop_2(d);
            }
        });
    };
    StudentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-edit',
            template: __webpack_require__(/*! ./student-edit.component.html */ "./src/app/pages/students/student-edit/student-edit.component.html"),
            styles: [__webpack_require__(/*! ./student-edit.component.scss */ "./src/app/pages/students/student-edit/student-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_api_student_api__WEBPACK_IMPORTED_MODULE_3__["StudentApi"],
            _data_api_course_api__WEBPACK_IMPORTED_MODULE_8__["CourseApi"],
            _data_api_grade_api__WEBPACK_IMPORTED_MODULE_9__["GradeApi"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], StudentEditComponent);
    return StudentEditComponent;
}(_framework_page_x_page_edit_component__WEBPACK_IMPORTED_MODULE_6__["XPageEditComponent"]));



/***/ }),

/***/ "./src/app/pages/students/student-list/student-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/students/student-list/student-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page [headerPanel]=\"headerPanel\" [contentPanel]=\"contentPanel\" [headerText]=\"'Student List'\"></app-page>\r\n<ng-template #headerPanel>\r\n    <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/student-entry\">Add</button>\r\n</ng-template>\r\n\r\n<ng-template #contentPanel>\r\n    <ngx-datatable\r\n            class=\"bootstrap\"\r\n            [rows]=\"rows | async\"\r\n            [loadingIndicator]=\"loadingIndicator\"\r\n            [columns]=\"columns\"\r\n            [columnMode]=\"'force'\"\r\n            [limit]=\"10\"\r\n            [rowHeight]=\"'auto'\"\r\n            [headerHeight]=\"35\"\r\n            [footerHeight]=\"40\"\r\n            [reorderable]=\"reorderable\">\r\n    </ngx-datatable>\r\n</ng-template>\r\n\r\n<ng-template #actionsTemplate class=\"row-actions\" let-row=\"row\" let-value=\"value\">\r\n    <button md-icon-button (click)=\"edit(row.id)\">\r\n        <i class=\"fa fa-edit\"></i>\r\n    </button>\r\n    <button md-icon-button (click)=\"confirmDelete(row, dialog)\">\r\n        <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n</ng-template>\r\n\r\n<ng-template #dialog let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete selected data?</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"delete()\">Confirm</button>\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Cancel</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #alertTemplate let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>{{alertMessage}}</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">OK</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/students/student-list/student-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/students/student-list/student-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnRzL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/students/student-list/student-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/students/student-list/student-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _data_api_student_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/api/student.api */ "./src/app/data/api/student.api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _framework_page_x_page_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/page/x-page-edit.component */ "./src/app/framework/page/x-page-edit.component.ts");







var StudentListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentListComponent, _super);
    function StudentListComponent(db, activatedRoute, modalService, router) {
        var _this = _super.call(this, modalService, activatedRoute, 'Student') || this;
        _this.db = db;
        _this.activatedRoute = activatedRoute;
        _this.modalService = modalService;
        _this.router = router;
        _this.columns = [];
        _this.loadingIndicator = true;
        _this.reorderable = true;
        _this.loadList();
        return _this;
    }
    StudentListComponent.prototype.ngOnInit = function () {
        this.columns = [
            { prop: 'studentNumber', name: 'Student Number' },
            { prop: 'firstName', name: 'First Name' },
            { prop: 'lastName', name: 'Last Name' },
            { prop: 'id', name: 'Actions', cellTemplate: this.actionsTemplate }
        ];
    };
    StudentListComponent.prototype.loadList = function () {
        this.rows = this.db.getStudents();
    };
    StudentListComponent.prototype.edit = function (value) {
        this.router.navigate(['/student-entry'], { queryParams: { id: value } });
    };
    StudentListComponent.prototype.delete = function () {
        var _this = this;
        this.confirmModal.close();
        this.db.deleteStudent(this.currentModel).subscribe(function (data) {
            _this.showDeleted();
            _this.loadList();
            return true;
        }, function (error) {
            _this.showError();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/pages/students/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.scss */ "./src/app/pages/students/student-list/student-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_api_student_api__WEBPACK_IMPORTED_MODULE_3__["StudentApi"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StudentListComponent);
    return StudentListComponent;
}(_framework_page_x_page_edit_component__WEBPACK_IMPORTED_MODULE_6__["XPageEditComponent"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    //apiUrl: 'http://localhost:8002/profiler-api/'
    apiUrl: 'https://imjustpureblood.ml/profiler-api/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\00357\Documents\Documents\MIS\Thesis\profiler-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map