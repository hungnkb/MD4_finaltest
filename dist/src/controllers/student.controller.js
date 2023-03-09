"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentController {
    constructor() {
        this.home = async (req, res) => {
            res.render('student');
        };
        this.studentInfo = async (req, res) => {
            res.render('studentInfo');
        };
    }
}
exports.default = new StudentController();
//# sourceMappingURL=student.controller.js.map