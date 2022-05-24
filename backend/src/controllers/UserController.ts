import { Request, Response } from "express";
import EmailService from "../services/emailService";

const users = [
    { name: 'Tiago', email: 'tiago@tiagocolucci.com' },
];

export default {
   async index(req: Request, res: Response) {
       return res.json(users);
   },
   
   async create(req: Request, res: Response) {
       const emailService = new EmailService();

       emailService.sendMail({
            to: { 
                'name': 'Mercia', 
                'email': 'teste'
            },
            message: { 
                'subject': 'Oi', 
                'body': 'Tchupleq Tchuplim'
            }
        });
   }
}