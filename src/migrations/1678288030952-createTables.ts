import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1678288030952 implements MigrationInterface {
    name = 'createTables1678288030952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "createdAt" SET DEFAULT '"2023-03-08T15:07:14.148Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-08 15:05:24.059'`);
    }

}
