"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let studentSchema = new mongoose_1.Schema({
    name: String,
    code: String,
    age: Number,
    theoreticalPoint: Number,
    practicePoints: Number,
    desc: String,
    gpa: String,
    class: String,
});
const Student = (0, mongoose_1.model)('Student', studentSchema);
exports.default = Student;
//# sourceMappingURL=student.schema.js.map