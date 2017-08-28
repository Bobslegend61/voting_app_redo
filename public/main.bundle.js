webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mainpage_mainpage_component__ = __webpack_require__("../../../../../src/app/components/mainpage/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_create_poll_create_poll_component__ = __webpack_require__("../../../../../src/app/components/create-poll/create-poll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_single_view_single_view_component__ = __webpack_require__("../../../../../src/app/components/single-view/single-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_bar_chart_bar_chart_component__ = __webpack_require__("../../../../../src/app/components/bar-chart/bar-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pie_chart_pie_chart_component__ = __webpack_require__("../../../../../src/app/components/pie-chart/pie-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_error_page_error_page_component__ = __webpack_require__("../../../../../src/app/components/error-page/error-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_model_service__ = __webpack_require__("../../../../../src/app/services/model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guard_guard_service__ = __webpack_require__("../../../../../src/app/guard/guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// COMPONENTS











// SERVICES



// define routes
var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_7__components_mainpage_mainpage_component__["a" /* MainpageComponent */] },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: "createpoll", component: __WEBPACK_IMPORTED_MODULE_11__components_create_poll_create_poll_component__["a" /* CreatePollComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guard_guard_service__["a" /* AuthGuard */]] },
    { path: "view/:username", component: __WEBPACK_IMPORTED_MODULE_12__components_single_view_single_view_component__["a" /* SingleViewComponent */] },
    { path: "profile/:username", component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guard_guard_service__["a" /* AuthGuard */]] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_16__components_error_page_error_page_component__["a" /* ErrorPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_mainpage_mainpage_component__["a" /* MainpageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_create_poll_create_poll_component__["a" /* CreatePollComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_single_view_single_view_component__["a" /* SingleViewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_bar_chart_bar_chart_component__["a" /* BarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_pie_chart_pie_chart_component__["a" /* PieChartComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_error_page_error_page_component__["a" /* ErrorPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_model_service__["a" /* ModelService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guard_guard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/bar-chart/bar-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bar-chart/bar-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;\">\n  <canvas\n      baseChart\n      [chartType]=\"'bar'\"\n      [datasets]=\"chartData\"\n      [labels]=\"chartLabels\"\n      [options]=\"chartOptions\"\n      [legend]=\"true\"\n      (chartClick)=\"onChartClick($event)\">\n  </canvas>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/bar-chart/bar-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarChartComponent = (function () {
    function BarChartComponent() {
        this.chartOptions = {
            responsive: true
        };
        this.chartData = [];
        this.chartLabels = [];
    }
    BarChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var trying = {
            data: [], label: this.singleTopic.title
        };
        this.singleTopic.options.forEach(function (element) {
            _this.chartLabels.push(element.item);
            trying.data.push(element.count);
        });
        this.chartData.push(trying);
    };
    return BarChartComponent;
}());
BarChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bar-chart',
        template: __webpack_require__("../../../../../src/app/components/bar-chart/bar-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/bar-chart/bar-chart.component.css")],
        inputs: ["singleTopic"]
    }),
    __metadata("design:paramtypes", [])
], BarChartComponent);

//# sourceMappingURL=bar-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-poll/create-poll.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-polls form input:focus, .create-polls form textarea:focus {\r\n    border-color: lightslategrey;\r\n}\r\n\r\n.ng-invalid {\r\n    border-color: #c62828;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-poll/create-poll.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"align-middle loading\">\n  <span class=\"display-3 text-muted\" *ngIf=\"!pollsForm\">Loading...</span>\n</div>\n<div class=\"container create-polls\" *ngIf=\"pollsForm\">\n  <p class=\"h4 text-center text-muted mt-4\">Create Poll</p>  \n  <hr class=\"w-25 bg-dark\">\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  <form class=\"w-75 mx-auto\" [formGroup]=\"pollsForm\" #pollForm (ngSubmit)=\"submitPoll()\">\n    <div class=\"form-group mb-3\">\n      <label for=\"title\">Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Topic title\" formControlName=\"title\">\n      <p class=\"text-danger\" *ngIf=\"pollsForm.controls['title'].hasError('required') && pollsForm.controls['title'].dirty\">* Field is required</p>\n    </div>\n    <div class=\"from-group mb-3\">\n      <label for=\"info\">Info</label>\n      <textarea placeholder=\"A little info about the topic\" id=\"info\" class=\"form-control\" formControlName=\"info\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"options\">Your Options</label>\n      <input type=\"text\" class=\"form-control\" id=\"options\" placeholder=\"Comma (,) seperated please\" formControlName=\"options\">\n      <small id=\"options\" class=\"form-text text-muted\">Comma (,) seperated please</small>\n    </div>\n    <button type=\"submit\" class=\"btn btn-outline-secondary btn-block btn-lg\">Create poll</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-poll/create-poll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_model_service__ = __webpack_require__("../../../../../src/app/services/model.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatePollComponent = (function () {
    function CreatePollComponent(_formBuilder, auth, model, router) {
        this._formBuilder = _formBuilder;
        this.auth = auth;
        this.model = model;
        this.router = router;
        this.username = this.auth.getUsername();
    }
    CreatePollComponent.prototype.ngOnInit = function () {
        this.pollsForm = this._formBuilder.group({
            title: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            info: [],
            options: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
        });
    };
    CreatePollComponent.prototype.submitPoll = function () {
        var _this = this;
        this.errorMessage = null;
        var data = {
            username: this.username,
            title: this.pollsForm.value.title,
            options: this.pollsForm.value.options,
            info: this.pollsForm.value.info
        };
        this.model.createPoll(data).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(["/home"]);
            }
            else {
                _this.errorMessage = data.message;
            }
        }, function (err) {
            _this.errorMessage = "Error reaching database";
        });
    };
    return CreatePollComponent;
}());
CreatePollComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-poll',
        template: __webpack_require__("../../../../../src/app/components/create-poll/create-poll.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-poll/create-poll.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_model_service__["a" /* ModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_model_service__["a" /* ModelService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CreatePollComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-poll.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading lert alert-warning p-5\" role=\"alert\">\n  <i class=\"fa fa-exclamation-triangle fa-3x\" aria-hidden=\"true\"></i>\n  <p class=\"display-3\">404</p>\n  <p>Page not found.</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    return ErrorPageComponent;
}());
ErrorPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error-page',
        template: __webpack_require__("../../../../../src/app/components/error-page/error-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/error-page/error-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorPageComponent);

//# sourceMappingURL=error-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n    background-color: #c62828;\r\n}\r\n\r\nfooter span{\r\n    font-size: 20px;\r\n}\r\n\r\nfooter p {\r\n    color: #fff;\r\n}\r\n\r\nfooter span a {\r\n    color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\"></div>\n<footer class=\"fixed-bottom\">\n  <section class=\"container\" id=\"footer\">\n    <p class=\"text-center pt-2\">fcc-voting &copy; 2017 <span class=\"float-right float-right\"><a href=\"https://github.com/Bobslegend61/voting_app_redo.git\" target=\"_balnk\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a></span></p>\n  </section>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#home a {\r\n    color: #d50000;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"align-middle loading\">\n  <span class=\"display-3 text-muted\" *ngIf=\"!allTopics\">Loading...</span>\n  <span class=\"alert alert-warning\" role=\"alert\" *ngIf=\"initialLoadingError\">{{initialLoadingError}}</span>\n</div>\n<div class=\"container my-3\" id=\"home\" *ngIf=\"allTopics\">\n  <button type=\"button\" class=\"btn btn-light btn-sm btn-block m-3\" routerLink=\"/createpoll\" *ngIf=\"auth.loggedIn()\">Create Poll</button>\n  <div *ngIf=\"allTopics\">\n    <div class=\"row\" *ngFor=\"let item of allTopics.data\">\n      <div class=\"col-sm-12 col-md-6 mb-2\" *ngFor=\"let s of item.topic\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{s.title}} <small class=\"float-right font-italic text-muted\">{{s.date | date}}</small></h4>\n            <p class=\"card-text\">{{s.info}}</p>\n            <a (click)=\"auth.goSingle(item.author, s.title)\" href=\"#\" class=\"btn btn-light\">View</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_model_service__ = __webpack_require__("../../../../../src/app/services/model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import service


var HomeComponent = (function () {
    function HomeComponent(model, auth, router) {
        this.model = model;
        this.auth = auth;
        this.router = router;
        this.initialLoadingError = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.getAllTopics().subscribe(function (data) {
            if (data.success) {
                _this.allTopics = data;
            }
            else {
                _this.initialLoadingError = data.message;
            }
        }, function (err) {
            _this.initialLoadingError = "An error occured: Falled to connect to database. Please check your connection and try again. " + err;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_model_service__["a" /* ModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_model_service__["a" /* ModelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mainpage/mainpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-page {\r\n    font-size: 1.2em;\r\n}\r\n\r\n.fa-free-code-camp {\r\n    color: green;\r\n}\r\n\r\n#main-page a{\r\n    color: #d32f2f;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mainpage/mainpage.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"main-page\">\n  <div class=\"container\">\n    <div class=\"jumbotron m-3\">\n        <div class=\"text-center pt-2\"><i class=\"fa fa-free-code-camp fa-2x\" aria-hidden=\"true\"></i></div>\n        <p class=\"pt-4 lead\">This is a basejump from <a href=\"https://www.freecodecamp.org\" target=\"_blank\">Freecodecamp.</a> Freecodecamp is an online platform where you can learn web development(programming) for free.</p>\n        <p class=\"lead\">It covers the basics from frontend to data visualization to backend and other computer science topics as well as frameworks. If you're interested in learning for fun or a change of career, click the link <i class=\"fa fa-hand-o-up\"></i> above.</p>\n        <p>Click <a routerLink=\"/home\">Here</a> to explore the features of this app.</p>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/mainpage/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainpageComponent = (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    return MainpageComponent;
}());
MainpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mainpage',
        template: __webpack_require__("../../../../../src/app/components/mainpage/mainpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/mainpage/mainpage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainpageComponent);

//# sourceMappingURL=mainpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n    font-size: 1.1em;\r\n}\r\n\r\nnav button {\r\n    background-color: #e57373;\r\n}\r\n\r\nnav button:hover {\r\n    background-color: #e57373 ;\r\n    color: #fff;\r\n    border: 1px solid #c62828;\r\n}\r\n\r\ninput.ng-pristine, input.ng-invalid {\r\n    border-left: 5px solid #ef9a9a;\r\n}\r\n\r\ninput.ng-valid {\r\n    border-left: 5px solid #a5d6a7;\r\n}\r\n\r\n/* MODAL */\r\n\r\n.modal button.btn {\r\n    background-color: #c62828;\r\n}\r\n\r\n.modal button.btn:hover {\r\n    border: 1px solid #fff;\r\n}\r\n\r\n.modal input:focus {\r\n    /* outline-color: #ef9a9a;; */\r\n    border-color: #ef9a9a;;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #c62828;\">\n  <a class=\"navbar-brand text-white\" routerLink=\"/\">fcc-voting</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.loggedIn()\">\n        <a class=\"nav-link\" routerLink=\"/profile/{{username}}\" routerLinkActive=\"active\">Profile</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!auth.loggedIn()\">\n        <a class=\"nav-link\" routerLink=\"/signup\" routerLinkActive=\"active\" data-toggle=\"modal\" data-target=\"#exampleModal\">Sign Up</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav mr-5\" *ngIf=\"auth.loggedIn()\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{username | uppercase}}\n        </a>\n        <div class=\"dropdown-menu p-1\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\">Logout</a>\n        </div>\n      </li>\n    </ul>\n    <div class=\"alert alert-danger m-0 mr-1 p-0\" role=\"alert\" *ngIf=\"loginErrorMessage\">\n        {{loginErrorMessage}}\n    </div>\n    <form class=\"form-inline my-2 my-lg-0\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\" *ngIf=\"!auth.loggedIn()\">\n      <input class=\"form-control mr-sm-2\" #nameRef=\"ngModel\" name=\"username\" type=\"text\" placeholder=\"username\" ngModel required>\n      <input class=\"form-control mr-sm-2\" #pwdRef=\"ngModel\" name=\"password\" type=\"password\" placeholder=\"password\" ngModel required>\n      <button class=\"btn my-2 my-sm-0\" type=\"submit\" [disabled]=\"nameRef.invalid || pwdRef.invalid\">Login <i *ngIf=\"loginSpin\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i></button>\n    </form>\n  </div>\n</nav>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">SIGN UP</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"resetForm()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form [formGroup] = \"signUpForm\" (ngSubmit)=\"signup()\" novalidate>\n              <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\" *ngIf=\"successMessage\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                  {{successMessage}} <a href=\"#\" class=\"alert-link\" data-dismiss=\"modal\" aria-label=\"Close\" ><strong>Login Here</strong></a>\n              </div>\n              <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" *ngIf=\"errorMessage\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <strong>Alert!</strong> {{errorMessage}}\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">username</label>\n                  <input type=\"text\" #refName class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter username\" formControlName=\"username\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" formControlName=\"password\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Confirm Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Confirm\" formControlName=\"confirmPassword\">\n              </div>\n                <button type=\"submit\" class=\"btn text-white float-right\" [disabled]=\"!signUpForm.valid\">Submit <i *ngIf=\"signUpSpin\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i></button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_model_service__ = __webpack_require__("../../../../../src/app/services/model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(auth, model, _formBuilder, route, router) {
        this.auth = auth;
        this.model = model;
        this._formBuilder = _formBuilder;
        this.route = route;
        this.router = router;
        this.signUpSpin = false;
        this.loginSpin = false;
        this.username = this.auth.getUsername();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.signUpForm = this._formBuilder.group({
            username: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            confirmPassword: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]]
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.username = null;
        localStorage.removeItem("token");
        this.router.navigate(["/home"]);
        return false;
    };
    NavbarComponent.prototype.login = function (value) {
        var _this = this;
        this.loginSpin = true;
        this.model.logIn(value).subscribe(function (data) {
            if (data.success) {
                _this.loginSpin = false;
                _this.loginErrorMessage = null;
                localStorage.setItem("token", data.data.token);
                _this.username = data.data.username;
            }
            else {
                _this.loginSpin = false;
                return _this.loginErrorMessage = data.message;
            }
        }, function (err) {
            _this.loginSpin = false;
            return _this.loginErrorMessage = "Error reaching database";
        });
    };
    NavbarComponent.prototype.resetForm = function () {
        this.errorMessage = null;
        this.successMessage = null;
        this.signUpForm.reset();
    };
    NavbarComponent.prototype.signup = function () {
        var _this = this;
        this.errorMessage = null;
        this.successMessage = null;
        this.signUpSpin = true;
        var userDetails = this.signUpForm.value;
        if (userDetails.password === userDetails.confirmPassword) {
            this.model.signup(userDetails).subscribe(function (data) {
                if (data.success) {
                    _this.successMessage = "You have been successfully registered.";
                    _this.signUpSpin = false;
                }
                else {
                    _this.signUpSpin = false;
                    return _this.errorMessage = data.message;
                }
            }, function (err) {
                _this.signUpSpin = false;
                return _this.errorMessage = "Error reaching server";
            });
        }
        else {
            this.errorMessage = "Password do not match";
            this.signUpSpin = false;
            return false;
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_model_service__["a" /* ModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_model_service__["a" /* ModelService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pie-chart/pie-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pie-chart/pie-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;\">\n  <canvas\n      baseChart\n      [chartType]=\"'pie'\"\n      [datasets]=\"chartData\"\n      [labels]=\"chartLabels\"\n      [options]=\"chartOptions\"\n      [legend]=\"true\"\n      (chartClick)=\"onChartClick($event)\">\n  </canvas>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pie-chart/pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PieChartComponent = (function () {
    function PieChartComponent() {
        this.chartOptions = {
            responsive: true
        };
        this.chartData = [];
        this.chartLabels = [];
    }
    PieChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("PIE");
        var trying = {
            data: [], label: this.singleTopic.title
        };
        this.singleTopic.options.forEach(function (element) {
            _this.chartLabels.push(element.item);
            trying.data.push(element.count);
        });
        this.chartData.push(trying);
    };
    return PieChartComponent;
}());
PieChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pie-chart',
        template: __webpack_require__("../../../../../src/app/components/pie-chart/pie-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pie-chart/pie-chart.component.css")],
        inputs: ["singleTopic"]
    }),
    __metadata("design:paramtypes", [])
], PieChartComponent);

//# sourceMappingURL=pie-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"align-middle loading\">\n  <span class=\"display-3 text-muted\" *ngIf=\"!profile\">Loading...</span>\n  <span class=\"alert alert-warning\" role=\"alert\" *ngIf=\"initialLoadingError\">{{initialLoadingError}}</span>\n</div>\n<div class=\"container mt-3 text-muted\" *ngIf=\"profile\">\n  <h3 class=\"text-center\">{{username | uppercase}}</h3>\n  <h6 class=\"mt-5 text-center \"><i class=\"fa fa-fire text-warning fa-2x\" aria-hidden=\"true\"></i> Your polls <i class=\"fa fa-fire text-warning fa-2x\" aria-hidden=\"true\"></i></h6>\n  <div class=\"alert alert-danger text-center\" role=\"alert\" *ngIf=\"deleteError\">\n    {{deleteError}}\n  </div>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let topic of profile\">{{topic.title}} <button class=\"btn btn-danger btn-sm float-right\" (click)=\"deletePoll(topic.title)\" [disabled]=\"disable\">Delete</button><button class=\"btn btn-primary btn-sm mr-1 float-right\" (click)=\"auth.goSingle(username, topic.title)\">View</button></li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_model_service__ = __webpack_require__("../../../../../src/app/services/model.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(auth, model) {
        this.auth = auth;
        this.model = model;
        this.initialLoadingError = null;
        this.username = this.auth.getUsername();
        this.disable = false;
        this.deleteError = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.getProfile(this.username).subscribe(function (data) {
            if (data.success) {
                _this.profile = data.data.topic;
            }
            else {
                _this.initialLoadingError = data.message;
            }
        }, function (err) {
            _this.initialLoadingError = "An error occured: Falled to connect to database. Please check your connection and try again.";
        });
    };
    ProfileComponent.prototype.deletePoll = function (value) {
        var _this = this;
        this.disable = true;
        var data = {
            username: this.username,
            pollName: value
        };
        this.model.deletePoll(data).subscribe(function (data) {
            _this.disable = false;
            if (data.success) {
                _this.profile = data.data.topic;
            }
            else {
                _this.deleteError = data.message;
            }
        }, function (err) {
            _this.disable = false;
            _this.deleteError = "Error reach database";
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_model_service__["a" /* ModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_model_service__["a" /* ModelService */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/single-view/single-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/single-view/single-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"align-middle loading\">\n  <span class=\"display-3 text-muted\" *ngIf=\"!singleTopic\">Loading...</span>\n  <span class=\"alert alert-warning\" role=\"alert\" *ngIf=\"initialLoadingError\">{{initialLoadingError}}</span>\n</div>\n<div class=\"container mt-2\" *ngIf=\"singleTopic\">\n    <div class=\"card text-dark bg-light mb-3\" *ngIf=\"singleTopic\">\n        <div class=\"card-header text-center\">{{singleTopic.title}}</div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title text-center\">{{singleTopic.info}}</h4>\n          <div class=\"card-text row\">\n            <div class=\"col-sm-12 sm-push-12 col-md-4\">\n              <p class=\"text-info\">Click <i class=\"fa fa-hand-o-down\" aria-hidden=\"true\"></i> to vote</p>\n              <span class=\"text-center d-block\" *ngIf=\"voteSpinner\"><i class=\"fa fa-circle-o-notch fa-spin\" aria-hidden=\"true\"></i></span>\n              <span class=\"text-center d-block text-danger\" *ngIf=\"voteErrorMessage\">{{voteErrorMessage}}</span>\n              <div *ngFor=\"let item of singleTopic.options\">\n                  <span class=\"badge badge-pill badge-dark w-100\" (click)=\"vote(item.item)\">{{item.item}} <span class=\"badge badge-secondary float-right\">{{item.count}}</span></span>\n              </div>\n              <form #addFormRef=\"ngForm\" (ngSubmit)=\"addOptions(addFormRef, addFormRef.value)\" *ngIf=\"auth.loggedIn()\">\n                  <div class=\"form-group\">\n                    <label for=\"add\" class=\"text-success\">Add More</label>\n                    <input type=\"text\" name=\"add\" ngModel #addRef=\"ngModel\" class=\"form-control\" placeholder=\"comma (,) seperated please\" required>\n                    <span class=\"text-danger\" *ngIf=\"addRef.invalid && addRef.dirty\">* Required</span>\n                  </div>\n                  <button class=\"btn btn-light btn-sm float-right\">Submit <i *ngIf=\"addOptionsSpin\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i></button>\n                </form>\n            </div>\n            <div class=\"col-sm-12 sm-pull-12 col-md-8\">\n                <button class=\"btn btn-dark btn-sm\" (click)=\"toggleChart()\">Toggle Chart</button>\n                <app-bar-chart [singleTopic]=\"singleTopic\" *ngIf=\"showChart\"></app-bar-chart>\n                <app-pie-chart [singleTopic]=\"singleTopic\" *ngIf=\"!showChart\"></app-pie-chart>\n            </div>\n          </div>\n          <div class=\"mt-4\">\n            <h4>Comments</h4>\n            <div class=\"card mb-3\" *ngFor=\"let comment of singleTopic.comments\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">{{comment.name}}</h4>\n                <p class=\"card-text\">{{comment.said}}</p>\n                <p class=\"card-text\"><small class=\"text-muted\">{{comment.date | date}}</small></p>\n              </div>\n            </div>\n          </div>\n          <div>\n            <h4>Comment</h4>\n            <form class=\"w-75 mt-4\" #commentForm=\"ngForm\" (ngSubmit)=\"submitComment(commentForm, commentForm.value)\">\n                <div *ngIf=\"addCommentErrorMessage\" class=\"alert alert-danger\" role=\"alert\">{{addCommentErrorMessage}}</div>\n              <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" name=\"name\" #nameRef=\"ngModel\" class=\"form-control\" ngModel required>\n                <span class=\"text-danger\" *ngIf=\"nameRef.invalid && nameRef.dirty\">* Field is required</span>\n              </div>\n              {{nameRef.className}}\n              <div class=\"form-group\">\n                <label for=\"comment\">Comment</label>\n                <textarea name=\"comment\" id=\"comment\" #commentTextRef=\"ngModel\" ngModel cols=\"30\" rows=\"10\" class=\"form-control\" required></textarea>\n                <span class=\"text-danger\" *ngIf=\"commentTextRef.invalid && commentTextRef.dirty\">* Field is required</span>\n              </div>\n              <button type=\"submit\" class=\"btn btn-dark float-right\" [disabled]=\"nameRef.invalid || commentTextRef.invalid\">Submit <i *ngIf=\"addCommentSpin\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i></button>\n            </form>\n          </div>\n        </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/single-view/single-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_model_service__ = __webpack_require__("../../../../../src/app/services/model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleViewComponent = (function () {
    function SingleViewComponent(router, route, model, auth) {
        this.router = router;
        this.route = route;
        this.model = model;
        this.auth = auth;
        this.initialLoadingError = null;
        this.showChart = true;
        // spinners and alerts
        this.voteSpinner = false;
        this.addCommentSpin = false;
        this.addOptionsSpin = false;
    }
    SingleViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.getSingleTopic(this.route.snapshot.params["username"], this.route.snapshot.queryParams["topic"]).subscribe(function (data) {
            if (data.success) {
                _this.singleTopic = data.data;
            }
            else {
                _this.initialLoadingError = data.message;
            }
        }, function (err) {
            _this.initialLoadingError = "An error occured: Falled to connect to database. Please check your connection and try again. " + err;
        });
    };
    SingleViewComponent.prototype.ngDoCheck = function () {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        // if(this.singleTopic != this.oldSingleTopic) {
        //   this.chartData = [];
        //   this.chartLabels = [];
        //   let trying = {
        //     data: [], label: this.singleTopic.title
        //   };
        //   this.singleTopic.options.forEach(element => {
        //     this.chartLabels.push(element.item);
        //     trying.data.push(element.count);
        //   });
        //   this.chartData.push(trying);
        //   this.chatType = "pie";
        //   this.oldSingleTopic == this.singleTopic;
        // }
    };
    SingleViewComponent.prototype.toggleChart = function () {
        this.showChart = !this.showChart;
    };
    SingleViewComponent.prototype.submitComment = function (e, value) {
        var _this = this;
        this.addCommentSpin = true;
        this.addCommentErrorMessage = null;
        var data = {
            username: this.route.snapshot.params["username"],
            name: value.name,
            comment: value.comment,
            topic: this.route.snapshot.queryParams["topic"]
        };
        this.model.onComment(data).subscribe(function (data) {
            _this.addCommentSpin = false;
            if (data.success) {
                _this.singleTopic = data.data;
            }
            else {
                _this.addCommentErrorMessage = data.message;
            }
            e.reset();
        }, function (err) {
            _this.addCommentSpin = false;
            _this.addCommentErrorMessage = "Error connecting to database";
        });
    };
    SingleViewComponent.prototype.addOptions = function (e, value) {
        var _this = this;
        this.addOptionsSpin = true;
        this.voteErrorMessage = null;
        var data = {
            username: this.route.snapshot.params["username"],
            options: value.add,
            topic: this.route.snapshot.queryParams["topic"]
        };
        this.model.onAdd(data).subscribe(function (data) {
            _this.addOptionsSpin = false;
            if (data.success) {
                _this.singleTopic = data.data;
                _this.showChart = !_this.showChart;
            }
            else {
                _this.voteErrorMessage = data.message;
            }
            e.reset();
        }, function (err) {
            _this.addOptionsSpin = false;
            _this.voteErrorMessage = "Error connecting to db";
        });
    };
    SingleViewComponent.prototype.vote = function (item) {
        var _this = this;
        this.voteSpinner = true;
        this.voteErrorMessage = null;
        var data = {
            username: this.route.snapshot.params["username"],
            voted: item,
            topic: this.route.snapshot.queryParams["topic"]
        };
        if (localStorage.getItem("votes")) {
            var check = JSON.parse(localStorage.getItem("votes")).find(function (user) {
                return user.username == _this.route.snapshot.params["username"];
            });
            if (check) {
                var voted = check.topic.find(function (topic) {
                    return topic == data.topic;
                });
                if (voted) {
                    this.voteSpinner = false;
                    return this.voteErrorMessage = "You can't vote twice";
                }
            }
        }
        this.model.onVote(data).subscribe(function (data) {
            _this.voteSpinner = false;
            if (data.success) {
                _this.singleTopic = data.data;
                _this.showChart = !_this.showChart;
                if (localStorage.getItem("votes")) {
                    var check = JSON.parse(localStorage.getItem("votes")).find(function (user) {
                        return user.username == _this.route.snapshot.params["username"];
                    });
                    if (check) {
                        var votes = JSON.parse(localStorage.getItem("votes"));
                        for (var i = 0; i < votes.length; i++) {
                            if (votes[i].username == _this.route.snapshot.params["username"]) {
                                votes[i].topic.push(data.data.title);
                            }
                        }
                        localStorage.setItem("votes", JSON.stringify(votes));
                    }
                    else {
                        var votes = JSON.parse(localStorage.getItem("votes"));
                        votes.push({ username: _this.route.snapshot.params["username"], topic: [data.data.title] });
                        localStorage.setItem("votes", JSON.stringify(votes));
                    }
                }
                else {
                    localStorage.setItem("votes", JSON.stringify([{ username: _this.route.snapshot.params["username"], topic: [data.data.title] }]));
                }
            }
            else {
                _this.voteErrorMessage = data.message;
            }
        }, function (err) {
            _this.voteSpinner = false;
            _this.voteErrorMessage = "Error connecting to database. Try again";
        });
    };
    SingleViewComponent.prototype.onChartClick = function (event) {
        console.log(event);
    };
    return SingleViewComponent;
}());
SingleViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-single-view',
        template: __webpack_require__("../../../../../src/app/components/single-view/single-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/single-view/single-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_model_service__["a" /* ModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_model_service__["a" /* ModelService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], SingleViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=single-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/guard/guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['home']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
    }
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.getUsername = function () {
        return localStorage.getItem("token") ? this.jwtHelper.decodeToken(localStorage.getItem("token")).username : null;
    };
    AuthService.prototype.goSingle = function (username, topic) {
        this.router.navigate(["/view/" + username], { queryParams: { topic: topic } });
        return false;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/model.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelService = (function () {
    function ModelService(http) {
        this.http = http;
        this.host = "/";
    }
    // get all topics
    ModelService.prototype.getAllTopics = function () {
        return this.http.get(this.host + "getalltopics").map(function (res) { return res.json(); });
    };
    // create poll
    ModelService.prototype.createPoll = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var token = "JWT " + localStorage.getItem("token");
        headers.append("Authorization", token);
        return this.http.post(this.host + "createpoll", data, { headers: headers }).map(function (res) { return res.json(); });
    };
    // signup
    ModelService.prototype.signup = function (data) {
        return this.http.post(this.host + "signup", data).map(function (res) { return res.json(); });
    };
    // login
    ModelService.prototype.logIn = function (data) {
        return this.http.post(this.host + "login", data).map(function (res) { return res.json(); });
    };
    // single topic
    ModelService.prototype.getSingleTopic = function (username, topic) {
        var data = {
            username: username,
            topic: topic
        };
        return this.http.post(this.host + "getsingletopic", data).map(function (res) { return res.json(); });
    };
    // comment
    ModelService.prototype.onComment = function (data) {
        return this.http.post(this.host + "comment", data).map(function (res) { return res.json(); });
    };
    // add
    ModelService.prototype.onAdd = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var token = "JWT " + localStorage.getItem("token");
        headers.append("Authorization", token);
        return this.http.post(this.host + "add", data, { headers: headers }).map(function (res) { return res.json(); });
    };
    // vote
    ModelService.prototype.onVote = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var token = "JWT " + localStorage.getItem("token");
        headers.append("Authorization", token);
        return this.http.post(this.host + "vote", data, { headers: headers }).map(function (res) { return res.json(); });
    };
    // profile
    ModelService.prototype.getProfile = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var token = "JWT " + localStorage.getItem("token");
        headers.append("Authorization", token);
        return this.http.get(this.host + "profile/" + username, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Delete profile
    ModelService.prototype.deletePoll = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var token = "JWT " + localStorage.getItem("token");
        headers.append("Authorization", token);
        return this.http.delete(this.host + "delete/" + data.username + "?poll=" + data.pollName, { headers: headers }).map(function (res) { return res.json(); });
    };
    return ModelService;
}());
ModelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ModelService);

var _a;
//# sourceMappingURL=model.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map