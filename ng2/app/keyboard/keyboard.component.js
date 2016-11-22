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
var core_1 = require("@angular/core");
var row_component_1 = require("./row/row.component");
var KeyboardComponent = (function () {
    function KeyboardComponent() {
        this.rows = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            ['z', 'x', 'c', 'v', 'b', 'n', 'm']];
        this.timers = [];
        this.activatedKeys = {};
        this.errorKey = null;
        this.inProgress = false;
        this.score = 0;
        this.highScore = localStorage.kbHighScore || 0;
        this.gameSpeed = 800;
    }
    //starts game
    KeyboardComponent.prototype.start = function () {
        if (!this.inProgress) {
            this.inProgress = true;
            if (this.errorKey)
                this.errorKey.deactivate();
            this.beginTimer();
        }
    };
    //timer to activate random key
    KeyboardComponent.prototype.beginTimer = function () {
        var _this = this;
        var timer = setTimeout(function () {
            var rowNum = Math.floor((Math.random() * 4));
            var keyNum = Math.floor((Math.random() * _this.rows[rowNum].length));
            var key = _this.rowComponents._results[rowNum].getKey(keyNum);
            if (!_this.activatedKeys[key.value]) {
                key.activate();
                _this.activatedKeys[key.value] = key;
            }
            if (_this.inProgress)
                _this.beginTimer();
        }, this.gameSpeed);
        this.timers.push(timer);
    };
    //end of game
    KeyboardComponent.prototype.end = function () {
        this.inProgress = false;
        //clear timers
        for (var i = 0; i < this.timers.length; i++) {
            clearTimeout(this.timers[i]);
        }
        this.timers = [];
        //remove active keys
        for (var prop in this.activatedKeys) {
            this.activatedKeys[prop].deactivate();
        }
        this.activatedKeys = {};
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.kbHighScore = this.highScore;
        }
        this.score = 0;
        this.gameSpeed = 800;
    };
    //listen for lose event
    KeyboardComponent.prototype.rowEvent = function (key) {
        this.errorKey = key;
        this.errorKey.error();
        this.end();
    };
    //key handler
    KeyboardComponent.prototype.handleKeyboardEvent = function (e) {
        if (this.inProgress) {
            if (this.activatedKeys[e.key]) {
                this.activatedKeys[e.key].deactivate();
                delete this.activatedKeys[e.key];
                this.score++;
                this.gameSpeed = this.gameSpeed > 500 ? 800 - (this.score * 10) : 500;
            }
            else {
                //wrong key pressed
                for (var i = 0; i < this.rows.length; i++) {
                    for (var j = 0; j < this.rows[i].length; j++) {
                        if (e.key == this.rows[i][j]) {
                            this.errorKey = this.rowComponents._results[i].errorKey(j);
                        }
                    }
                }
                this.end();
            }
        }
        else {
            if (e.key == "Enter") {
                this.start();
            }
        }
    };
    return KeyboardComponent;
}());
__decorate([
    core_1.ViewChildren(row_component_1.RowComponent),
    __metadata("design:type", Object)
], KeyboardComponent.prototype, "rowComponents", void 0);
__decorate([
    core_1.HostListener('document:keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], KeyboardComponent.prototype, "handleKeyboardEvent", null);
KeyboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'keyboard',
        templateUrl: './keyboard.component.html'
    }),
    __metadata("design:paramtypes", [])
], KeyboardComponent);
exports.KeyboardComponent = KeyboardComponent;
//# sourceMappingURL=keyboard.component.js.map