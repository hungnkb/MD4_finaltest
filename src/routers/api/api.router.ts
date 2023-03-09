import express from "express";
import classApiConstroller from "../../controllers/api/class.api.constroller";
import studentApiController from "../../controllers/api/student.api.controller";
import studentController from "../../controllers/student.controller";

const apiRouter = express.Router();

// apiRouter.get('/branch', BranchAPI.get);

apiRouter.post('/student', studentApiController.addStudent);
apiRouter.get('/student', studentApiController.get);
apiRouter.delete('/student/:code', studentApiController.deleteStudent);
apiRouter.get('/class', classApiConstroller.get);

// apiRouter.get('/login', apiController.showLogin);
// apiRouter.post("/register", apiController.register);
// apiRouter.post("/login", apiController.login);
// apiRouter.get("/logout", apiController.logout);



export default apiRouter;
