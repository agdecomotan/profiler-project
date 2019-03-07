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
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _framework_nav_x_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./framework/nav/x-nav.component */ "./src/app/framework/nav/x-nav.component.ts");
/* harmony import */ var _framework_footer_x_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./framework/footer/x-footer.component */ "./src/app/framework/footer/x-footer.component.ts");
/* harmony import */ var _framework_page_x_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./framework/page/x-page.component */ "./src/app/framework/page/x-page.component.ts");
/* harmony import */ var _data_service_base_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data/service/base-service */ "./src/app/data/service/base-service.ts");
/* harmony import */ var _data_api_student_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data/api/student.api */ "./src/app/data/api/student.api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/main.component */ "./src/app/pages/main.component.ts");
/* harmony import */ var _pages_students_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/students/student-list/student-list.component */ "./src/app/pages/students/student-list/student-list.component.ts");
/* harmony import */ var _pages_students_student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/students/student-edit/student-edit.component */ "./src/app/pages/students/student-edit/student-edit.component.ts");
/* harmony import */ var _pages_course_tracks_course_track_list_course_track_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/course-tracks/course-track-list/course-track-list.component */ "./src/app/pages/course-tracks/course-track-list/course-track-list.component.ts");
/* harmony import */ var _pages_reports_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/reports/report-list/report-list.component */ "./src/app/pages/reports/report-list/report-list.component.ts");
/* harmony import */ var _pages_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/profile/profile-detail/profile-detail.component */ "./src/app/pages/profile/profile-detail/profile-detail.component.ts");
/* harmony import */ var _pages_profile_profile_entry_profile_entry_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/profile/profile-entry/profile-entry.component */ "./src/app/pages/profile/profile-entry/profile-entry.component.ts");
/* harmony import */ var _pages_profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/profile/profile-list/profile-list.component */ "./src/app/pages/profile/profile-list/profile-list.component.ts");
/* harmony import */ var _pages_profile_profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/profile/profile-update/profile-update.component */ "./src/app/pages/profile/profile-update/profile-update.component.ts");
/* harmony import */ var _pages_administration_administration_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/administration/administration.component */ "./src/app/pages/administration/administration.component.ts");
/* harmony import */ var _data_api_user_api__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./data/api/user.api */ "./src/app/data/api/user.api.ts");
/* harmony import */ var _data_api_course_api__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./data/api/course.api */ "./src/app/data/api/course.api.ts");








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
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _pages_main_component__WEBPACK_IMPORTED_MODULE_18__["MainComponent"],
                _framework_nav_x_nav_component__WEBPACK_IMPORTED_MODULE_12__["XNavComponent"],
                _framework_footer_x_footer_component__WEBPACK_IMPORTED_MODULE_13__["XFooterComponent"],
                _framework_page_x_page_component__WEBPACK_IMPORTED_MODULE_14__["XPageComponent"],
                _pages_students_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_19__["StudentListComponent"],
                _pages_students_student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_20__["StudentEditComponent"],
                _pages_course_tracks_course_track_list_course_track_list_component__WEBPACK_IMPORTED_MODULE_21__["CourseTrackListComponent"],
                _pages_reports_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_22__["ReportListComponent"],
                _pages_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_23__["ProfileDetailComponent"],
                _pages_profile_profile_entry_profile_entry_component__WEBPACK_IMPORTED_MODULE_24__["ProfileEntryComponent"],
                _pages_profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_25__["ProfileListComponent"],
                _pages_profile_profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_26__["ProfileUpdateComponent"],
                _pages_administration_administration_component__WEBPACK_IMPORTED_MODULE_27__["AdministrationComponent"]
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
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [
                _data_service_base_service__WEBPACK_IMPORTED_MODULE_15__["BaseService"],
                _data_api_student_api__WEBPACK_IMPORTED_MODULE_16__["StudentApi"],
                _data_api_user_api__WEBPACK_IMPORTED_MODULE_28__["UserApi"],
                _data_api_course_api__WEBPACK_IMPORTED_MODULE_29__["CourseApi"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
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















var routes = [
    {
        path: '',
        component: _pages_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
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
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
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
/*! exports provided: Student, Course, Grade, User, Profile, Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
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

module.exports = "<nav class=\"navbar navbar-expand-lg\" color-on-scroll=\"300\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-translate\">\r\n      <a class=\"navbar-brand\">Track Profiler</a>\r\n      <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n        <span class=\"navbar-toggler-bar\"></span>\r\n        <span class=\"navbar-toggler-bar\"></span>\r\n        <span class=\"navbar-toggler-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a href=\"#\" class=\"nav-link\" routerLink=\"/profiles\"><i class=\"nc-icon nc-layout-11\"></i>Profile</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#\" class=\"nav-link\" routerLink=\"/students\"><i class=\"nc-icon nc-layout-11\"></i>Student</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#\" class=\"nav-link\" routerLink=\"/course-tracks\"><i class=\"nc-icon nc-layout-11\"></i>Course Track</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#\" class=\"nav-link\" routerLink=\"/reports\"><i class=\"nc-icon nc-layout-11\"></i>Reports</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"#\" class=\"nav-link\" routerLink=\"/administration\"><i class=\"nc-icon nc-layout-11\"></i>Administration</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/framework/nav/x-nav.component.scss":
/*!****************************************************!*\
  !*** ./src/app/framework/nav/x-nav.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background: #336699; }\n\n.navbar .navbar-brand,\n.navbar .navbar-nav .nav-item .nav-link {\n  color: #ffffff; }\n\n.navbar .navbar-toggler .navbar-toggler-bar {\n  background: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWV3b3JrL25hdi9DOlxcVXNlcnNcXDAwMzU3XFxEb2N1bWVudHNcXERvY3VtZW50c1xcTUlTXFxUaGVzaXNcXHByb2ZpbGVyLXByb2plY3Qvc3JjXFxhcHBcXGZyYW1ld29ya1xcbmF2XFx4LW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZnJhbWV3b3JrL25hdi9DOlxcVXNlcnNcXDAwMzU3XFxEb2N1bWVudHNcXERvY3VtZW50c1xcTUlTXFxUaGVzaXNcXHByb2ZpbGVyLXByb2plY3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0h1QixFQUFBOztBRE16Qjs7RUFFRSxjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mcmFtZXdvcmsvbmF2L3gtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnRcIjtcclxuXHJcbi5uYXZiYXJ7XHJcbiAgYmFja2dyb3VuZDogJHgtZGVmYXVsdC1jb2xvcjtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLWJyYW5kLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmt7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItYmFye1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiIsIiR4LWRlZmF1bHQtY29sb3I6ICMzMzY2OTk7Il19 */"

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


var XNavComponent = /** @class */ (function () {
    function XNavComponent(element) {
        this.element = element;
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
        //this.confirmModal = this.modalService.open(dialog);
    };
    XNavComponent.prototype.logout = function () {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
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
        this.alertMessage = this.editMode ? this.modelName + ' updated successfully.' : this.modelName + ' added successfully.';
        this.showDialog();
    };
    XPageEditComponent.prototype.showDeleted = function () {
        this.alertMessage = this.modelName + ' deleted successfully.';
        this.showDialog();
    };
    XPageEditComponent.prototype.showValidationError = function () {
        this.alertMessage = 'Error: Some fields are empty.';
        this.showDialog();
    };
    XPageEditComponent.prototype.showError = function () {
        this.alertMessage = 'Error encountered.';
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

module.exports = "<app-page [headerPanel]=\"headerPanel\" [contentPanel]=\"contentPanel\" [headerText]=\"'Administration'\"></app-page>\r\n<ng-template #headerPanel>\r\n    <button type=\"button\" *ngIf=\"currentTab == 'ngb-tab-1' || currentTab == 'ngb-tab-2'\" [disabled]=\"!disabled\" class=\"btn btn-secondary\" (click)=\"new()\">New</button>\r\n    <button type=\"button\" *ngIf=\"currentTab == 'ngb-tab-1' || currentTab == 'ngb-tab-2'\" [disabled]=\"disabled\" class=\"btn btn-secondary\" (click)=\"save()\">Save</button>\r\n    <button type=\"button\" *ngIf=\"currentTab == 'ngb-tab-1' || currentTab == 'ngb-tab-2'\" [disabled]=\"disabled\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\r\n</ng-template>\r\n\r\n<ng-template #contentPanel>\r\n    <ngb-tabset [justify]=\"'left'\" (tabChange)=\"tabChange($event)\">\r\n        <ngb-tab title=\"Configuration\" >\r\n            <ng-template ngbTabContent >\r\n                <div class=\"items-panel\">\r\n                    <!--<div>-->\r\n                        <!--<label>First Name</label>-->\r\n                        <!--<input type=\"text\" class=\"form-control\" [(ngModel)]=\"userModel.firstName\" placeholder=\"First Name\">-->\r\n                    <!--</div>-->\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Users\">\r\n            <ng-template ngbTabContent >\r\n                <div class=\"content-panel\">\r\n                    <div class=\"items-panel\">\r\n                        <div>\r\n                            <label>First Name</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"userModel.firstName\" placeholder=\"First Name\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Last Name</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"userModel.lastName\" placeholder=\"Last Name\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Position</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"userModel.position\" placeholder=\"Position\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Email</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" type=\"email\" [(ngModel)]=\"userModel.email\" placeholder=\"Email\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Username</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"userModel.username\" placeholder=\"Username\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Password</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" type=\"password\" [(ngModel)]=\"userModel.password\" placeholder=\"Password\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"items-panel\">\r\n                        <ngx-datatable\r\n                                class=\"bootstrap\"\r\n                                [rows]=\"userRows | async\"\r\n                                [loadingIndicator]=\"true\"\r\n                                [columns]=\"userColumns\"\r\n                                [columnMode]=\"'force'\"\r\n                                [limit]=\"10\"\r\n                                [rowHeight]=\"'auto'\"\r\n                                [headerHeight]=\"40\"\r\n                                [footerHeight]=\"40\">\r\n                        </ngx-datatable>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Courses\">\r\n            <ng-template ngbTabContent >\r\n                <div class=\"content-panel\">\r\n                    <div class=\"items-panel\">\r\n                        <div>\r\n                            <label>Course Number</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"courseModel.courseNumber\" placeholder=\"Course Number\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Title</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"courseModel.title\" placeholder=\"Title\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Specialization</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"courseModel.specialization\" placeholder=\"Specialization\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Credit</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"courseModel.credit\" placeholder=\"Credit\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Active</label>\r\n                            <input type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"courseModel.active\" placeholder=\"Active\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"items-panel\">\r\n                        <ngx-datatable\r\n                                class=\"bootstrap\"\r\n                                [rows]=\"courseRows | async\"\r\n                                [loadingIndicator]=\"true\"\r\n                                [columns]=\"courseColumns\"\r\n                                [columnMode]=\"'force'\"\r\n                                [limit]=\"10\"\r\n                                [rowHeight]=\"'auto'\"\r\n                                [headerHeight]=\"40\"\r\n                                [footerHeight]=\"40\">\r\n                        </ngx-datatable>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</ng-template>\r\n\r\n<ng-template #dialog let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete selected data?</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"delete()\">Confirm</button>\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Cancel</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #actionsTemplate class=\"row-actions\" let-row=\"row\" let-value=\"value\">\r\n    <button md-icon-button [disabled]=\"!disabled\" (click)=\"edit(row.id)\">\r\n        <i class=\"fa fa-edit\"></i>\r\n    </button>\r\n    <button md-icon-button [disabled]=\"!disabled\" (click)=\"confirmDelete(row, dialog)\">\r\n        <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n</ng-template>\r\n\r\n<ng-template #alertTemplate let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>{{alertMessage}}</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">OK</button>\r\n    </div>\r\n</ng-template>"

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









var AdministrationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdministrationComponent, _super);
    function AdministrationComponent(userApi, courseApi, activatedRoute, modalService) {
        var _this = _super.call(this, modalService, activatedRoute, '') || this;
        _this.userApi = userApi;
        _this.courseApi = courseApi;
        _this.activatedRoute = activatedRoute;
        _this.modalService = modalService;
        _this.userColumns = [];
        _this.courseColumns = [];
        _this.userModel = new _data_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        _this.courseModel = new _data_model__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        _this.loadUserList();
        _this.loadCourseList();
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
    };
    AdministrationComponent.prototype.loadUserList = function () {
        this.disabled = true;
        this.userRows = this.userApi.getUsers();
    };
    AdministrationComponent.prototype.loadCourseList = function () {
        this.disabled = true;
        this.courseRows = this.courseApi.getCourses();
    };
    AdministrationComponent.prototype.delete = function () {
        var _this = this;
        this.confirmModal.close();
        if (this.currentTab.indexOf('ngb-tab-1') >= 0) {
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
        else if (this.currentTab.indexOf('ngb-tab-2') >= 0) {
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
        if (this.currentTab.indexOf('ngb-tab-1') >= 0) {
            this.editUser(id);
        }
        else if (this.currentTab.indexOf('ngb-tab-2') >= 0) {
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
        if (this.currentTab.indexOf('ngb-tab-1') >= 0) {
            this.saveUser();
        }
        else if (this.currentTab.indexOf('ngb-tab-2') >= 0) {
            this.saveCourse();
        }
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

module.exports = "<app-page [headerPanel]=\"headerPanel\" [contentPanel]=\"contentPanel\" [headerText]=\"'Course Track'\"></app-page>\r\n<ng-template #headerPanel>\r\n    <select class=\"form-control\">\r\n        <option value=\"\" disabled selected>Year Admitted to Track</option>\r\n        <option value=\"2018\">2018</option>\r\n        <option value=\"2019\">2019</option>\r\n    </select>\r\n</ng-template>\r\n\r\n<ng-template #contentPanel>\r\n    <ngb-tabset [justify]=\"'left'\">\r\n        <ngb-tab title=\"Software Development\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"rows | async\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Distributed Systems\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"rows | async\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Multimedia Studies\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"rows | async\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</ng-template>"

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
/* harmony import */ var _data_service_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/service/base-service */ "./src/app/data/service/base-service.ts");



var CourseTrackListComponent = /** @class */ (function () {
    function CourseTrackListComponent(db) {
        this.db = db;
        this.columns = [
            { prop: 'title', name: 'Product Name' },
            { prop: 'description', name: 'Description' },
            { prop: 'category', name: 'Category' }
        ];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.loadList();
    }
    CourseTrackListComponent.prototype.loadList = function () {
        this.rows = this.db.getProducts();
    };
    CourseTrackListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-track-list.component.html */ "./src/app/pages/course-tracks/course-track-list/course-track-list.component.html"),
            styles: [__webpack_require__(/*! ./course-track-list.component.scss */ "./src/app/pages/course-tracks/course-track-list/course-track-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]])
    ], CourseTrackListComponent);
    return CourseTrackListComponent;
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

module.exports = ""

/***/ }),

/***/ "./src/app/pages/profile/profile-entry/profile-entry.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/profile-entry/profile-entry.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS1lbnRyeS9wcm9maWxlLWVudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"

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


var ProfileEntryComponent = /** @class */ (function () {
    function ProfileEntryComponent() {
    }
    ProfileEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-entry',
            template: __webpack_require__(/*! ./profile-entry.component.html */ "./src/app/pages/profile/profile-entry/profile-entry.component.html"),
            styles: [__webpack_require__(/*! ./profile-entry.component.scss */ "./src/app/pages/profile/profile-entry/profile-entry.component.scss")]
        })
    ], ProfileEntryComponent);
    return ProfileEntryComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile-list/profile-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/profile-list/profile-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page [headerPanel]=\"headerPanel\" [contentPanel]=\"contentPanel\" [headerText]=\"'Profiles'\"></app-page>\r\n<ng-template #headerPanel>\r\n    <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/profile-entry\">Add</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\">Profile</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\">Email Result</button>\r\n</ng-template>\r\n\r\n<ng-template #contentPanel>\r\n    <ngb-tabset [justify]=\"'left'\">\r\n        <ngb-tab title=\"All\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"rows | async\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Stage 1\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"rows | async\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Stage 2\">\r\n            <ng-template ngbTabContent >\r\n                <ngx-datatable\r\n                        class=\"bootstrap\"\r\n                        [rows]=\"rows | async\"\r\n                        [loadingIndicator]=\"loadingIndicator\"\r\n                        [columns]=\"columns\"\r\n                        [columnMode]=\"'force'\"\r\n                        [limit]=\"8\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [headerHeight]=\"40\"\r\n                        [footerHeight]=\"40\"\r\n                        [reorderable]=\"reorderable\">\r\n                </ngx-datatable>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/profile/profile-list/profile-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/profile-list/profile-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS1saXN0L3Byb2ZpbGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _data_service_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/service/base-service */ "./src/app/data/service/base-service.ts");



var ProfileListComponent = /** @class */ (function () {
    function ProfileListComponent(db) {
        this.db = db;
        this.columns = [
            { prop: 'title', name: 'Product Name' },
            { prop: 'description', name: 'Description' },
            { prop: 'category', name: 'Category' }
        ];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.loadList();
    }
    ProfileListComponent.prototype.loadList = function () {
        this.rows = this.db.getProducts();
    };
    ProfileListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-list',
            template: __webpack_require__(/*! ./profile-list.component.html */ "./src/app/pages/profile/profile-list/profile-list.component.html"),
            styles: [__webpack_require__(/*! ./profile-list.component.scss */ "./src/app/pages/profile/profile-list/profile-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]])
    ], ProfileListComponent);
    return ProfileListComponent;
}());



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

module.exports = "<app-page [contentPanel]=\"contentPanel\"></app-page>\r\n\r\n<ng-template #contentPanel>\r\n    <div class=\"widget-container\">\r\n        <div class=\"item\"><nvd3 [options]=\"options\" [data]=\"data\"></nvd3></div>\r\n        <div class=\"item\"><nvd3 [options]=\"options\" [data]=\"data\"></nvd3></div>\r\n        <div class=\"item\"><nvd3 [options]=\"options\" [data]=\"data\"></nvd3></div>\r\n        <div class=\"item\"><nvd3 [options]=\"options\" [data]=\"data\"></nvd3></div>\r\n    </div>\r\n</ng-template>"

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


var ReportListComponent = /** @class */ (function () {
    function ReportListComponent() {
        this.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
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
        this.data = [
            {
                key: "P60-1",
                y: 256
            },
            {
                key: "P60-2",
                y: 445
            },
            {
                key: "P40",
                y: 225
            },
            {
                key: "P73",
                y: 127
            },
            {
                key: "P71",
                y: 128
            }
        ];
    }
    ReportListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-list',
            template: __webpack_require__(/*! ./report-list.component.html */ "./src/app/pages/reports/report-list/report-list.component.html"),
            styles: [__webpack_require__(/*! ./report-list.component.scss */ "./src/app/pages/reports/report-list/report-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<app-page [headerPanel]=\"headerPanel\" [contentPanel]=\"contentPanel\" [headerText]=\"pageTitle\"></app-page>\r\n<ng-template #headerPanel>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"save()\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/students\">Cancel</button>\r\n</ng-template>\r\n\r\n<ng-template #contentPanel>\r\n    <ngb-tabset [justify]=\"'left'\">\r\n        <ngb-tab title=\"Details\">\r\n            <ng-template ngbTabContent >\r\n                <div class=\"content-panel\">\r\n                    <div class=\"items-panel\">\r\n                        <!--<div *ngIf=\"name.invalid && (name.dirty || name.touched)\"-->\r\n                             <!--class=\"alert alert-danger\">-->\r\n                            <!--<div *ngIf=\"name.errors.required\">-->\r\n                                <!--Name is required.-->\r\n                            <!--</div>-->\r\n                        <!--</div>-->\r\n                        <div>\r\n                            <label>Student Number</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.studentNumber\" required\r\n                                  #name=\"ngModel\">\r\n                        </div>\r\n                        <div>\r\n                            <label>First Name</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.firstName\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Last Name</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.lastName\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Year Level</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.yearLevel\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Program</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.program\">\r\n                        </div>\r\n                        <div>\r\n                            <label>Email</label>\r\n                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"model.email\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Grade\">\r\n            <ng-template ngbTabContent>\r\n                <div class=\"content-panel\">\r\n                    <div class=\"items-panel\">\r\n                        <label>Course</label>\r\n                        <select class=\"form-control\" [(ngModel)]=\"gradeModel.courseId\">\r\n                            <option>Event</option>\r\n                            <option>Food</option>\r\n                            <option>Product</option>\r\n                            <option>Travel</option>\r\n                            <option>Invite</option>\r\n                            <option>Graphics</option>\r\n                        </select>\r\n\r\n                        <label>Grade</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"gradeModel.value\">\r\n\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-block\">Add</button>\r\n                    </div>\r\n                    <div class=\"items-panel\">\r\n                        <ngx-datatable\r\n                                class=\"bootstrap\"\r\n                                [rows]=\"rows | async\"\r\n                                [loadingIndicator]=\"loadingIndicator\"\r\n                                [columns]=\"columns\"\r\n                                [columnMode]=\"'force'\"\r\n                                [limit]=\"5\"\r\n                                [rowHeight]=\"'auto'\"\r\n                                [headerHeight]=\"40\"\r\n                                [footerHeight]=\"40\"\r\n                                [reorderable]=\"reorderable\">\r\n                        </ngx-datatable>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</ng-template>\r\n\r\n<ng-template #alertTemplate let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <p>{{alertMessage}}</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">OK</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/students/student-edit/student-edit.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/students/student-edit/student-edit.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZGVudHMvc3R1ZGVudC1lZGl0L0M6XFxVc2Vyc1xcMDAzNTdcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxNSVNcXFRoZXNpc1xccHJvZmlsZXItcHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXHN0dWRlbnRzXFxzdHVkZW50LWVkaXRcXHN0dWRlbnQtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZGVudHMvc3R1ZGVudC1lZGl0L3N0dWRlbnQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"

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








var StudentEditComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentEditComponent, _super);
    function StudentEditComponent(db, activatedRoute, modalService, router) {
        var _this = _super.call(this, modalService, activatedRoute, 'Student') || this;
        _this.db = db;
        _this.activatedRoute = activatedRoute;
        _this.modalService = modalService;
        _this.router = router;
        _this.columns = [
            { prop: 'title', name: 'Course' },
            { prop: 'category', name: 'Grade' }
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
        }
        return _this;
    }
    StudentEditComponent.prototype.save = function () {
        var _this = this;
        if (this.validateInput()) {
            if (this.editMode) {
                this.db.updateStudent(this.model).subscribe(function (data) {
                    _this.showSuccess();
                    _this.router.navigate(['/students']);
                    return true;
                }, function (error) {
                    _this.showError();
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
                });
            }
            else {
                this.db.addStudent(this.model).subscribe(function (data) {
                    _this.showSuccess();
                    _this.router.navigate(['/students']);
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
    StudentEditComponent.prototype.validateInput = function () {
        if (this.model.studentNumber === undefined || this.model.studentNumber === '') {
            return false;
        }
        if (this.model.firstName === undefined || this.model.firstName === '') {
            return false;
        }
        if (this.model.lastName === undefined || this.model.lastName === '') {
            return false;
        }
        if (this.model.yearLevel === undefined || this.model.yearLevel === '') {
            return false;
        }
        if (this.model.program === undefined || this.model.program === '') {
            return false;
        }
        if (this.model.email === undefined || this.model.email === '') {
            return false;
        }
        else {
            return true;
        }
    };
    StudentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-edit',
            template: __webpack_require__(/*! ./student-edit.component.html */ "./src/app/pages/students/student-edit/student-edit.component.html"),
            styles: [__webpack_require__(/*! ./student-edit.component.scss */ "./src/app/pages/students/student-edit/student-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_api_student_api__WEBPACK_IMPORTED_MODULE_3__["StudentApi"],
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
        _this.rowValue = [
            { studentNumber: 'studentNumber', firstName: 'firstName', lastName: 'lastName', id: 2 }
        ];
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