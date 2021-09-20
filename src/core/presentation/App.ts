import express from 'express';
import cors from 'cors';
import Database from '../data/connections/Database';
import FormularioRoutes from '../../features/routers/FormularioRoutes';

export default class App{
    readonly #express: express.Application;

    constructor(){
        this.#express=express();
    }

    public async init() {
        this.config();
        this.routes();
        await this.database();
    }

    private async database() {
        await new Database().openConnection();
    }

    private config() {
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: false }));
        this.#express.use(cors());
    }

    private routes() {
        const formularioroutes = new FormularioRoutes().init();
        

        this.#express.use(formularioroutes);
    }

    public start(port: any) {
        this.#express.listen(port, () => {
            console.log('API rodando...');
        });
    }
}
