import mongoose from "mongoose";
interface IStudent {
    name: string;
    code: string;
    age: number;
    theoreticalPoint: number;
    practicePoints: number;
    desc: string;
    gpa: string;
    class: string;
}
declare const Student: mongoose.Model<IStudent, {}, {}, {}, any>;
export default Student;
