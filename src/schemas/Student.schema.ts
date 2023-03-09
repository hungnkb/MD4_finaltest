import mongoose, { Schema, model } from "mongoose";

interface IStudent {
  name: string,
  code: string,
  age: number,
  theoreticalPoint: number,
  practicePoints: number,
  desc: string,
  gpa: string,
  class: string,
}

let studentSchema = new Schema<IStudent>({
    name: String,
    code: String,
    age: Number,
    theoreticalPoint: Number,
    practicePoints: Number,
    desc: String,
    gpa: String,
    class: String,
});

const Student = model<IStudent>('Student', studentSchema);

export default Student ;
