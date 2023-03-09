import { Request, Response } from 'express';
declare class StudentController {
    home: (req: Request, res: Response) => Promise<void>;
    studentInfo: (req: Request, res: Response) => Promise<void>;
}
declare const _default: StudentController;
export default _default;
