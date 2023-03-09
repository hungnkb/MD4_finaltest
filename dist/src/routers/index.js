"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_router_1 = __importDefault(require("./api/api.router"));
const home_router_1 = __importDefault(require("./home.router"));
const student_router_1 = __importDefault(require("./student.router"));
const route = (app) => {
    app.use("/", home_router_1.default);
    app.use("/api", api_router_1.default);
    app.use("/student", student_router_1.default);
};
exports.default = route;
//# sourceMappingURL=index.js.map