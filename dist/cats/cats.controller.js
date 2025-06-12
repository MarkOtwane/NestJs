"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CatsController", {
    enumerable: true,
    get: function() {
        return CatsController;
    }
});
const _common = require("@nestjs/common");
const _catsservice = require("./cats.service");
const _createcatdto = require("./dto/create-cat.dto");
const _updatecatdto = require("./dto/update-cat.dto");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let CatsController = class CatsController {
    create(createCatDto) {
        return this.catsService.create(createCatDto);
    }
    findAll() {
        return this.catsService.findAll();
    }
    findOne(id) {
        return this.catsService.findOne(+id);
    }
    update(id, updateCatDto) {
        return this.catsService.update(+id, updateCatDto);
    }
    remove(id) {
        return this.catsService.remove(+id);
    }
    constructor(catsService){
        this.catsService = catsService;
    }
};
_ts_decorate([
    (0, _common.Post)(),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcatdto.CreateCatDto === "undefined" ? Object : _createcatdto.CreateCatDto
    ]),
    _ts_metadata("design:returntype", void 0)
], CatsController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], CatsController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], CatsController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _updatecatdto.UpdateCatDto === "undefined" ? Object : _updatecatdto.UpdateCatDto
    ]),
    _ts_metadata("design:returntype", void 0)
], CatsController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], CatsController.prototype, "remove", null);
CatsController = _ts_decorate([
    (0, _common.Controller)('cats'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _catsservice.CatsService === "undefined" ? Object : _catsservice.CatsService
    ])
], CatsController);

//# sourceMappingURL=cats.controller.js.map