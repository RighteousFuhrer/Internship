import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRelations1686308264351 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_list"
          ADD CONSTRAINT "FK_e92afab88c5e539cff5e604d592"
          FOREIGN KEY ("cartId") REFERENCES "cart"("id")
          ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_list" ADD CONSTRAINT 
      "FK_efbf91cf38a009183082aedc64e" FOREIGN KEY 
      ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart"
          ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019"
          FOREIGN KEY ("userId") REFERENCES "user"("id")
          ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product"
          ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812"
          FOREIGN KEY ("categoryId") REFERENCES "category"("id")
          ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"',
    );
    await queryRunner.query(
      'ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP CONSTRAINT "FK_e92afab88c5e539cff5e604d592"',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP CONSTRAINT "FK_efbf91cf38a009183082aedc64e"',
    );
  }

}
