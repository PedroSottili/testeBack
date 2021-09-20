import { Router } from "express";
import FormularioController from "../controllers/FormularioController";

export default class FormularioRoutes{
    public init(): Router {
        const routes= Router();
        const controller = new FormularioController();

        routes.get('/formulario', controller.index);
        routes.get('/formulario/:uid', controller.show);
        routes.post('/formulario', controller.store);
        routes.delete('/formulario:uid', controller.delete);
        
        return routes;
    }
}