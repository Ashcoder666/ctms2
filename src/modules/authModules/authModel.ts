import mongoose, { Types, Schema, Document } from "mongoose";

enum Roles {
  manger = "MANAGER",
  developer = "DEVELOPER",
  qa = "QA",
  uiux = "UIUX",
  others = "OTHERS",
}

interface Iuser extends Document {
  _id: Types.ObjectId;
  fullName: string;
  role: Roles;
  email: string;
  company_id: Types.ObjectId;
  password: string;
}

const userSchema: Schema<Iuser> = new Schema<Iuser>({
  fullName: {
    type: "string",
    required: true,
  },
  role: {
    type: "string",
    enum: ["MANAGER", "DEVELOPER", "QA", "UIUX", "OTHERS"],
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  company_id: {
    type: Schema.Types.ObjectId,
    // required: true,
  },
  password: {
    type: "string",
    required: true,
  }
});

const userModel = mongoose.model<Iuser>("users", userSchema);

export default userModel;
