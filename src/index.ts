import express, { Express } from "express";
import cors from "cors";
import { port, rateLimiter } from "./config/constants";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import connectDatabase from "./config/dbConnection";
import allRoutes from './modules/index'
// import authRoute from "./modules/authModules/authRoutes"

export const app: Express = express();
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});



app.use(cors());
app.use(express.json());
app.use(morgan("combined", { stream: accessLogStream }));
app.use(rateLimiter)

connectDatabase()

// app.use(allRoutes)

allRoutes(app)




export const server = app.listen(port, () => console.log("listening on port " + port));
