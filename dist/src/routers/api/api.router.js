"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const class_api_constroller_1 = __importDefault(require("../../controllers/api/class.api.constroller"));
const student_api_controller_1 = __importDefault(require("../../controllers/api/student.api.controller"));
const apiRouter = express_1.default.Router();
apiRouter.post('/student', student_api_controller_1.default.addStudent);
apiRouter.get('/student', student_api_controller_1.default.get);
apiRouter.delete('/student/:code', student_api_controller_1.default.deleteStudent);
apiRouter.get('/class', class_api_constroller_1.default.get);
apiRouter.post('/student/edit', student_api_controller_1.default.editStudent);
exports.default = apiRouter;
//# sourceMappingURL=api.router.js.map