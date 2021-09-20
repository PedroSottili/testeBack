import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableFormulario1632102946365 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"formulario",
                columns: [
                    {
                        name: "uid",
                        type: "uuid",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "30",
                        isNullable: false,
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        length: "30",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "200",
                        isNullable: false,
                    },
                    {
                        name: "senha",
                        type: "varchar",
                        length: "200",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        isNullable: false,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable: false,
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("formulario", true, true, true);
    }

}
