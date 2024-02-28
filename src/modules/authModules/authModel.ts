import mongoose, { Types, Schema, Document, model } from "mongoose";

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

export const userModel = mongoose.model<Iuser>("users", userSchema);



interface Icompany extends Document {
  _id: Types.ObjectId;
  company_name: string;
  company_details: string;
  company_unique_id: string;
  owner_id: Types.ObjectId;
}

const companySchema: Schema<Icompany> = new Schema<Icompany>({
    company_name: {
      type: String,
      required: true,
    },
    company_details:{
      type: String,
    },
    company_unique_id:{
      type: String,
      unique: true,

    },
    owner_id:{
      type: Schema.Types.ObjectId,
      required: true
    }
})

export const companyModel = mongoose.model<Icompany>('companies',companySchema)
