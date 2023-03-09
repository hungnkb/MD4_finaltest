import { Request, Response } from "express";
import Student from "../../schemas/student.schema";
import Class from "../../schemas/Class.schema";

class ClassAPI {

get = async (req: Request, res: Response) => {
    let classes = await Class.find();
    res.status(200).json({classes});
};

}

export default new ClassAPI();
