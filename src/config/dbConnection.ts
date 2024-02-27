import { DB_URL } from "./constants";
import mongoose, { ConnectOptions } from "mongoose";

mongoose.set("strictQuery", false);

const connectDatabase = () => {
  try {
    if (!DB_URL) {
      throw new Error("DB_URL is not defined.");
    }
    mongoose.connect(DB_URL, {
      useNewUrlParser: true,
    } as ConnectOptions);

    mongoose.connection.on("error", (error: string) => {
      console.log("Connect to database failed with error:", error);
      throw new Error(error);
    });

    mongoose.connection.on("open", () => {
      console.log("Connect to database successfully");
    });
  } catch (error: any) {
    console.log("Connect to database failed with error:", error);
    throw new Error(error);
  }
};

export default connectDatabase;