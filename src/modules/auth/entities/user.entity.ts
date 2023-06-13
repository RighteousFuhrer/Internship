import { Cart } from '../../sale/entities/cart.entity';
import { BeforeInsert, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import * as bcrypt from 'bcrypt';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ unique: true, nullable: false })
  public email!: string;

  @Column({ unique: false, nullable: false })
  public first_name!: string;

  @Column({ unique: false, nullable: false })
  public last_name!: string;

  @Column({ unique: false, nullable: false })
  public password!: string;

  @Column({ type: 'bytea', nullable: true })
  public image!: Buffer;

  @Column({  nullable: true })
  public hashedRt!: string;

  @OneToOne(() => Cart, (cart) => cart.user)
  public cart!: Cart;

  @BeforeInsert()
  public async hashPassword() : Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }

}
