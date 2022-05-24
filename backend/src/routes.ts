import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Hello Worlsdsdfsd');
});

routes.get('/users', UserController.index);
routes.post('/users/enviar-email', UserController.create);

export default routes;