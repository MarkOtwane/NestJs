"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _catscontroller = require("./cats.controller");
const _catsservice = require("./cats.service");
describe('CatsController', ()=>{
    let controller;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            controllers: [
                _catscontroller.CatsController
            ],
            providers: [
                _catsservice.CatsService
            ]
        }).compile();
        controller = module.get(_catscontroller.CatsController);
    });
    it('should be defined', ()=>{
        expect(controller).toBeDefined();
    });
});

//# sourceMappingURL=cats.controller.spec.js.map