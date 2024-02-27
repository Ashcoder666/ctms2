// import { Router } from "express";
import authRoute from './authModules/authRoutes';
// const route = Router();

// route.use("/api",authRoute)
// app.use("*", (req, res, next) => {
//     return res.status(404).json({
//       message: "not-found",
//       error: "not-found",
//     });
//   });


// export default route;

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