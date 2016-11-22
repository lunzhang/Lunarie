"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var search_component_1 = require('./swords/search/search.component');
var sword_component_1 = require('./swords/sword.component');
var keyboard_component_1 = require('./keyboard/keyboard.component');
var row_component_1 = require('./keyboard/row/row.component');
var key_component_1 = require('./keyboard/key/key.component');
var app_routes_1 = require('./app.routes');
var common_1 = require('@angular/common');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent, search_component_1.SearchComponent, sword_component_1.SwordComponent,
                keyboard_component_1.KeyboardComponent, row_component_1.RowComponent, key_component_1.KeyComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map