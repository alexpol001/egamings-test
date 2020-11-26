import { MigrationInterface, QueryRunner } from 'typeorm';

export class News1605772045765 implements MigrationInterface {
  name = 'News1605772045765';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('post', true);
    await queryRunner.query(
      `CREATE TABLE "news" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "news"`);
  }
}
