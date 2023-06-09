import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBasicEntities1686301160284 implements MigrationInterface {

  public name = 'CreateBasicEntities1686301160284';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "product_list" ' +
        '("id" SERIAL NOT NULL, ' +
        '"cartId" integer, ' +
        '"quontity" integer NOT NULL DEFAULT \'1\', ' +
        '"productId" integer, ' +
        'CONSTRAINT "PK_7eb1ca9df9ea7e23eb2cb750205" PRIMARY KEY ("id")) ',
    );

    await queryRunner.query(
      'CREATE TABLE "user"(' +
        '"id" SERIAL NOT NULL, ' +
        '"email" character varying NOT NULL,' +
        '"first_name" character varying NOT NULL, ' +
        '"last_name" character varying NOT NULL, ' +
        '"password" character varying NOT NULL, ' +
        '"image" bytea NOT NULL, ' +
        'CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), ' +
        'CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))',
    );

    await queryRunner.query(
      'CREATE TABLE "cart" (' +
        '"id" SERIAL NOT NULL, ' +
        '"userId" integer, ' +
        'CONSTRAINT "REL_756f53ab9466eb52a52619ee01" UNIQUE ("userId"), ' +
        'CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))',
    );

    await queryRunner.query(
      'CREATE TABLE "product" (' +
        '"id" SERIAL NOT NULL, ' +
        '"name" character varying NOT NULL, ' +
        ' "price" integer NOT NULL, ' +
        '"total_sold" integer NOT NULL DEFAULT \'0\', ' +
        '"image" bytea NOT NULL, ' +
        '"categoryId" integer, ' +
        'CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name"), ' +
        'CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))',
    );

    await queryRunner.query(
      'CREATE TABLE "category" (' +
        '"id" SERIAL NOT NULL, ' +
        '"name" character varying NOT NULL, ' +
        '"image" bytea NOT NULL, ' +
        'CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), ' +
        'CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "category"');
    await queryRunner.query('DROP TABLE "product"');
    await queryRunner.query('DROP TABLE "cart"');
    await queryRunner.query('DROP TABLE "user"');
    await queryRunner.query('DROP TABLE "product_list"');
  }

}
