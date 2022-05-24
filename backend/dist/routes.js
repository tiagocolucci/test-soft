"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const routes = (0, express_1.Router)();
routes.get('/', (req, res) => {
    return res.send('Hello Worlsdsdfsd');
});
routes.get('/users', UserController_1.default.index);
routes.post('/users/enviar-email', UserController_1.default.create);
exports.default = routes;
