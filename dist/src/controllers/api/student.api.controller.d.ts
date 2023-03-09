import { Request, Response } from "express";
declare class StudentAPI {
    addStudent: (req: Request, res: Response) => Promise<void>;
    get: (req: Request, res: Response) => Promise<void>;
    deleteStudent: (req: Request, res: Response) => Promise<void>;
}
declare const _default: StudentAPI;
export default _default;
