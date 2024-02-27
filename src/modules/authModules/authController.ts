// register a user

import { Request, Response } from "express";
import userModel from "./authModel";
import crypto from 'crypto' ;

const authController = {
  register: async (req: Request, res: Response) => {
    try {
      const { fullName, role, email, company_id, password } = req.body;
      const hash = crypto.createHash('sha256'); 
      hash.update(password); 
      const digest = hash.digest('hex'); 



      const newUser = await userModel.create({
        fullName,
        role,
        email,
        company_id,
        password:digest,
      });

      console.log(newUser)

      return res.status(201).json({ message: "otp send succesfully" });
    } catch (error:any) {
       res.status(500).json({ "message":error.message });
    }
  },
};


export default authController;