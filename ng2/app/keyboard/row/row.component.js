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
var key_component_1 = require('../key/key.component');
var RowComponent = (function () {
    function RowComponent(elem) {
        this.elem = elem;
        this.onEvent = new core_1.EventEmitter();
    }
    //length of each row depends on # of keys
    RowComponent.prototype.ngAfterViewInit = function () {
        var length = (100 / this.keys.length).toString() + '%';
        $(this.elem.nativeElement).find('key').css({ 'width': length });
    };
    RowComponent.prototype.getKey = function (i) {
        return this.keyComponents._results[i];
    };
    RowComponent.prototype.keyEvent = function (event) {
        this.onEvent.emit(event);
    };
    RowComponent.prototype.errorKey = function (i) {
        return this.keyComponents._results[i].error();
    };
    __decorate([
        core_1.ViewChildren(key_component_1.KeyComponent), 
        __metadata('design:type', Object)
    ], RowComponent.prototype, "keyComponents", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RowComponent.prototype, "keys", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RowComponent.prototype, "onEvent", void 0);
    RowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'row',
            templateUrl: './row.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], RowComponent);
    return RowComponent;
}());
exports.RowComponent = RowComponent;
//# sourceMappingURL=row.component.js.map