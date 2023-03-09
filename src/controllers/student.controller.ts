import {Request, Response} from 'express';
import Class from '../schemas/class.schema';

class StudentController {

    home = async (req: Request, res: Response) => {
            
       res.render('student');
    }

    studentInfo = async (req: Request, res: Response) => {
        res.render('studentInfo');
    }
}

export default new StudentController();
