import type { MigrationInterface, QueryRunner } from 'typeorm';

export class UserIdString1686918837319 implements MigrationInterface {

  public name = 'UserIdString1686918837319';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP CONSTRAINT "FK_efbf91cf38a009183082aedc64e"',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP COLUMN "quontity"',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP COLUMN "productId"',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "quontity" integer NOT NULL DEFAULT \'1\'',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "productId" integer',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "name" character varying NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD CONSTRAINT "UQ_77ac1581209ed23f1981d2d9db5" UNIQUE ("name")',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "price" integer NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "total_sold" integer NOT NULL DEFAULT \'0\'',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "image" bytea NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"',
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
      'ALTER TABLE "cart" DROP CONSTRAINT "UQ_756f53ab9466eb52a52619ee019"',
    );
    await queryRunner.query('ALTER TABLE "cart" DROP COLUMN "userId"');
    await queryRunner.query('ALTER TABLE "cart" ADD "userId" integer');
    await queryRunner.query(
      'ALTER TABLE "cart" ADD CONSTRAINT "UQ_756f53ab9466eb52a52619ee019" UNIQUE ("userId")',
    );
    await queryRunner.query(
      `ALTER TABLE "product_list"
      ADD CONSTRAINT "FK_efbf91cf38a009183082aedc64e" 
      FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      'ALTER TABLE "product_list" DROP CONSTRAINT "FK_efbf91cf38a009183082aedc64e"',
    );
    await queryRunner.query(
      'ALTER TABLE "cart" DROP CONSTRAINT "UQ_756f53ab9466eb52a52619ee019"',
    );
    await queryRunner.query('ALTER TABLE "cart" DROP COLUMN "userId"');
    await queryRunner.query('ALTER TABLE "cart" ADD "userId" uuid');
    await queryRunner.query(
      'ALTER TABLE "cart" ADD CONSTRAINT "UQ_756f53ab9466eb52a52619ee019" UNIQUE ("userId")',
    );
    await queryRunner.query(
      'ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"',
    );
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "id"');
    await queryRunner.query('ALTER TABLE "user" ADD "id" SERIAL NOT NULL');
    await queryRunner.query(
      'ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")',
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
      `ALTER TABLE "cart"
      ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019"
      FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query('ALTER TABLE "product_list" DROP COLUMN "image"');
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP COLUMN "total_sold"',
    );
    await queryRunner.query('ALTER TABLE "product_list" DROP COLUMN "price"');
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP CONSTRAINT "UQ_77ac1581209ed23f1981d2d9db5"',
    );
    await queryRunner.query('ALTER TABLE "product_list" DROP COLUMN "name"');
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP COLUMN "productId"',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" DROP COLUMN "quontity"',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "productId" integer',
    );
    await queryRunner.query(
      'ALTER TABLE "product_list" ADD "quontity" integer NOT NULL DEFAULT \'1\'',
    );
    await queryRunner.query(
      `ALTER TABLE "product_list" 
      ADD CONSTRAINT "FK_efbf91cf38a009183082aedc64e" 
      FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

}
