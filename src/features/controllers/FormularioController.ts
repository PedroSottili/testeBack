import { Request, Response } from "express";
import { Formulario } from "../../core/data/database/entities/Formulario";
import { v4 as uuid } from "uuid";

export default class FormularioController {
  public async index(request: Request, response: Response) {
    const formularios = await Formulario.find();
    
    return response.json(formularios);
  }

  public async show(request: Request, response: Response) {
    const { uid } = request.params;
    const formulario = await Formulario.findOne(uid);

    return response.send(formulario);
  }

  public async store(request: Request, response: Response) {
    const { nome, cpf, email, senha } = request.body;
    const formulario = await new Formulario(uuid(),nome, cpf, email, senha).save();

    return response.json(formulario);
  }

  public async delete(request: Request, response: Response) {
    const {uid} = request.params;

    await Formulario.delete(uid);

    return response.sendStatus(204);
  }
}
