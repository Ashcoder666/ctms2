import authRoute from './authModules/authRoutes';


import { Express } from "express";


function routing(app: Express) {
    app.use("/api",authRoute);
    app.use("*", (req, res, next) => {
      return res.status(404).json({
        message: "not-found",
        error: "not-found",
      });
    });
  }
  export default routing;