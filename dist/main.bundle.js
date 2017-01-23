webpackJsonp([0,3],{

/***/ 385:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 385;


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(509);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Robin/programming/portfolio-17/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(672),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/Robin/programming/portfolio-17/src/about.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hi, I\'m Robin, welcome to my site. I\'m a machine learning engineer and front end developer living in Seattle, WA.';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(673),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Robin/programming/portfolio-17/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll__ = __webpack_require__(666);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var appRoutes = [
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Robin/programming/portfolio-17/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__(674),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
//# sourceMappingURL=C:/Users/Robin/programming/portfolio-17/src/projects.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Robin/programming/portfolio-17/src/environment.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Robin/programming/portfolio-17/src/polyfills.js.map

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "h3 {\r\n\tfont-size: 2em;\r\n}\r\n\r\n#about-head {\r\n\tmargin-top: 3rem;\r\n}\r\n\r\n#skills {\r\n  margin-bottom: 3rem;\r\n}\r\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "\r\n.section {\r\n  padding: 8rem 0 7rem;\r\n  text-align: center;\r\n}\r\n\r\nh1 { \r\n  font-size: 34px;\t\r\n  }\r\n\r\n.hero {\r\n  background-size: cover;\r\n  height: 100%;\r\n  padding-bottom: 5rem;\r\n  margin-top: 5rem;\r\n}\r\n\r\n/*navbar*/\r\n\r\nli a {\r\n  text-decoration: none; \r\n}\r\n\r\nnav.main-nav {\r\n  position: fixed;\r\n  text-align: right;\r\n  opacity: 0.7;\r\n  top: 25px;\r\n  left: 5px;\r\n  right: 5px;\r\n  padding-right: 10px;\r\n  margin-bottom: 0;\r\n  z-index: 150;\r\n}\r\n\r\nnav.main-nav ul li {\r\n  font-weight: 500;\r\n  display: inline;\r\n  list-style-type: none;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  position: relative;\r\n  background-color: #ffffff;\r\n}\r\n\r\nnav.main-nav ul li:hover {\r\n  opacity: 0.4;\r\n}\r\n\r\na { \r\n  color: black; \r\n}\r\n\r\n.values {\r\n  background-image: url('../../assets/images/olympic_national_park.jpg');\r\n  background-size: cover;\r\n  min-height: 160px;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.button {\r\n  background-color: green;\r\n  color: #fffff;\r\n  font-size: 0.9em;\r\n}\r\n\r\nh3 {\r\n  font-size: 2em;\r\n}\r\n\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n\r\nfooter a {\r\n  text-decoration: none;\r\n  color:#000;\r\n  opacity: 0.9;\r\n}\r\n\r\nfooter a:hover {\r\n  opacity: 0.3;\r\n}\r\n\r\nfooter .fa {\r\n  width: 40px;\r\n  height: 40px;\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 0 auto;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n#email {\r\n  color: #ffffff;\r\n}\r\n\r\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "h3 {\r\n\tfont-size: 2em;\r\n}\r\n\r\n#projects-head {\r\n\tmargin-top: 3rem;\r\n}\r\n\r\n/*projects*/\r\nh3 {\r\n  font-size: 2em;\r\n}\r\n\r\n#projects {\r\n  background-color: #eee;\r\n}\r\n\r\n#projects-start {\r\n  margin-top: 3rem;\r\n}\r\n\r\n.project-image {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.projects-showcase {\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n/*about*/\r\nh3 {\r\n  font-size: 2em;\r\n}\r\n\r\n\r\n.projects-showcase {\r\n  margin-bottom: 5rem;\r\n}"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div id=\"about-start\" class=\"twelve columns\">\n      <h3>About</h3>  \n        <p>I'm a software developer who loves studying, experimenting with and applying deep learning. I'm passionate about self-driving cars and the benefits they can bring. I also do web development. When away from the code, I climb, run and drink lots of coffee.</p>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"skills\" class=\"container\">\n    <div class=\"four columns value-prop\">\n      <h3>Deep Learning</h3>\n        <p><i class=\"fa fa-graduation-cap fa-2x\" aria-hidden=\"true\"></i>I use a variety of approaches, including convolutional and recurrent neural networks, to teach machines to learn from data. I write code in Python and make use of the fantastic Keras and TensorFlow.</p>\n  </div>\n  <div class=\"four columns value-prop\">  \n    <h3>Computer Vision</h3>\n      <p><i class=\"fa fa-graduation-cap fa-2x\" aria-hidden=\"true\"></i>OpenCV and Matplotlib are good friends I use to pre-process images to make training data more efficient and effective. I apply techniques including grayscale, and Hough Transform.</p> \n  </div>\n  <div class=\"four columns value-prop\">\n    <h3>Front End</h3>\n      <p><i class=\"fa fa-pencil fa-2x\" aria-hidden=\"true\"></i>I use JavaScript, Angular2, HTML5 and CSS3 for coding and designing clean, functional and attractive websites. I use Node.js/Express.js for server-side development.</p>  \n  </div>\n</div>"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <nav class=\"navbar\">\n    <div class=\"thirteen columns\">\n      <nav class=\"main-nav\">\n        <ul class=\"main-nav\">\n          <li class=\"navbar-item\">\n            <a pageScroll href=\"#about-start\" class=\"navbar-link\">About</a>\n          </li>\n          <li class=\"navbar-item\">\n            <a pageScroll href=\"#projects-start\" class=\"navbar-link\">Projects</a>\n          </li>\n          <li class=\"navbar-item\">\n            <a href=\"../../assets/Robin_Stringer_Resume_WD_ML_BT.pdf\" class=\"navbar-link\">Resume</a>\n          </li>                            \n          <li class=\"navbar-item\">\n            <a pageScroll href=\"#contact\" class=\"navbar-link\">Connect</a>\n          </li>  \n        </ul>\n      </nav>\n    </div>\n  </nav>\n</header>   \n\n<div class=\"section hero\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"section-heading\">\n        <h4 class=\"hero-heading\">{{title}}</h4>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"fancy-image\" class=\"section values\">\n</div>\n\n<app-about></app-about>\n<app-projects></app-projects>\n\n<!-- <router-outlet></router-outlet> -->\n<footer>\n  <div id=\"contact\" class=\"section get-help\">\n    <div class=\"container\">\n      <h3 class=\"section-heading\">Let's work together</h3>\n        <a id=\"email\" class=\"button button-primary\" href=\"mailto:ra1stringerATgmailDOTcom\" onclick=\"this.href=this.href.replace(/AT/, '@').replace(/DOT/,'.')\">E-Mail Me</a>\n      <div class=\"row\">\n        <div class=\"twelve columns\">\n          <a href=\"https://www.linkedin.com/in/robin-stringer\"  target=\"_blank\"><i class=\"fa fa-linkedin fa-2x\" aria-hidden=\"true\"></i></a>\n          <a href=\"https://github.com//rastringer\"  target=\"_blank\"><i class=\"fa fa-github fa-2x\" aria-hidden=\"true\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"projects\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"twelve columns\">\n        <h3 id=\"projects-start\">Recent Projects</h3>\n      </div>\n    </div>\n   \n\n<section class=\"projects-showcase\">\n  <div class=\"row\">\n    <div class=\"six columns u-pull-left\">\n      <div class=\"project-content text-left\">\n        <h3 class=\"project-title\">Traffic Sign Classifier</h3> \n          <p class=\"project-description\">I trained a classifier to recognize 98% of validation images by using a convolutional neural network to train the program on thousands of images from a German traffic sign dataset. The network is based on the LeNet architecture, with image pre-processing and five convolutional layers.</p>\n            <a class=\"button button-primary\" href=\"https://github.com/rastringer/Traffic-Sign-Classifier/blob/master/Traffic_Sign_Classifier.ipynb\" target=\"_blank\">See project</a>\n      </div>\n    </div>\n\n    <div class=\"six columns u-pull-right\">\n      <img class=\"project-image\" src=\"../../assets/images/traffic-sign.png\" alt=\"\"> \n    </div>\n  </div>\n</section>\n\n<section class=\"projects-showcase\">\n  <div class=\"row\"> \n    <div class=\"six columns u-pull-left\">\n      <img class=\"project-image\" src=\"../../assets/images/laneLines.jpg\" alt=\"\"> \n    </div>\n\n    <div class=\"six columns u-pull-right\">\n      <div class=\"project-content text-right\">\n        <h3 class=\"project-title\">Road Lanes Detection</h3> \n          <p class=\"project-description\">A fun project using OpenCV's computer vision methods to recognize lane line in the road. The pipeline processes images and video of the open road and applies techniques including grayscale, Hough Transform and Canny edge detection to discern lane lines.</p>\n            <a class=\"button button-primary\" href=\"https://github.com/rastringer/Road_Lanes_Detection/blob/master/lane_lines.ipynb\" target=\"_blank\">See project</a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"projects-showcase\">\n  <div class=\"row\">\n    <div class=\"six columns u-pull-left\">\n      <div class=\"project-content text-left\">\n        <h3 class=\"project-title\">As Far as the Eye Can See</h3> \n          <p class=\"project-description\">A promotional website for an offical Montreal Film Festival selection. I enjoyed careful collaboration with designers and the director to wireframe and complete the project rapidly in time for the festival. Written in JavaScript, AngularJS and Node.js.</p>\n            <a class=\"button button-primary\" href=\"http://asfarasmovie.com\" target=\"_blank\">See project</a>\n      </div>\n    </div>\n    \n    <div class=\"six columns u-pull-right\">\n      <img class=\"project-image\" src=\"../../assets/images/as-far.PNG\" alt=\"\">\n    </div>\n  </div>\n</section>\n\n</div><!--  end container  -->\n</div><!--  end #projects -->\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);


/***/ })

},[694]);
//# sourceMappingURL=main.bundle.map