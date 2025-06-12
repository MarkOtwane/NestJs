"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CatsService", {
    enumerable: true,
    get: function() {
        return CatsService;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let CatsService = class CatsService {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    create(_createCatDto) {
        return 'This action adds a new cat';
    }
    findAll() {
        return `This action returns all cats`;
    }
    findOne(id) {
        return `This action returns a #${id} cat`;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(id, _updateCatDto) {
        return `This action updates a #${id} cat`;
    }
    remove(id) {
        return `This action removes a #${id} cat`;
    }
};
CatsService = _ts_decorate([
    (0, _common.Injectable)()
], CatsService);

//# sourceMappingURL=cats.service.js.map