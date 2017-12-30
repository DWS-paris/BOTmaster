webpackJsonp(["common"],{

/***/ "../../../../../src/app/partials/hal/hal.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"halEye\" (click)=\"proceedChangeVue('login')\">\n  <article id=\"coverEye\" [ngClass]=\"{'open': coverEyeOpen}\">\n    <img [src]=\"'assets/img/coverHal.png'\">\n  </article>\n\n  <article id=\"animEye\" [ngClass]=\"{'open': animEyeOpen}\">\n    <img [src]=\"'assets/img/halEye.gif'\" [ngClass]=\"{'hide': hideAnim}\">\n  </article>\n</section>\n\n<section id=\"halSentences\"  [ngClass]=\"{'open': showSentence}\">\n  <p>{{halSentence}}</p>\n</section>"

/***/ }),

/***/ "../../../../../src/app/partials/hal/hal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HalComponent; });
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

var HalComponent = (function () {
    function HalComponent() {
        this.coverEyeOpen = false;
        this.animEyeOpen = false;
        this.hideAnim = false;
        this.showSentence = false;
        // Configurer l'émetteur d'événement
        this.changeVue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */];
        this.nextStep = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */];
    }
    ;
    // Ecrire les fonctions pour émettre les événements
    HalComponent.prototype.proceedChangeVue = function () {
        var _this = this;
        this.hideAnim = true;
        this.coverEyeOpen = false;
        this.showSentence = false;
        this.nextStep.emit(false);
        // Emettre l'événement
        setTimeout(function () { _this.changeVue.emit(_this.vuePath); }, 300);
    };
    ;
    HalComponent.prototype.proceedNextStep = function () {
        var _this = this;
        // Emettre l'événement
        setTimeout(function () { _this.nextStep.emit(true); }, 100);
    };
    ;
    // Ecrire une fonction pour l'animation d'introduction
    HalComponent.prototype.introduction = function () {
        var _this = this;
        this.coverEyeOpen = true;
        setTimeout(function () { _this.animEyeOpen = true; }, 100);
    };
    ;
    // Ecrire une fonction pour faire parler Hal
    HalComponent.prototype.halSpeacking = function (sentence) {
        this.halSentence = sentence;
        this.showSentence = true;
    };
    // Fonction au chargement du composant : introduction
    HalComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.introduction(); }, 100);
        setTimeout(function () {
            _this.halSpeacking(_this.halSentence);
            _this.proceedNextStep();
        }, 300);
    };
    return HalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], HalComponent.prototype, "halSentence", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], HalComponent.prototype, "vuePath", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], HalComponent.prototype, "changeVue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], HalComponent.prototype, "nextStep", void 0);
HalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-hal',
        template: __webpack_require__("../../../../../src/app/partials/hal/hal.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], HalComponent);

var _a, _b;
//# sourceMappingURL=hal.component.js.map

/***/ }),

/***/ "../../../../../src/app/partials/hal/hal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hal_component__ = __webpack_require__("../../../../../src/app/partials/hal/hal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Importer les composants

var HalModule = (function () {
    function HalModule() {
    }
    return HalModule;
}());
HalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_2__hal_component__["a" /* HalComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__hal_component__["a" /* HalComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]]
    })
], HalModule);

//# sourceMappingURL=hal.module.js.map

/***/ })

});
//# sourceMappingURL=common.chunk.js.map