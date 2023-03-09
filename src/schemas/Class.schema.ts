import mongoose, { Schema, model } from "mongoose";

interface IClass {
  nameClass: string,
}

let classSchema = new Schema<IClass>({
   nameClass: String,
});

const Class = model<IClass>('Class', classSchema);

export default Class ;
