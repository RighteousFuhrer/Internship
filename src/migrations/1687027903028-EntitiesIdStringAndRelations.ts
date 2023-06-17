import type { MigrationInterface, QueryRunner } from 'typeorm';

export class EntitiesIdStringAndRelations1687027903028
implements MigrationInterface {

  public name = 'EntitiesIdStringAndRelations1687027903028';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"',
    );
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "id"');
    await queryRunner.query(
      'ALTER TABLE "user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()',
    );
    await queryRunner.query(
      'ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")',
    );
    await queryRunner.query(
      'ALTER TABLE "category" DROP CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03"',
    );
    await queryRunner.query('ALTER TABLE "category" DROP COLUMN "id"');
    await queryRunner.query(
      'ALTER TABLE "category" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()',
    );
    await queryRunner.query(
      'ALTER TABLE "category" ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")',
    );
    await queryRunner.query(
      'ALTER TABLE "product" DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82"',
    );
    await queryRunner.query('ALTER TABLE "product" DROP COLUMN "id"');
    await queryRunner.query(
      'ALTER TABLE "product" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()',
    );
    await queryRunner.query(
      'ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")',
    );
    await queryRunner.query('ALTER TABLE "product" DROP COLUMN "categoryId"');
    await queryRunner.query('ALTER TABLE "product" ADD "categoryId" uuid');
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP CONSTRAINT "PK_7eb1ca9df9ea7e23eb2cb750205"',
    );
    await queryRunner.query('ALTER TABLE "product_list" DROP COLUMN "id"');
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD CONSTRAINT "PK_7eb1ca9df9ea7e23eb2cb750205" PRIMARY KEY ("id")',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP COLUMN "productId"',
    );
    await queryRunner.query('ALTER TABLE "product_list" ADD "productId" uuid');
    await queryRunner.query('ALTER TABLE "product_list" DROP COLUMN "cartId"');
    await queryRunner.query('ALTER TABLE "product_list" ADD "cartId" uuid');
    await queryRunner.query(
      'ALTER TABLE "cart" DROP CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7"',
    );
    await queryRunner.query('ALTER TABLE "cart" DROP COLUMN "id"');
    await queryRunner.query(
      'ALTER TABLE "cart" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()',
    );
    await queryRunner.query(
      'ALTER TABLE "cart" ADD CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id")',
    );
    await queryRunner.query(
      'ALTER TABLE "cart" DROP CONSTRAINT "REL_756f53ab9466eb52a52619ee01"',
    );
    await queryRunner.query('ALTER TABLE "cart" DROP COLUMN "userId"');
    await queryRunner.query('ALTER TABLE "cart" ADD "userId" uuid');
    await queryRunner.query(
      'ALTER TABLE "cart" ADD CONSTRAINT "UQ_756f53ab9466eb52a52619ee019" UNIQUE ("userId")',
    );
    await queryRunner.query(
      `ALTER TABLE "product"
    ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" 
    FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_list" 
      ADD CONSTRAINT "FK_efbf91cf38a009183082aedc64e" 
      FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_list" 
      ADD CONSTRAINT "FK_e92afab88c5e539cff5e604d592" 
      FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart" 
      ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" 
      FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP CONSTRAINT "FK_e92afab88c5e539cff5e604d592"',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP CONSTRAINT "FK_efbf91cf38a009183082aedc64e"',
    );
    await queryRunner.query(
      'ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"',
    );
    await queryRunner.query(
      'ALTER TABLE "cart" DROP CONSTRAINT "UQ_756f53ab9466eb52a52619ee019"',
    );
    await queryRunner.query('ALTER TABLE "cart" DROP COLUMN "userId"');
    await queryRunner.query('ALTER TABLE "cart" ADD "userId" integer');
    await queryRunner.query(
      'ALTER TABLE "cart" ADD CONSTRAINT "REL_756f53ab9466eb52a52619ee01" UNIQUE ("userId")',
    );
    await queryRunner.query(
      'ALTER TABLE "cart" DROP CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7"',
    );
    await queryRunner.query('ALTER TABLE "cart" DROP COLUMN "id"');
    await queryRunner.query('ALTER TABLE "cart" ADD "id" SERIAL NOT NULL');
    await queryRunner.query(
      'ALTER TABLE "cart" ADD CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id")',
    );
    await queryRunner.query('ALTER TABLE "product_list" DROP COLUMN "cartId"');
    await queryRunner.query('ALTER TABLE "product_list" ADD "cartId" integer');
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP COLUMN "productId"',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "productId" integer',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP CONSTRAINT "PK_7eb1ca9df9ea7e23eb2cb750205"',
    );
    await queryRunner.query('ALTER TABLE "product_list" DROP COLUMN "id"');
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "id" SERIAL NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD CONSTRAINT "PK_7eb1ca9df9ea7e23eb2cb750205" PRIMARY KEY ("id")',
    );
    await queryRunner.query('ALTER TABLE "product" DROP COLUMN "categoryId"');
    await queryRunner.query('ALTER TABLE "product" ADD "categoryId" integer');
    await queryRunner.query(
      'ALTER TABLE "product" DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82"',
    );
    await queryRunner.query('ALTER TABLE "product" DROP COLUMN "id"');
    await queryRunner.query('ALTER TABLE "product" ADD "id" SERIAL NOT NULL');
    await queryRunner.query(
      'ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")',
    );
    await queryRunner.query(
      'ALTER TABLE "category" DROP CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03"',
    );
    await queryRunner.query('ALTER TABLE "category" DROP COLUMN "id"');
    await queryRunner.query('ALTER TABLE "category" ADD "id" SERIAL NOT NULL');
    await queryRunner.query(
      'ALTER TABLE "category" ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")',
    );
    await queryRunner.query(
      'ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"',
    );
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "id"');
    await queryRunner.query('ALTER TABLE "user" ADD "id" SERIAL NOT NULL');
    await queryRunner.query(
      'ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")',
    );
  }

}
