import apiRouter from "./api/api.router";
import homeRouter from "./home.router";
import studentRouter from "./student.router";

const route = (app) => {
  app.use("/", homeRouter);
  app.use("/api", apiRouter);
  app.use("/student", studentRouter);
};

export default route;
