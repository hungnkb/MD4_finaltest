import {Request, Response} from 'express';
import Student from '../schemas/student.schema';
import Class from '../schemas/class.schema';

class StudentController {

    home = async (req: Request, res: Response) => {
            
       res.render('student');
    }

    studentInfo = async (req: Request, res: Response) => {
        let code = req.params._id;
        
        let studentInfo = await Student.findOne({_id: code});

        
        res.render('studentInfo', {student: studentInfo});
    }

    StudentEditForm = async (req: Request, res: Response) => {
        let code = req.params._id;
        let student = await Student.findOne({_id: code});
        let classes = await Student.find()
        res.render('studentEdit', {student, classes});
    }
}

export default new StudentController();
