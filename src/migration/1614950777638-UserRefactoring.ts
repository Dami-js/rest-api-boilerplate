import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRefactoring1614950777638 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "firstname" TO "surname"`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "surname" TO "firstname"`,
    );
  }
}
