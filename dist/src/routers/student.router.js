"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = __importDefault(require("../controllers/student.controller"));
let studentRouter = express_1.default.Router();
studentRouter.get('/', student_controller_1.default.home);
studentRouter.get('/:_id', student_controller_1.default.studentInfo);
studentRouter.get('/edit/:_id', student_controller_1.default.StudentEditForm);
exports.default = studentRouter;
//# sourceMappingURL=student.router.js.map