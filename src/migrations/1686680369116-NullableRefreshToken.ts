import { MigrationInterface, QueryRunner } from "typeorm";

export class NullableRefreshToken1686680369116 implements MigrationInterface {
    name = 'NullableRefreshToken1686680369116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hashedRt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "hashedRt" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hashedRt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "hashedRt" character varying`);
    }

}
