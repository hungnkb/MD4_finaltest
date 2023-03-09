import express from 'express';
import studentController from '../controllers/student.controller';


let studentRouter = express.Router();

studentRouter.get('/', studentController.home)
studentRouter.get('/:_id', studentController.studentInfo)

export default studentRouter;
