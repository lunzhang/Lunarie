"use strict";
var router_1 = require('@angular/router');
var sword_routes_1 = require('./swords/sword.routes');
exports.routes = [
    {
        path: '',
        redirectTo: '/swords',
        pathMatch: 'full'
    }
].concat(sword_routes_1.swordRoutes);
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map