import { Request, Response } from "express";
import Student from "../../schemas/student.schema";

class StudentAPI {
  addStudent = async (req: Request, res: Response) => {
    
    // name: string,
    // code: string,
    // age: number,
    // theoreticalPoint: number,
    // practicePoints: number,
    // desc: string,
    // gpa: string,
    // class: string,
    
    let { code, name, className, theoPoint, practicePoint, gpa, desc } = req.body;

    try {
      let newStudent = await Student.create({
        code: code,
        name: name,
        theoreticalPoint: theoPoint,
        practicePoints: practicePoint,
        gpa: gpa,
        desc: desc,
        class: className,
      });
      if (newStudent) {
        res.status(200).json("Create Success");
      } else {
        res.status(200).json("Create Fail");
      }
    } catch (err) {
      console.log(err);
    }
  };

  get = async (req: Request, res: Response) => {
  let student = await Student.find();

    res.status(200).json({ message: "Create Success", student });
  };

  deleteStudent = async (req: Request, res: Response) => {
    try{
      let deleteStudent = await Student.findByIdAndDelete({_id: req.params.code}).then(result => {
        res.status(200).json({message: 'delete success'});
      }).catch(err => {
        res.status(400).json({message: 'delete fail'});
      });
      
    } catch (err) {
      console.log(err);    
    }
  };

  editStudent = async (req: Request, res: Response) => {
    let {name, className, theoPoint, practicePoint, gpa, desc} = req.body
    
    let editStudent = await Student.findOneAndUpdate({code: req.body.code}, {$set: {
      name: name,
      theoreticalPoint: theoPoint,
      practicePoints: practicePoint,
      gpa: gpa,
      desc: desc,
    }})

      res.status(200).json({message: 'update success'});
  
  }
}

export default new StudentAPI();
