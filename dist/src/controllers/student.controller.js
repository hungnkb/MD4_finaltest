"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_schema_1 = __importDefault(require("../schemas/student.schema"));
class StudentController {
    constructor() {
        this.home = async (req, res) => {
            res.render('student');
        };
        this.studentInfo = async (req, res) => {
            let code = req.params._id;
            let studentInfo = await student_schema_1.default.findOne({ _id: code });
            res.render('studentInfo', { student: studentInfo });
        };
        this.StudentEditForm = async (req, res) => {
            let code = req.params._id;
            let student = await student_schema_1.default.findOne({ _id: code });
            let classes = await student_schema_1.default.find();
            res.render('studentEdit', { student, classes });
        };
    }
}
exports.default = new StudentController();
//# sourceMappingURL=student.controller.js.map