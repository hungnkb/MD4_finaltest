"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_schema_1 = __importDefault(require("../../schemas/student.schema"));
class StudentAPI {
    constructor() {
        this.addStudent = async (req, res) => {
            let { code, name, className, theoPoint, practicePoint, gpa, desc } = req.body;
            try {
                let newStudent = await student_schema_1.default.create({
                    code: code,
                    name: name,
                    theoreticalPoint: theoPoint,
                    practicePoints: practicePoint,
                    gpa: gpa,
                    desc: desc,
                    class: className,
                });
                if (newStudent) {
                    res.status(200).json("Create Success");
                }
                else {
                    res.status(200).json("Create Fail");
                }
            }
            catch (err) {
                console.log(err);
            }
        };
        this.get = async (req, res) => {
            let student = await student_schema_1.default.find();
            res.status(200).json({ message: "Create Success", student });
        };
        this.deleteStudent = async (req, res) => {
            try {
                let deleteStudent = await student_schema_1.default.findByIdAndDelete({ _id: req.params.code }).then(result => {
                    res.status(200).json({ message: 'delete success' });
                }).catch(err => {
                    res.status(400).json({ message: 'delete fail' });
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.editStudent = async (req, res) => {
            let { name, className, theoPoint, practicePoint, gpa, desc } = req.body;
            let editStudent = await student_schema_1.default.findOneAndUpdate({ code: req.body.code }, { $set: {
                    name: name,
                    theoreticalPoint: theoPoint,
                    practicePoints: practicePoint,
                    gpa: gpa,
                    desc: desc,
                } });
            res.status(200).json({ message: 'update success' });
        };
    }
}
exports.default = new StudentAPI();
//# sourceMappingURL=student.api.controller.js.map