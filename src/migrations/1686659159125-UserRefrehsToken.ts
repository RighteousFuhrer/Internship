import type { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRefrehsToken1686659159125 implements MigrationInterface {

  public name = 'UserRefrehsToken1686659159125';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "hashedRt" 
      character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN 
      "image" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN 
      "image" SET NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE
     "user" DROP COLUMN "hashedRt"`);
  }

}
