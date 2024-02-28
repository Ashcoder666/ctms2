// register a user

import { Request, Response } from "express";
import userModel from "./authModel";
import passwordHasher from "../../utils/passwordHash";

const authController = {
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
        .json({ message: "otp send succesfully", newUser: newUser });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default authController;
