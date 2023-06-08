import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { hash } from 'bcrypt';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  public id: number = 0;

  @Column({ unique: true, nullable: false })
  public email: string = '';

  @Column({ unique: false, nullable: false })
  public first_name: string = '';

  @Column({ unique: false, nullable: false })
  public password: string = '';

  @BeforeInsert()
  public async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 10);
  }

}
