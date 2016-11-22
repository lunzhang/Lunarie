"use strict";
var router_1 = require('@angular/router');
var sword_component_1 = require('./swords/sword.component');
var keyboard_component_1 = require('./keyboard/keyboard.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/keyboard',
        pathMatch: 'full'
    },
    { path: 'swords', component: sword_component_1.SwordComponent },
    { path: 'keyboard', component: keyboard_component_1.KeyboardComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map