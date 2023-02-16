import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1676570764214 implements MigrationInterface {
    name = 'createTables1676570764214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "complement" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "complement" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" TIMESTAMP`);
    }

}
