"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CatsModule", {
    enumerable: true,
    get: function() {
        return CatsModule;
    }
});
const _common = require("@nestjs/common");
const _catsservice = require("./cats.service");
const _catscontroller = require("./cats.controller");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let CatsModule = class CatsModule {
};
CatsModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _catscontroller.CatsController
        ],
        providers: [
            _catsservice.CatsService
        ]
    })
], CatsModule);

//# sourceMappingURL=cats.module.js.map