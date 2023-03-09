import mongoose from "mongoose";
interface IClass {
    nameClass: string;
}
declare const Class: mongoose.Model<IClass, {}, {}, {}, any>;
export default Class;
