

import { Request, Response } from "express";
import { companyModel, userModel } from "./authModel";
import passwordHasher from "../../utils/passwordHash";

const authController = {
  // register a user
  register: async (req: Request, res: Response) => {
    try {
      const { fullName, role, email, company_id, password } = req.body;

      const hashedpass = passwordHasher(password);

      const newUser = await userModel.create({
        fullName,
        role,
        email,
        company_id,
        password: hashedpass,
      });

      return res
        .status(201)
        .json({ message: "user registered succesfully", newUser: newUser });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  // register a company

  registerCompany: async (req: Request, res: Response) => {
    try {
      const { company_name, company_details, company_unique_id, owner_id } =
        req.body;
      const newCompany = await companyModel.create({
        company_name,
        company_details,
        company_unique_id,
        owner_id,
      });
      return res
        .status(201)
        .json({ message: "company registered succesfully", companyDetails: newCompany });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default authController;
