import {Entity, BaseEntity, PrimaryColumn, Column, ManyToOne, JoinColumn,BeforeInsert, BeforeUpdate} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({ name: "formulario" })
export class Formulario extends BaseEntity {
    @PrimaryColumn()
    uid?: string;

    @Column()
    nome: string;

    @Column()
    cpf: string;
    
    @Column()
    email: string;
    
    @Column()
    senha: string;

    @Column({ name: "created_at" })
    createdAt?: Date;

    @Column({ name: "updated_at" })
    updatedAt?: Date;

    constructor(
        uid:string,
        nome:string,
        cpf:string,
        email:string,
        senha:string,
        createdAt?: Date,
        updatedAt?: Date
    ){
        super();
        this.uid=uid;
        this.nome=nome;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    @BeforeInsert()
    private beforeInsert () {
        this.uid = this.uid ? this.uid : uuid();
        this.createdAt = this.createdAt ? this.createdAt : new Date(Date.now());
        this.updatedAt = this.updatedAt ? this.updatedAt : new Date(Date.now());
    }

    @BeforeUpdate()
    private beforeUpdate() {
        this.updatedAt = new Date(Date.now());
    }

}