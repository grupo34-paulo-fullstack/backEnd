import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677856962946 implements MigrationInterface {
    name = 'createTables1677856962946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "createdAt" SET DEFAULT '"2023-03-03T15:22:47.447Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-02 04:23:57.59'`);
    }

}
