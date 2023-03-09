import express from 'express';
import studentApiController from 'src/controllers/api/student.api.controller';
import studentController from '../controllers/student.controller';


let studentRouter = express.Router();

studentRouter.get('/', studentController.home)
studentRouter.get('/:_id', studentController.studentInfo)
studentRouter.get('/edit/:_id', studentController.StudentEditForm)

export default studentRouter;
