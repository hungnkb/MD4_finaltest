import { Request, Response } from "express";
declare class ClassAPI {
    get: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ClassAPI;
export default _default;
